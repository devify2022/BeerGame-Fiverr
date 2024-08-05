
import RoleHoarding from '../RoleHoarding/RoleHoarding'
import './Roles.css'
import retailer from "../../assets/Game/retailer.png"
const Retailer = () => {
  return (
    <div>
        <img
        src={retailer}
        className="game-map-retailer"
        alt="retailer"
      />
            <RoleHoarding
        textStyle={{
          position: "absolute",
          left: "1.2vw",
          top: "0.5vw",
          color: "white",
          fontWeight: 700,
          fontSize: "1rem",
        }}
        hoardingProps={{ bottom: "5vw", right: "18vw", position: "absolute",  }}
        role="Retailer"
      />
    </div>
  )
}

export default Retailer