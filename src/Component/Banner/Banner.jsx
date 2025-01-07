const Banner = () => {
    return (
        <div className="hero bg-[url('https://www.transparenttextures.com/patterns/book.png')] min-h-[600px] my-2 rounded-lg px-3">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="Library Books Banner"
                    className="w-full lg:w-1/2 rounded-lg shadow-2xl object-cover hover:shadow-2xl transition-all duration-300 transform hover:scale-105" />
                <div className="lg:w-1/2 bg-gradient-to-r from-purple-50/90 to-blue-50/90 p-8 rounded-xl backdrop-blur-sm">
                    <h1 className="text-5xl font-bold text-gray-800">Discover Your Next Great Read!</h1>
                    <p className="py-6 text-gray-600 text-lg">
                        Explore our vast collection of books across all genres. From thrilling adventures to
                        thought-provoking literature, find the perfect book that speaks to your soul.
                    </p>
                    <button onClick={() => window.location.href = "/listedBooks"} className="btn bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md">Browse Collection</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;