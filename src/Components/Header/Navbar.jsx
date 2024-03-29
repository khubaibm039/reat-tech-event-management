import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink = (
        <>
            <li>
                {" "}
                <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/about"}>ABOUT US</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/events"}>EVENTS</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/blog"}>BLOG</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/contact"}>CONTACT US</NavLink>
            </li>
        </>
    );
    return (
        <div>
            {/*  <div className="grid grid-cols-2 ">
                <div className="h-full relative -bottom-56 -left-60">
                    <img
                        className="col-span-1 "
                        src="https://thepixelcurve.com/html/exvent/dest/assets/images/shape/hero_shape2.png"
                        alt=""
                    />
                </div>
                <img
                    className="col-span-1"
                    src="https://thepixelcurve.com/html/exvent/dest/assets/images/shape/hero_shape1.png"
                    alt=""
                />
            </div>
            <div className="bg-cover h-[100vh] bg-gradient-to-r from-indigo-900 to-violet-900 opacity-50 relative -top-[101vh] z-10"></div> */}

            <div className="navbar  mx-auto absolute z-20 top-0">
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BOKA Chad</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLink}</ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-secondary">LOGIN</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
