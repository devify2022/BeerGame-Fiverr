
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
          left: "1.75vw",
          top: "0.7vw",
          color: "white",
          fontWeight: 700,
          fontSize: "1vw",
        }}
        hoardingProps={{ bottom: "5vw", right: "18vw", position: "absolute",  }}
        role="Retailer"
      />
    </div>
  )
}

export default Retailer