import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/all";

 

const Game = ({ move, setMove }) => {
  const [reset, setReset] = useState(false)
  
  const boat1_1 = useRef();
  const boat1_2 = useRef();
  const boat1_3 = useRef();
  const { contextSafe } = useGSAP();
  


  gsap.registerPlugin(MotionPathPlugin);

  const moveBoat = contextSafe(() => {

    const tl = gsap.timeline({
     onComplete: () => {
       gsap.delayedCall(1, () => {
         gsap.set(boat1_1.current, { clearProps: 'all' });
         gsap.set(boat1_2.current, { clearProps: 'all' });
         gsap.set(boat1_3.current, { clearProps: 'all' });
       });
     }
   });
 
   
 
   // Define the motion path
   const path1 = [
     { x: 0, y: -10 },
     { x: 5, y: -20 },
     { x: 20, y: -35 },
     { x: 50, y: -50 }
   ];
 
   const path2 = [
     { x: 150, y: -85 },
   ];
 
//    const path3 = [
//      { x: 150, y: 0 },
//      { x: 200, y: -5 },
//      { x:250,  y: -15},
//      { x: 300, y: -25 },
//    ];
 
   const combinedPath = [
     { x: 150, y: -2 },
     { x: 175, y: -5 },
     { x: 200, y: -10 },
     { x: 350, y: -30 },
   ];
 
//    const path4 = [
//      { x: 300, y: -10 },
//      { x: 400, y: -25 },
//      { x: 500, y: -30 }
//    ];
   const path5 = [
     { x: -2, y: 10 },
     { x: -70, y: 80 },
   ];
 
   tl.to(boat1_1.current, {
     duration: 3,
     rotate: -80,
     ease: "power1.inOut"
   }).to(boat1_1.current, {
     duration: 3,
     motionPath: {
       path: path1,
       curviness: 1
     },
     rotate:-30,
      ease: "power1.inOut"
   }).to(boat1_1.current, {
     duration: 3,
     motionPath: {
       path: path2,
       curviness: 1
     },
     rotate:-20,
     
     ease: "power1.inOut"
   })
   .to(boat1_1.current, {
     duration: 1, 
     opacity:0,
     ease: "power1.inOut",
   });
  
 
   // tl.to(boat1_2.current, 
   //   { 
   //     duration: 2,
   //     motionPath: {
   //       path: path3,
   //     },
   //   }
   // );
   // tl.to(boat1_2.current, 
   //   { 
   //     duration: 3,
   //     motionPath: {
   //       path: path4,
   //     },
   //     opacity:0,
   //   }
   // );
 
   tl.to(boat1_2.current, { 
     duration: 5, // Total duration for the combined path
     motionPath: {
       path: combinedPath,
       curviness: 1
     },
     ease: "power1.inOut"
   })
   .to(boat1_2.current, {
     duration: 3, // Duration for fading out at the end
     opacity: 0,
     onComplete: () => {
        setReset(true); 
      },
     ease: "power1.inOut",
   });
 
 
 
   tl.to(boat1_3.current, 
     { 
       duration: 3,
       motionPath: {
         path: path5,
         curviness: 1
       },
       onComplete: () => {
        setMove(false); 
      },
       ease: "power1.inOut"
     }
   );
 
 });

useEffect(() => {

    if(move){
   moveBoat();
    }
 
}, [move])


console.log(reset)
  return (
    <div>
<div className="w-full h-[40vh] md:h-[50vh] lg:h-[75vh] flex flex-col justify-center items-center gap-4 relative bg-[#D7F4FD]  py-8 absolute">

<div className="Game w-full h-full ">
<div className="Boat w-20 h-[4.6rem] absolute top-[15%] left-[1%]" ref={boat1_1}><p className="text-[1.2rem] font-bold">1</p></div>
<div className={`Boat w-20 h-[4.6rem] absolute top-[3%] left-[35%]  ${reset ? 'rotate-reset' : 'rotate-init'}`} ref={boat1_2}>
<p className="text-[1.2rem] font-bold">2</p></div>
<div className="Boat2 w-20 h-[4.6rem] absolute top-[15%] right-[10%]" ref={boat1_3}><p className="text-[1.2rem] font-bold">3</p></div>
{/* <div className="Boat w-20 h-[4.6rem]"></div>
<div className="Boat w-20 h-[4.6rem]"></div>
<div className="Boat w-20 h-[4.6rem]"></div> */}

</div>


    </div>
    {/* <div>
    <button onClick={moveBoat}
    className="border-black border p-4">move</button>
  </div> */}
  </div>
   
  )
}

export default Game;
