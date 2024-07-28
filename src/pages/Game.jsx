import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/all";

 

const Game = () => {
  
  
  const boat1_1 = useRef();
  const boat1_2 = useRef();
  const boat1_3 = useRef();
  const { contextSafe } = useGSAP();
  


  gsap.registerPlugin(MotionPathPlugin);

const moveBoat = contextSafe(() => {
  const tl = gsap.timeline();

  // Define the motion path
  const path1 = [
    { x: 0, y: -2 },
    { x: 0, y: -5 },
    { x: 0, y: -20 },
    { x: 50, y: -70 },
    { x: 70, y: -70 },
  ];

  const path2 = [
    { x: 100, y: -80 },
    { x: 120, y: -80 },
    { x: 130, y: -80 },
    { x: 150, y: -80 },
  ];

  const path3 = [
    { x: 150, y: 0 },
    { x: 300, y: 0 },
    { x: 500, y: 0 },
  ];

  const path4 = [
    { x: 30, y: 10 },
    { x: 10, y: 40 },
    { x: -20, y: 60 },
    { x: -50, y: 80 },
    { x: -90, y: 120 },
  ];

  tl.to(boat1_1.current, {
    duration: 1,
    rotate: -80,
    ease: "power1.inOut"
  });
 tl.to(boat1_1.current, {
    duration: 1,
    motionPath: {
      path: path1,
      curviness: 1
    },
    rotate:-30,
     ease: "power1.inOut"
  });
  tl.to(boat1_1.current, {
    duration: 1,
    motionPath: {
      path: path2,
      curviness: 1
    },
    opacity:0,
    rotate:-20,
    
    ease: "power1.inOut"
  });
 
  // Animate the remaining path without changing rotation


  tl.to(boat1_2.current, 
    { 
      duration: 3,
      motionPath: {
        path: path3,
        curviness: 1
      },
      opacity:0,
      ease: "power1.inOut"
    }
  );

  tl.to(boat1_3.current, 
    { 
      duration: 3,
      motionPath: {
        path: path4,
        curviness: 1
      },
      ease: "power1.inOut"
    }
  );

});

  return (
    <div>
<div className="w-full h-screen flex flex-col justify-center items-center gap-4 relative bg-[#D7F4FD] border-3 border-red-600">

<div className="Game w-[70%] h-[90%]">
<div className="Boat w-20 h-[4.6rem] absolute top-[-2%] left-[45%] rotate-[-16deg]" ref={boat1_2}></div>
<div className="Boat w-20 h-[4.6rem] absolute top-[10%]" ref={boat1_1}></div>
<div className="Boat2 w-20 h-[4.6rem] absolute top-[8%] right-[10%]" ref={boat1_3}></div>
{/* <div className="Boat w-20 h-[4.6rem]"></div>
<div className="Boat w-20 h-[4.6rem]"></div>
<div className="Boat w-20 h-[4.6rem]"></div> */}

</div>


    </div>
    <div>
    <button onClick={moveBoat}
    className="border-black border p-4">move</button>
  </div>
  </div>
   
  )
}

export default Game;
