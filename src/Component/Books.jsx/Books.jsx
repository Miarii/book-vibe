import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
    const {
        id,
        bookName,
        author,
        image,
        tags,
        category } = book;
        
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
            <figure className="relative overflow-hidden">
                <img
                    src={image.replace(".co.com", ".co")}
                    alt={bookName}
                    className="w-auto h-auto object-cover transform hover:scale-105 transition-transform duration-300" />
                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-2 right-2 text-2xl"
                >
                    {isFavorite ? <FaStar className="text-yellow-400"></FaStar> : <CiStar />}
                </button>
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title font-bold text-xl justify-center mb-2">
                    {bookName}
                </h2>
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {tags.map((tag, index) => (
                        <div key={index} className="border border-blue-300 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold">{tag}</div>
                    ))}
                </div>
                <p className="text-gray-600 mb-4">By: {author}</p>
                <div className="flex items-center justify-between mt-4">
                    <div className="badge badge-outline px-3 py-2 rounded-full text-sm font-semibold">{category}</div>
                    <Link to={`/books/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Books;