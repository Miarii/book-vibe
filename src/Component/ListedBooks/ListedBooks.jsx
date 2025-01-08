import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStoredBookApplication, getStoredWishlist, saveBookApplication } from "../utility/localstorage";
import { toast, ToastContainer } from "react-toastify";

const ListedBooks = () => {
    const books = useLoaderData();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('reading');
    const [displayBooks, setDisplayBooks] = useState([]);

    const handleSort = (sortType) => {
        const sortedBooks = [...displayBooks];
        switch (sortType) {
            case 'latest':
                sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                break;
            case 'rating':
                sortedBooks.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                sortedBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
                break;
            case 'year':
                sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
                break;
            default:
                break;
        }
        setDisplayBooks(sortedBooks);
    };


    const handleViewDetails = (bookId) => {
        navigate(`/books/${bookId}`);
    };

    const handleAddToCollection = (bookId) => {
        // Add to reading collection
        saveBookApplication(bookId);

        // Remove from wishlist
        const wishlist = getStoredWishlist();
        const updatedWishlist = wishlist.filter(id => id !== bookId);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        // Update display if in wishlist tab
        if (activeTab === 'wishlist') {
            setDisplayBooks(prev => prev.filter(book => book.id !== bookId));
        }

        toast.success("Book added to your reading collection!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
        });
    };

    useEffect(() => {
        let storedBookIds;
        if (activeTab === 'reading') {
            storedBookIds = getStoredBookApplication();
        } else {
            storedBookIds = getStoredWishlist();
        }
        if (storedBookIds.length > 0) {
            const bookList = books.filter(book => storedBookIds.includes(book.id));
            setDisplayBooks(bookList);
        } else {
            setDisplayBooks([]);
        }
    }, [books, activeTab])

    return (
        <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/book.png')] py-12">
            <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-purple-50/90 to-blue-50/90 rounded-xl shadow-2xl backdrop-blur-sm">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">My Books</h1>
                    <div className="flex gap-4">
                        <select
                            className="px-4 py-2 border rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
                            onChange={(e) => handleSort(e.target.value)}
                        >
                            <option value="latest">Sort by Latest</option>
                            <option value="rating">Sort by Rating</option>
                            <option value="name">Sort by Name</option>
                            <option value="year">Sort by Year</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-4 mb-6">
                    <button
                        className={`px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${activeTab === 'reading' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveTab('reading')}
                    >
                        Currently Reading
                    </button>
                    <button
                        className={`px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${activeTab === 'wishlist' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveTab('wishlist')}
                    >
                        Wishlist
                    </button>
                </div>

                {activeTab === 'reading' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayBooks.map((book) => (
                            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <img src={book.image} alt={book.bookName} className="mx-auto py-2" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{book.bookName}</h3>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {book.tags.map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="space-y-1 text-gray-600">
                                        <p>Published: {book.yearOfPublishing}</p>
                                        <p>Publisher: {book.publisher}</p>
                                        <p>Pages: {book.totalPages}</p>
                                        <p>Category: {book.category}</p>
                                        <div className="flex items-center mt-2">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, index) => (
                                                    <span key={index}>{index < Math.floor(book.rating) ? '★' : '☆'}</span>
                                                ))}
                                            </div>
                                            <span className="ml-2">{book.rating}/5.0</span>
                                        </div>
                                    </div>
                                    <button onClick={() => handleViewDetails(book.id)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'wishlist' && (
                    <>
                        {displayBooks.length === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-2xl text-gray-600">Your wishlist is empty. Add more books to view them here!</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayBooks.map((book) => (
                                    <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                        <img src={book.image} alt={book.bookName} className="mx-auto py-2" />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold mb-2">{book.bookName}</h3>
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {book.tags.map((tag, index) => (
                                                    <span key={index} className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">{tag}</span>
                                                ))}
                                            </div>
                                            <div className="space-y-1 text-gray-600">
                                                <p>Published: {book.yearOfPublishing}</p>
                                                <p>Publisher: {book.publisher}</p>
                                                <p>Pages: {book.totalPages}</p>
                                                <p>Category: {book.category}</p>
                                                <div className="flex items-center mt-2">
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, index) => (
                                                            <span key={index}>{index < Math.floor(book.rating) ? '★' : '☆'}</span>
                                                        ))}
                                                    </div>
                                                    <span className="ml-2">{book.rating}/5.0</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleAddToCollection(book.id)}
                                                className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                                            >
                                                Read Now?   
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default ListedBooks;