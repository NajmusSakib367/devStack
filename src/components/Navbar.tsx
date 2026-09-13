import Logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="navbar mx-auto w-full max-w-304 px-4 font-jakarta text-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle "
                        >
                            <svg
                                aria-label="Menu"
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
                            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-white p-2 shadow-lg"
                        >
                            <li><a>Home</a></li>
                            <li><a>Technologies</a></li>
                            <li><a>Products</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="">
                        <img src={Logo} alt="DevStack" />
                    </a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 [&_a:hover]:bg-transparent">
                        <li><a>Home</a></li>
                        <li><a>Technologies</a></li>
                        <li><a>Products</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-5">
                    <a className="cursor-pointer text-[#0F172A] hover:text-[#D91B7E]">
                        Sign In
                    </a>
                    <a className="btn rounded-full bg-[#D91B7F] text-white hover:bg-[#D91B7E]">
                        Sign Up
                    </a>
                </div>

            </div>
        </header>
    );
};

export default Navbar;