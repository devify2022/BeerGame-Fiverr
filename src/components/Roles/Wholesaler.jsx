
import './Roles.css'
import RoleHoarding from '../RoleHoarding/RoleHoarding'
import wholesaler  from "../../assets/Game/wholesaler.png"
const Wholesaler = () => {
  return (
    <div>
              <img
        src={wholesaler}
        className="game-map-wholesaler"
        alt="wholesaler"
      />
            <RoleHoarding
        textStyle={{
          position: "absolute",
          left: "1.0vw",
          top: "0.5vw",
          color: "white",
          fontWeight: 700,
          fontSize: "0.8rem",
        }}
        hoardingProps={{ bottom: "8vw", left: "4vw", position: "absolute" }}
        role="Wholesaler"
      />
    </div>
  )
}

export default Wholesaler