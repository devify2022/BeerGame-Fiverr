import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/all";

 

const Game = () => {
  
  
  const boat1 = useRef();
  const { contextSafe } = useGSAP();
  
  // const moveBoat = contextSafe(() => {
  //   const tl = gsap.timeline();
  
  //   tl.to(boat1.current, {
  //     y: -100,
  //     rotate:-20,
  //     x:60,
  //     duration: 2
  //   })
  //   .to(boat1.current, {
  //     rotate:-20,
  //     x: 980,
  //     duration: 6
  //   })
  //   .to(boat1.current, {
  //     rotate:20,
     
  //     y: 80,
  //     x: 900,
  //     duration: 4
  //   })
  //   .to(boat1.current, {
  //     x: 830,
  //     duration: 2
  //   });
  // });

  gsap.registerPlugin(MotionPathPlugin);

const moveBoat = contextSafe(() => {
  const tl = gsap.timeline();

  // Define the motion path
  const path = [
    { x: 0, y: -2 },
    { x: 0, y: -5 },
    { x: 0, y: -50 },
    { x: 980, y: -10 },
    { x: 900, y: 80 },
    { x: 830, y: 80 }
  ];

  tl.to(boat1.current, {
    duration: 14,
    motionPath: {
      path: path,
      autoRotate: true, // Automatically rotate the element along the path
      curviness: 1, // Adjust the curviness of the path
    },
    ease: "power1.inOut"
  });
});

  return (
<div className="w-full h-screen flex flex-col justify-center items-center gap-4 relative bg-[#D7F4FD]">

<div className="Game w-[70%] h-[85%] border-black ">

<div className="Boat w-20 h-[4.6rem] absolute top-20" ref={boat1}></div>
{/* <div className="Boat w-20 h-[4.6rem]"></div>
<div className="Boat w-20 h-[4.6rem]"></div>
<div className="Boat w-20 h-[4.6rem]"></div> */}

</div>

<div>
  <button onClick={moveBoat}
  className="border-black border p-4">move</button>
</div>
    </div>
   
  )
}

export default Game;
