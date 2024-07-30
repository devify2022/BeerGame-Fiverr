import React, { useState } from "react";
import user from "../../assets/dashboard/user.png";

const GameNav = ({ isExpanded }) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [value, setValue] = useState("English");
  return (
    <div
      className={`fixed bg-white lg:w-[80%] md:w-[90%] w-[80%] lg:h-[10vh] md:h-[6vh] h-[12vh] b-2 z-20   transition-all duration-300 ease-in-out `}
    >
      <section className="w-full pb-2 border-b-2 border-gray-200 h-full  flex justify-between items-center md:px-4 px-0  ">
        <button className="font-semibold ml-2 bg-[#FFBF1A] p-2 lg:px-5 lg:py-2 text-white rounded-xl lg:text-base  md:text-[1.2rem] text-[0.8rem]">
          Upgrade
        </button>

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

export default GameNav;
