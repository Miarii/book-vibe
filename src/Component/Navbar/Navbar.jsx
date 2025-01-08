import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = (
        <>
            <NavLink className={({ isActive }) => isActive ? "px-4 py-2 font-medium border-b-2 border-blue-600 text-blue-600" : "px-4 py-2 font-medium hover:text-blue-600 transition-colors"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "px-4 py-2 font-medium border-b-2 border-blue-600 text-blue-600" : "px-4 py-2 font-medium hover:text-blue-600 transition-colors"} to="/listedBooks">Listed Books</NavLink>
            <NavLink className={({ isActive }) => isActive ? "px-4 py-2 font-medium border-b-2 border-blue-600 text-blue-600" : "px-4 py-2 font-medium hover:text-blue-600 transition-colors"} to="/reading">Pages To Read</NavLink>
        </>
    )
    return (
        <nav className="navbar bg-white shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg">
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost md:text-xl font-bold text-blue-600">Book Vibe</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to="/signIn" className="btn btn-ghost hover:bg-blue-600 hover:text-white mr-3 font-medium transition-colors">Sign In</NavLink>
                <NavLink to="/signUp" className="btn bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors">Sign Up</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;