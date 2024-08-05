
import RoleHoarding from "../RoleHoarding/RoleHoarding";
import './Roles.css'
import distributer from "../../assets/Game/distributor.png"

const DISTRIBUTOR_MAP = {
    position: {
        top: '1.3vw',
        left: '1.4vw'
    }
}

const Distributor = () => {

  return (
    <div>
      <img
        src={distributer}
        className="game-map-distributor"
        alt="distributor"
      />
        <RoleHoarding
        textStyle={{
          position: "absolute",
          left: "0.9vw",
          top: "0.5vw",
          color: "white",
          fontWeight: 700,
          fontSize: "0.7vw",
        }}
        hoardingProps={{ top: "4vw", right: "15vw", position: "absolute", zIndex:"99" }}
        role="Distributor"
      />
    </div>
  );
};

export default Distributor;
