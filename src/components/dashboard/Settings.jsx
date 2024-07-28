import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import TeamIcon from "./svgIcons/TeamIcons";
import color from "../../assets/dashboard/brandingColor.svg";
import Profile from "./Profile";
import Profile2 from "./Profile2";

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  const tabClasses = (tab) =>
    `border-2 p-2 px-4 rounded-full flex justify-between items-center gap-x-2 ${
      selectedTab === tab ? "border-red-500 text-red-500" : "border-gray-300"
    }`;

  return (
    <div className="lg:mt-[12vh] md:mt-[8vh] mt-[14vh] w-full flex-1 overflow-auto">
      <div className="w-full h-full px-2 md:px-20">
        <p className="text-[2rem] font-semibold">Settings</p>
        <div className="w-full flex justify-start my-4 gap-x-4 items-center">
          <div
            className={tabClasses("profile")}
            onClick={() => setSelectedTab("profile")}
            style={{ cursor: "pointer" }}
          >
            <FaRegUserCircle
              style={{ color: selectedTab === "profile" ? "red" : "gray" }}
            />
            <p>Profile</p>
          </div>
          <div
            className={tabClasses("teams")}
            onClick={() => setSelectedTab("teams")}
            style={{ cursor: "pointer" }}
          >
            <TeamIcon color={selectedTab === "teams" ? "red" : "gray"} />
            <p>Teams</p>
          </div>
          <div
            className={`${tabClasses("brandingColors")} md:flex hidden`}
            onClick={() => setSelectedTab("brandingColors")}
            style={{ cursor: "pointer" }}
          >
            <img src={color} alt="" />
            <p>Branding and Colors</p>
          </div>
        </div>
        <div className="md:hidden  w-fit h-fit ">
        <div
            className={`${tabClasses("brandingColors")} md:hidden sm:flex`}
            onClick={() => setSelectedTab("brandingColors")}
            style={{ cursor: "pointer" }}
          >
            <img src={color} alt="" />
            <p>Branding and Colors</p>
          </div>
        </div>

        {(selectedTab === "profile" || selectedTab === "teams") && (
          <div className="w-full h-[20rem] bg-white flex flex-col">
            <Profile />
            <div className="w-full h-[40vh] border-t-2 border-gray-200">
              <Profile2 />
            </div>
          </div>
        )}

        {(selectedTab === "profile" || selectedTab === "teams") && (
          <div className="my-8">
            <button className="bg-red-500 text-white w-fit px-10 py-2 rounded-xl font-semibold cursor-pointer">
              EDIT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
