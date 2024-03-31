import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(toast("logOut successful"))
            .catch((error) => {
                console.log(error.message);
            });
    };
    const navLink = (
        <>
            <li className="text-white">
                {" "}
                <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li className="text-white">
                {" "}
                <NavLink to={"/about"}>ABOUT US</NavLink>
            </li>
            <li className="text-white">
                {" "}
                <NavLink to={"/events"}>EVENTS</NavLink>
            </li>
            <li className="text-white">
                {" "}
                <NavLink to={"/blog"}>BLOG</NavLink>
            </li>
            <li className="text-white">
                {" "}
                <NavLink to={"/contact"}>CONTACT US</NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar mx-auto absolute z-50 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-600 rounded-box w-52"
                        >
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">
                        BOKA Chad
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLink}</ul>
                </div>

                {user ? (
                    <div className="navbar-end">
                        <button
                            onClick={handleLogOut}
                            className="btn btn-secondary"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="navbar-end">
                        <Link to={"/login"} className="btn btn-secondary">
                            LOGIN
                        </Link>
                    </div>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;
