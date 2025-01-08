  import { useLoaderData, useNavigate } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { getStoredBookApplication } from "../utility/localstorage";

  const PagesToRead = () => {
      const books = useLoaderData();
      const navigate = useNavigate();
      const [displayBooks, setDisplayBooks] = useState([]);

      useEffect(() => {
          const storedBookIds = getStoredBookApplication();
          if (storedBookIds.length > 0) {
              const bookList = books.filter(book => storedBookIds.includes(book.id));
              setDisplayBooks(bookList);
          } else {
              setDisplayBooks([]);
          }
      }, [books]);

      const handleViewDetails = (bookId) => {
          navigate(`/books/${bookId}`);
      };

      return (
          <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/book.png')] py-12">
              <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-purple-50/90 to-blue-50/90 rounded-xl shadow-2xl backdrop-blur-sm">
                  <h1 className="text-4xl font-bold text-gray-800 mb-6">Pages To Read</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayBooks.map((book) => (
                          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                              <img src={book.image} alt={book.bookName} className="mx-auto py-2" />
                              <div className="p-4">
                                  <h3 className="text-xl font-semibold mb-2">{book.bookName}</h3>
                                  <div className="space-y-1 text-gray-600">
                                      <p>Total Pages: {book.totalPages}</p>
                                  </div>
                                  <button 
                                      onClick={() => handleViewDetails(book.id)} 
                                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                                  >
                                      View Details
                                  </button>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      );
  };

  export default PagesToRead;