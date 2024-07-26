import React, { useState } from "react";
import PopUp from "./PopUp";
import user from "../../assets/dashboard/user.png";
const Navbar = ({ isExpanded }) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [value, setValue] = useState("English");
  return (
    <div
      className={`fixed bg-white lg:w-[80%] md:w-[90%] w-[80%] lg:h-[10vh] md:h-[6vh] h-[12vh] b-2 z-20   transition-all duration-300 ease-in-out `}
    >
      <section className="w-full  pb-2 border-b-2 border-gray-200 h-full  flex justify-between items-center md:px-4 px-0  ">
        <div className="flex md:flex-row flex-col h-full md:justify-start justify-end items-center gap-x-4 md:w-[50%] w-[40%]">
          <p className="font-semibold md:text-[1.2rem] text-[0.8rem]">
            Update Language
          </p>
          <div className="w-[20%]">
            <div className="flex  justify-center items-center mt-2">
              <PopUp
                setOpenPopUp={setOpenPopUp}
                openPopUp={openPopUp}
                setValue={setValue}
                value={value}
              />
            </div>
          </div>
        </div>

        {/* user-icon */}
        <div className="md:w-[50%] w-[60%] h-full md:px-0 px-2 flex   justify-end items-center md:gap-x-2 gap-x-0">
          <div className="relative  md:h-[3rem] md:w-[3rem] w-[2rem] h-[2rem] flex justify-center items-center rounded-full">
            <img
              src={user}
              className="w-[2rem] h-[2rem] md:w-full md:h-full"
              alt=""
            />
            <div className="absolute  top-0 right-0 md:w-3 md:h-3  w-2 h-2 bg-green-500 rounded-full border-2 border-white"></div>
          </div>

          <div className="w-fit   h-full flex flex-col justify-center ps-2">
            <p className="xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem] text-[0.6rem] font-semibold">
              Richard D.
            </p>
            <p className="xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem] text-[0.6rem]">
              richard.d@hotmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
