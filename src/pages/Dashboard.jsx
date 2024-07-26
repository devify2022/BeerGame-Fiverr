// Dashboard.jsx
import React, { useState } from "react";
import SideBar from "../components/dashboard/SideBar";
import Navbar from "../components/dashboard/Navbar";
import InitialSessions from "../components/dashboard/InitialSessions";
import Session from "../components/dashboard/Session";
import SessionCards from "../components/dashboard/SessionCards";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("sessions");
  const [showInitialScreen, setShowInititalScreen] = useState(true);

  return (
    <div className="flex h-screen">
      <SideBar
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="ml-[20%] md:ml-[10%] lg:ml-[20%]  w-full h-full  flex justify-start items-start">
        <div className="w-full ">
          <Navbar isExpanded={isExpanded} />
          {showInitialScreen ? (
            <InitialSessions setShowInititalScreen={setShowInititalScreen} />
          ) : (
            <Session />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
