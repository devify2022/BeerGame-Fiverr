// src/pages/Map.jsx
import "../GameMap/GameMap.css";

import Mountain from "../SVGs/Mountain";
import Stone from "../../assets/Game/stone.png";
import Trees from "../SVGs/Trees";
import LightHouse from "../SVGs/LightHouse";
// import GameOrderBoat from "../GameOrderBoat/GameOrderBoat";
import Manufacturer from "../Roles/Manufacturer";
import Retailer from "../Roles/Retailer";
import Wholesaler from "../Roles/Wholesaler";
import Distributor from "../Roles/Distributor";

const Map = () => {
  return (
    <div id="game-map" className="w-full">
      <Manufacturer />
      <Retailer />
      <Wholesaler />
      <Distributor />
      <Mountain
        style={{
          position: "absolute",
          left: "18vw",
          top: "6vw",
          width: "10vw",
          zIndex: 2,
        }}
      />
      <Mountain
        style={{
          position: "absolute",
          left: "14vw",
          top: "16vw",
          width: "10vw",
          zIndex: 2,
        }}
      />
      <Trees
        style={{ position: "absolute", left: "12vw", top: "15vw", zIndex: 2 }}
      />
      <Trees
        style={{
          position: "absolute",
          left: "25vw",
          bottom: "8vw",
          zIndex: 2,
        }}
      />
      <Trees
        style={{ position: "absolute", right: "25vw", top: "15vw", zIndex: 2 }}
      />
      <Trees
        style={{
          position: "absolute",
          left: "22vw",
          bottom: "18vw",
          zIndex: 2,
        }}
      />
      <LightHouse
        style={{ position: "absolute", left: "-5vw", bottom: "10vw", zIndex: 2 }}
      />
      <LightHouse
        style={{ position: "absolute", right: "-2vw", top: "5vw", zIndex: 2 }}
      />
      <LightHouse
        style={{ position: "absolute", right: "2vw", bottom: "5vw", zIndex: 2 }}
      />

      {/* <GameOrderBoat
        orders={10000}
        className="game-order-manufacturer-distributor"
        style={{
          position: "absolute",
          left: "10vw",
          top: "1vw",
          zIndex: 1,
        }}
      /> */}

      <img
        src={Stone}
        style={{
          position: "absolute",
          left: "10vw",
          top: "20vw",
          width: "4vw",
          zIndex: 2,
        }}
      />
      <img
        src={Stone}
        style={{
          position: "absolute",
          right: "22vw",
          top: "12vw",
          width: "4vw",
          zIndex: 2,
        }}
      />
      <img
        src={Stone}
        style={{
          position: "absolute",
          left: "25vw",
          bottom: "13vw",
          width: "3vw",
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Map;
