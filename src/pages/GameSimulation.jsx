import { useState } from "react";
import GameSideBar from "../components/game/GameSideBar";
import GameNav from "../components/game/GameNav";
import GameScreen from "../components/game/GameScreen";

const GameSimulation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("sessions");
  const [showInitialScreen, setShowInititalScreen] = useState(true);

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <GameSideBar
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="ml-[20%] md:ml-[10%] lg:ml-[20%]  w-full h-full  flex justify-start items-start">
        <div className="w-full ">
          <GameNav isExpanded={isExpanded} />
          <GameScreen/>
          {/* {selectedTab === "sessions" ? (
            showInitialScreen ? (
              <InitialSessions setShowInititalScreen={setShowInititalScreen} />
            ) : (
              <Session />
            )
          ) : selectedTab === "settings" ? (
            <Settings />
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default GameSimulation;
