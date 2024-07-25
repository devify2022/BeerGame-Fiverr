import React from "react";
import Pro from "./Pro";

const SideBar = () => {
  return (
    <>
      <div className="md:block hidden w-[40vh] h-[100vh] bg-[#0091D1]">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          {/* <div className="h-[30%] border-black border-2 w-full "></div> */}
          <div className="h-[60%] border-black border-2 w-full "></div>
          <Pro />
        </div>
      </div>
      <div className="md:hidden block relative w-[8vh] h-[100vh] bg-[#0091D1] group">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[#0091D1] group-hover:hidden"></div>
          <div className="absolute top-0 left-0 w-[40vh] h-[100vh] bg-[#0091D1] group-hover:flex flex-col justify-evenly items-center hidden">
            <div className="h-[60%] border-black border-2 w-full"></div>
            <Pro />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
