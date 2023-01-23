import React, { useState } from 'react'

const Navigation = (props) => {
    const [navbar, setNavbar] = useState(false);

    const [localSearch, setLocalSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setSearch(localSearch);
    };
    return (
        <nav className="fixed w-full z-50 ">
            <div className="justify-between px-4 mx-auto w-full md:items-center md:flex md:px-8 bg-gray-200  ">
                <div>
                    <div className="flex items-center justify-between py-2 md:py-5 md:block">
                        <a className="text-2xl text-blue-gray-700" href="#State">
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="border rounded-b-[1rem] rounded-t-[1rem]"
                                    type="text"
                                    name="search"
                                    placeholder="Search"
                                    onChange={(e) => {
                                        setLocalSearch(e.target.value);
                                    }}
                                />
                            </form>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        {localStorage.getItem("currentUser") ? (
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-alb">
                                <li className="text-blue-gray-900 text-lg hover:text-blue">
                                    <a href="/" className="menu-item">Home </a>
                                </li>

                                <li className="text-blue-gray-900 text-lg hover:text-blue">
                                    <a href="/article" className="menu-item">Articles</a>
                                </li>
                                <li className="text-blue-gray-900 text-lg hover:text-blue">
                                    <a href="/profile" className="menu-item">My Profile</a>
                                </li>
                                <li className="text-blue-gray-900 text-lg hover:text-blue">
                                    <a
                                    onClick={() => localStorage.removeItem("currentUser")}
                                    href="/"
                                    className="menu-item">Log Out</a>
                                </li>
                            </ul>
                        ) : (
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-alb"> 
                                    <li className="text-blue-gray-900 text-lg hover:text-blue">
                                        <a href="/" className="menu-item">Home</a>
                                    </li>
                                    <li className="text-blue-gray-900 text-lg hover:text-blue">
                                        <a href="/login" className="menu-item">Login</a>
                                    </li>
                                    <li className="text-blue-gray-900 text-lg hover:text-blue">
                                        <a href="/signup" className="menu-item">Signup</a>
                                    </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </nav>
        //   <div className="dropdown">
        //     <div className="search-container search-700px">
        //       <form className="search-form" onSubmit={handleSubmit}>
        //         <input
        //           className="search-input"
        //           type="text"
        //           name="search"
        //           placeholder="Search"
        //           onChange={(e) => {
        //             setLocalSearch(e.target.value);
        //           }}
        //         />
        //       </form>
        //     </div>

    )
}

export default Navigation