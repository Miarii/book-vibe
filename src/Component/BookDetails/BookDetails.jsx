import { useLoaderData, useParams } from "react-router-dom";
import { saveBookApplication, saveWishlist } from "../utility/localstorage";
import { toast, ToastContainer } from "react-toastify";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find((book) => book.id === idInt);
    const similarBooks = books.filter((b) => b.category === book.category && b.id !== idInt).slice(0, 4);

    const {
        bookName,
        author,
        image,
        tags,
        category,
        rating,
        review,
        totalPages,
        publisher,
        yearOfPublishing,
    } = book;

    const handleReadNow = () => {
        saveBookApplication(idInt);
        toast.success("Book added to your reading list successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
        });
    }

    const handleAddToCollection = () => {
        saveWishlist(idInt);
        toast.info("Book added to your collection!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
        });
    }

    return (
        <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/book.png')] py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start bg-gradient-to-r from-purple-50/90 to-blue-50/90 p-8 md:p-12 rounded-xl shadow-2xl backdrop-blur-sm">
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img src={image} alt={bookName} className="w-2/3 md:w-1/2 mx-auto h-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
                    <div className="mt-6 space-y-3 flex flex-col items-center">
                        <button onClick={handleReadNow} className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                            Read Now
                        </button>
                        <button onClick={handleAddToCollection} className="w-full md:w-auto bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                            Add to Collection
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-2/3 md:pl-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{bookName}</h1>
                    <p className="text-xl text-gray-600 mb-6">By <span className="font-semibold text-purple-600">{author}</span></p>
                    <div className="space-y-4 text-gray-700">
                        <p className="flex items-center"><span className="font-medium w-32">Category:</span> <span className="bg-blue-100 px-3 py-1 rounded-full">{category}</span></p>
                        <p className="flex items-center text-sm"><span className="font-medium w-32">Reviews:</span> <span className="text-yellow-600">{review}</span></p>
                        <p className="flex items-center"><span className="font-medium w-32">Tags:</span>
                            <div className="flex gap-2 flex-wrap">
                                {tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition-colors duration-300">{tag}</span>
                                ))}
                            </div>
                        </p>
                        <p className="flex items-center"><span className="font-medium w-32">Pages:</span> {totalPages} pages</p>
                        <p className="flex items-center"><span className="font-medium w-32">Rating:</span> 
                            <span className="flex items-center">
                                <span className="text-yellow-500">{rating}</span>
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </span>
                        </p>
                        <p className="flex items-center"><span className="font-medium w-32">Publisher:</span> {publisher}</p>
                        <p className="flex items-center"><span className="font-medium w-32">Published:</span> {yearOfPublishing}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Similar Books You Might Enjoy</h2>
                {similarBooks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {similarBooks.map((similarBook) => (
                            <div key={similarBook.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <img src={similarBook.image} alt={similarBook.bookName} className="w-full h-64 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{similarBook.bookName}</h3>
                                <p className="text-gray-600 mb-3">By {similarBook.author}</p>
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {similarBook.rating}
                                    </span>
                                    <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">View Details →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-center text-lg">No similar books available at the moment.</p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;