// Dashboard.jsx
import React, { useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import Navbar from "../components/dashboard/Navbar";
import InitialSessions from "../components/dashboard/InitialSessions";
import Session from "../components/dashboard/Session";
import Settings from "../components/dashboard/Settings";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("sessions");
  const [showInitialScreen, setShowInititalScreen] = useState(true);

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <SideBar
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="ml-[20%] md:ml-[10%] lg:ml-[20%]  w-full h-full  flex justify-start items-start">
        <div className="w-full ">
          <Navbar isExpanded={isExpanded} />
          {selectedTab === "sessions" ? (
            showInitialScreen ? (
              <InitialSessions setShowInititalScreen={setShowInititalScreen} />
            ) : (
              <Session />
            )
          ) : selectedTab === "settings" ? (
            <Settings />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
