import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center"></a>
        <div className="flex gap-5 items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <Link
            to="https://themesberg.com/product/tailwind-css/landing-page"
            className="text-black font-medium"
          >
            Login
          </Link>
          <Link
            to="https://themesberg.com/product/tailwind-css/landing-page"
            className="text-white bg-[#34B3F1] font-medium rounded-3xl text-xs md:text-sm lg:text-sm p-3 lg:px-5 lg:py-2.5 sm:mr-2 lg:mr-0"
          >
            Book a Demo
          </Link>
          <Link
            to="/auth"
            className="text-black bg-white border border-[#34B3F1] hover:bg-[#34B3F1] hover:text-white font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 transition-colors duration-300"
          >
            Sign Up
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {["Games", "Solutions", "Pricing", "Resources", "Company"].map(
              (item, index) => (
                <li key={index} className="relative group">
                  <button
                    onClick={() => toggleDropdown(index)}
                    id="dropdownNavbarLink"
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:text-blue-500 dark:hover:bg-gray-200 md:dark:hover:bg-transparent"
                  >
                    {item}
                    <svg
                      className={`w-2.5 h-2.5 ml-2.5 transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    className={`${
                      activeDropdown === index ? "block" : "hidden"
                    } lg:absolute bg-white text-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul className="py-2 text-sm text-gray-700 bg-white border-1 border-black rounded-md dark:text-gray-400">
                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-black hover:bg-gray-200 dark:hover:bg-gray-200"
                        >
                          Child 1
                        </Link>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-black hover:bg-gray-200 dark:hover:bg-gray-200"
                        >
                          Child 2
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
