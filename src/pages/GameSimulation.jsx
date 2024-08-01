import { useState } from "react";
import GameSideBar from "../components/game/GameSideBar";
import GameNav from "../components/game/GameNav";
import GameScreen from "../components/game/GameScreen";
import Modal1 from "../components/game/Modal1";
import Modal2 from "../components/game/Modal2/Modal2";

const GameSimulation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("sessions");
  const [showModal1, setShowModal1] = useState(true);
  const [showModal2, setShowModal2] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <GameSideBar
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="ml-[20%] md:ml-[10%] lg:ml-[20%] w-full h-full flex justify-start items-start">
        <div className="w-full">
          <GameNav isExpanded={isExpanded} />
          {showModal1 && (
            <Modal1
              setName={setName}
              onClose={() => {
                setShowModal1(false);
                setShowModal2(true);
              }}
            />
          )}
          {showModal2 && <Modal2 onClose={() => setShowModal2(false)} />}
          {!showModal1 && !showModal2 && (
            <GameScreen
              name={name}
              setName={setName}
              setShowModal1={setShowModal1}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameSimulation;
