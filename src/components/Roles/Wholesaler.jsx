
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
          left: "1.3vw",
          top: "1vw",
          color: "white",
          fontWeight: 700,
          fontSize: "0.8vw",
        }}
        hoardingProps={{ bottom: "10vw", left: "4vw", position: "absolute" }}
        role="Wholesaler"
      />
    </div>
  )
}

export default Wholesaler