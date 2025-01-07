import { useEffect, useState } from "react";
import Books from "../Books.jsx/Books";
// import Books from "../Books.jsx/Books";

const Collections = () => {
    const [books, setBooks] = useState([]);
    const [displayCount, setDisplayCount] = useState(4);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("books.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }
                const data = await response.json();
                setBooks(data);  
            } catch (error) {   
                setError(error.message);
            }
        };

        fetchBooks();
    }, []);
    if (error) {
        return <div className="text-center text-red-600 py-8">Error: {error}</div>;
    }

    const handleDisplayToggle = () => {
        const newDisplayCount = displayCount === books.length ? 4 : books.length;
        setDisplayCount(newDisplayCount);
    };

    return (
        <div className="container mx-auto px-4 flex flex-col items-center bg-gradient-to-r from-purple-50 to-blue-50  ">
            <h1 className="text-4xl font-bold text-center my-24">Collections</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center w-full max-w-6xl">
                {
                    books.slice(0, displayCount).map((book) => (
                        <Books key={book.bookId} book={book}></Books>
                    ))
                }
            </div>
            <div className="text-center mt-8 mb-12">    
                <button 
                    onClick={handleDisplayToggle} 
                    className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
                    {displayCount === books.length ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

export default Collections;