import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io"; // Import the dropdown icon
import { IoMdSearch } from "react-icons/io"; // Import the search icon
import { GoPlus } from "react-icons/go";
import SessionCards from "./SessionCards";

const Session = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Session Type");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="h-[100%] w-[90%]  lg:mt-[12vh] md:mt-[8vh] mt-[14vh] md:flex-none sm:flex-1 overflow-auto">
        <section className="header flex flex-col px-2 justify-start items-start">
          <p className="md:text-[1.4rem] text-[1.2rem] font-semibold">
            Sessions
          </p>
          <div className="w-full flex flex-col gap-y-4">
            <div className="w-full h-fit mt-4 flex gap-x-4 justify-start items-center">
              <div
                style={{ borderRadius: "20px" }}
                className="w-fit px-4 gap-x-2 py-2 flex justify-evenly items-center border-2 border-red-500"
              >
                <button className="text-red-500">Active</button>
                <p className="text-red-500">2</p>
              </div>
              <div className="w-[8%] py-2 flex justify-evenly gap-x-2 items-center">
                <button className="text-gray-500">Archived</button>
                <p className="text-gray-500">2</p>
              </div>
              <div className="relative w-fit md:flex hidden  mx-4  items-center">
                <button
                  onClick={handleDropdownToggle}
                  className="text-gray-500 border-2 border-gray-300 rounded-md px-4 py-1 flex items-center"
                >
                  {selectedOption}
                  <IoMdArrowDropdown className="ml-2" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-fit px-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul>
                      <li
                        onClick={() => handleOptionSelect("Session Type")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Session Type
                      </li>
                      <li
                        onClick={() => handleOptionSelect("Item 1")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Item 1
                      </li>
                      <li
                        onClick={() => handleOptionSelect("Item 2")}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Item 2
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative w-[20%] md:flex hidden  items-center">
                <IoMdSearch className="absolute left-2 text-gray-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search here"
                  className="w-full pl-8 pr-4 py-2 border-2 border-gray-300 rounded-md"
                />
              </div>
              <div
                style={{ borderRadius: "20px" }}
                className="w-fit px-4 py-2 justify-center md:flex hidden items-center bg-[#F53838]"
              >
                <button className="text-white">Create</button>
                <GoPlus className="text-white mt-1 ms-1 w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
          <div className="relative w-full  md:hidden flex my-2 items-center">
            <button
              onClick={handleDropdownToggle}
              className="text-gray-500 border-2 border-gray-300  w-full rounded-md px-4 py-1 flex items-center"
            >
              {selectedOption}
              <IoMdArrowDropdown className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[100%] px-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <ul>
                  <li
                    onClick={() => handleOptionSelect("Session Type")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Session Type
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Item 1")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Item 1
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Item 2")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Item 2
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className=" md:hidden flex justify-start gap-x-4 items-center w-100%">
            <div className="relative w-[50%] md:hidden flex  items-center">
              <IoMdSearch className="absolute left-2 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search here"
                className="w-full pl-8 pr-4 py-2 border-2 border-gray-300 rounded-md"
              />
            </div>
            <div
              style={{ borderRadius: "20px" }}
              className="w-fit px-4 py-2 justify-center md:hidden flex items-center bg-[#F53838]"
            >
              <button className="text-white">Create</button>
              <GoPlus className="text-white mt-1 ms-1 w-[20px] h-[20px]" />
            </div>
          </div>
        </section>
        <SessionCards />
      </div>
    </div>
  );
};

export default Session;
