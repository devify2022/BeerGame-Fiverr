import React from "react";

const SideTab = ({
  selectedTab,
  setSelectedTab,
  isExpanded,
  isLargeScreen,
}) => {
  const handleTab = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <div className=" w-full h-[20rem] flex flex-col justify-evenly items-center ">
      {/* //first */}
      <div
        className={` cursor-pointer px-8 w-[12rem] flex justify-between items-center  h-[4rem] rounded-lg ${
          selectedTab === "sessions" ? "bg-[#ffffff50]" : ""
        }`}
        onClick={() => handleTab("sessions")}
      >
        <div
          className={` ${
            isExpanded ? "w-[20%]" : isLargeScreen ? "w-[20%]" : "w-[100%]"
          }  h-full flex justify-center items-center`}
        >
          <img
            src="src/assets/dashboard/sessions.svg"
            alt=""
            style={{ transform: "scale(1.2)" }}
          />
        </div>
        <div
          className={`w-[75%] h-full flex justify-start items-center ${
            isExpanded ? "block" : isLargeScreen ? "block" : "hidden"
          }`}
        >
          <p className="text-xl text-white">Sessions</p>
        </div>
      </div>

      {/* //second */}
      <div
        className={` cursor-pointer px-8 w-[12rem] flex justify-between items-center h-[4rem] rounded-lg ${
          selectedTab === "templates" ? "bg-[#ffffff50]" : ""
        }`}
        onClick={() => handleTab("templates")}
      >
        <div
          className={` ${
            isExpanded ? "w-[20%]" : isLargeScreen ? "w-[20%]" : "w-[100%]"
          }  h-full flex justify-center items-center`}
        >
          <img
            src="src/assets/dashboard/template.svg"
            alt=""
            style={{ transform: "scale(1.2)" }}
          />
        </div>
        <div
          className={`w-[75%] h-full flex justify-start items-center ${
            isExpanded ? "block" : isLargeScreen ? "block" : "hidden"
          }`}
        >
          <p className="text-xl text-white">Templates</p>
        </div>
      </div>

      {/* //third */}
      <div
        className={` cursor-pointer flex justify-between items-center px-8 w-[12rem] h-[4rem] rounded-lg ${
          selectedTab === "settings" ? "bg-[#ffffff50]" : ""
        }`}
        onClick={() => handleTab("settings")}
      >
        <div
          className={` ${
            isExpanded ? "w-[20%]" : isLargeScreen ? "w-[20%]" : "w-[100%]"
          }  h-full flex justify-center items-center`}
        >
          <img
            src="src/assets/dashboard/settings.svg"
            alt=""
            style={{ transform: "scale(1.2)" }}
          />
        </div>
        <div
          className={`w-[75%] h-full flex justify-start items-center ${
            isExpanded ? "block" : isLargeScreen ? "block" : "hidden"
          }`}
        >
          <p className="text-xl text-white">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default SideTab;
