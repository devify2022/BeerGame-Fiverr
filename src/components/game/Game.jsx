import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/all";

 

const Game = ({ move1, setMove1, move2, setMove2 , move3, setMove3}) => {

  const [reset, setReset] = useState(false)
  
  const boat1_1 = useRef();
  const boat1_2 = useRef();
  const boat1_3 = useRef();
  const boat1_4 = useRef();
  const boat1_5 = useRef();
  const boat1_6 = useRef();
  const boat1_7 = useRef();
  const { contextSafe } = useGSAP();
  


  gsap.registerPlugin(MotionPathPlugin);

//   const moveBoatTop = contextSafe(() => {

//     const tl = gsap.timeline({
//      onComplete: () => {
//        gsap.delayedCall(1, () => {
//          gsap.set(boat1_1.current, { clearProps: 'all' });
//          gsap.set(boat1_2.current, { clearProps: 'all' });
//        });
//      }
//    });
 
   
 
//    // Define the motion path
//    const path1 = [
//      { x: 0, y: -10 },
//      { x: 5, y: -20 },
//      { x: 20, y: -35 },
//      { x: 50, y: -50 }
//    ];
 
//    const path2 = [
//      { x: 150, y: -85 },
//    ];

//    const path3 = [
//      { x: 150, y: -2 },
//      { x: 175, y: -5 },
//      { x: 200, y: -10 },
//      { x: 350, y: -30 },
//    ];

//    const path4 = [
//      { x: -2, y: 10 },
//      { x: -70, y: 80 },
//    ];
 
//    tl.to(boat1_1.current, {
//      duration: 3,
//      rotate: -80,
//      ease: "power1.inOut"
//    }).to(boat1_1.current, {
//      duration: 3,
//      motionPath: {
//        path: path1,
//        curviness: 1
//      },
//      rotate:-30,
//       ease: "power1.inOut"
//    }).to(boat1_1.current, {
//      duration: 3,
//      motionPath: {
//        path: path2,
//        curviness: 1
//      },
//      rotate:-20,
     
//      ease: "power1.inOut"
//    })
//    .to(boat1_1.current, {
//      duration: 1, 
//      opacity:0,
//      ease: "power1.inOut",
//    });
  
 
//    tl.to(boat1_2.current, { 
//      duration: 5, // Total duration for the combined path
//      motionPath: {
//        path: path3,
//        curviness: 1
//      },
//      ease: "power1.inOut"
//    })
//    .to(boat1_2.current, {
//      duration: 3, // Duration for fading out at the end
//      opacity: 0,
//      onComplete: () => {
//         setReset(true); 
//       },
//      ease: "power1.inOut",
//    });
 
 
 
//    tl.to(boat1_3.current, 
//      { 
//        duration: 3,
//        motionPath: {
//          path: path4,
//          curviness: 1
//        },
//        onComplete: () => {
//         setMove1(false); 
//       },
//        ease: "power1.inOut"
//      }
//    );
 
//  });

//  const moveBoatRight = contextSafe(() => {

//   const t2 = gsap.timeline({
//    onComplete: () => {
//      gsap.delayedCall(1, () => {
//        gsap.set(boat1_3.current, { clearProps: 'all' });
//        gsap.set(boat1_4.current, { clearProps: 'all' });

//      });
//    }
//  });

//  // Define the motion path
//  const path5= [
 
//   { x: -70, y: 80 },
// ];
// const path6 = [
//   { x: 0, y: 10 },
//   { x: 5, y: 150 }
// ];

// const path7 = [
//   { x: 0, y: 0 },
//   { x: -10, y: 5 },
//   { x: -20, y: 10 },
//   { x: -120, y: 5 }
// ];


// t2.to(boat1_3.current, {
//   duration: 3,
//   motionPath: {
//     path: path1,
//     curviness: 1
//   },
//   rotate:-40,
//   ease: "power1.inOut"
// }).to(boat1_3.current, {
//   duration: 1,
//   opacity:0,
//   ease: "power1.inOut"
// })


// t2.to(boat1_4.current, {
//   duration: 3,
//   motionPath: {
//     path: path2,
//     curviness: 1
//   },
//   ease: "power1.inOut"
// }).to(boat1_4.current, {
//   duration: 1,
//   opacity:0,
//   ease: "power1.inOut"
// })

// t2.to(boat1_5.current, {
//   duration: 3,
//   motionPath: {
//     path: path3,
//     curviness: 1
//   },
//   rotate: 10,
//   ease: "power1.inOut"
// }).to(boat1_5.current, {
//   duration: 1,
//   onComplete: () => {
//     setMove2(false); 
//   },
//   ease: "power1.inOut"
// })

// })

const moveBoatBottom = contextSafe(() => {

  const t3 = gsap.timeline({
   onComplete: () => {
     gsap.delayedCall(1, () => {
       gsap.set(boat1_5.current, { clearProps: 'all' });
       gsap.set(boat1_6.current, { clearProps: 'all' });
     });
   }
 });

 const path1 = [
  { x: 0, y: 0 },
  { x: -10, y: 5 },
  { x: -20, y: 10 },
  { x: -120, y: 5 }
];

const path2 = [
  { x: -120, y: 5 },
  { x: -140, y: 7 },
  { x: -150, y: 10 },
  { x: -200, y: 15 }
];

const path3 = [
  { x: -120, y: 0 },
  { x: -140, y: 2 },
  { x: -150, y: 4 },
];

const path4 = [
  { x: -180, y: 5 },
  { x: -200, y: 5 },
];

const path5 = [
  { x: 0, y: -10 },
  { x: 5, y: -20 },
  { x: 10, y: -30 },
  { x: 20, y: -60 },
  { x: 40, y: -90 },
];

 t3.to(boat1_5.current, {
  duration: 3,
  motionPath: {
    path: path1,
    curviness: 1
  },
  ease: "power1.inOut"
}).to(boat1_5.current, {
  duration: 3,
  motionPath: {
    path: path2,
    curviness: 1
  },
  opacity:0,
  ease: "power1.inOut"
})

t3.to(boat1_6.current, {
  duration: 3,
  motionPath: {
    path: path3,
    curviness: 1
  },
  ease: "linear"
}).to(boat1_6.current, {
  duration: 3,
  motionPath: {
    path: path4,
    curviness: 1
  },
  opacity:0,
  ease: "power1.inOut"
})

t3.to(boat1_7.current, {
  duration: 3,
  motionPath: {
    path: path5,
    curviness: 1
  },
  rotate:-80,
  ease: "power1.inOut"
})



})

const moveBoat = contextSafe(() => {

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.delayedCall(1, () => {
        gsap.set(boat1_1.current, { clearProps: 'all' });
        gsap.set(boat1_2.current, { clearProps: 'all' });
        gsap.set(boat1_3.current, { clearProps: 'all' });
        gsap.set(boat1_4.current, { clearProps: 'all' });
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

  const path3 = [
    { x: 150, y: -2 },
    { x: 175, y: -5 },
    { x: 200, y: -10 },
    { x: 350, y: -30 },
  ];

  const path4 = [
    { x: -2, y: 10 },
    { x: -70, y: 80 },
  ];

  
  const path5= [
    { x: -70, y: 80 },
  ];
  const path6 = [
    { x: 0, y: 10 },
    { x: 5, y: 150 }
  ];
  
  const path7 = [
    { x: 0, y: 0 },
    { x: -10, y: 5 },
    { x: -20, y: 10 },
    { x: -120, y: 5 }
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


  tl.to(boat1_2.current, { 
    duration: 5, // Total duration for the combined path
    motionPath: {
      path: path3,
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
        path: path4,
        curviness: 1
      },
      onComplete: () => {
       setMove1(false); 
     },
      ease: "power1.inOut"
    }
  );

  tl.to(boat1_3.current, {
    duration: 3,
    motionPath: {
      path: path5,
      curviness: 1
    },
    rotate:-40,
    ease: "power1.inOut"
  }).to(boat1_3.current, {
    duration: 1,
    opacity:0,
    ease: "power1.inOut"
  })
  
  
  tl.to(boat1_4.current, {
    duration: 3,
    motionPath: {
      path: path6,
      curviness: 1
    },
    ease: "power1.inOut"
  }).to(boat1_4.current, {
    duration: 1,
    opacity:0,
    ease: "power1.inOut"
  })
  
  tl.to(boat1_5.current, {
    duration: 3,
    motionPath: {
      path: path7,
      curviness: 1
    },
    rotate: 10,
    ease: "power1.inOut"
  }).to(boat1_5.current, {
    duration: 1,
    onComplete: () => {
      setMove2(false); 
    },
    ease: "power1.inOut"
  })
  

})

 
useEffect(() => {

    if(move1){
   moveBoat();
  //  moveBoatRight()
  //  moveBoatBottom()
    }
 
}, [move1, move2, move3])


console.log(reset)
  return (
    <div>
<div className="w-full h-[40vh] md:h-[50vh] lg:h-[75vh] flex flex-col justify-center items-center gap-4 relative bg-[#D7F4FD]  py-8 absolute">

<div className="Game w-full h-full ">
<div className="Boat w-20 h-[4.6rem] absolute top-[15%] left-[1%]" ref={boat1_1}><p className="text-[1.2rem] font-bold">1</p></div>
<div className={`Boat w-20 h-[4.6rem] absolute top-[3%] left-[35%]  ${reset ? 'rotate-reset' : 'rotate-init'}`} ref={boat1_2}>
<p className="text-[1.2rem] font-bold">2</p></div>
<div className="Boat2 w-20 h-[4.6rem] absolute top-[15%] right-[10%]" ref={boat1_3}><p className="text-[1.2rem] font-bold">3</p></div>
<div className="Boat2 w-20 h-[4.6rem] absolute top-[45%] right-[15%] rotate25" ref={boat1_4}><p className="text-[1.2rem] font-bold">4</p></div>
<div className="Boat2 w-20 h-[4.6rem] absolute bottom-[5%] right-[25%]" ref={boat1_5}><p className="text-[1.2rem] font-bold">5</p></div>
<div className="Boat2 w-20 h-[4.6rem] absolute bottom-[1%] left-[35%] rotate15" ref={boat1_6}><p className="text-[1.2rem] font-bold">6</p></div>
<div className="Boat w-20 h-[4.6rem] absolute bottom-[5%] left-[-2%] rotate90" ref={boat1_7}><p className="text-[1.2rem] font-bold">7</p></div>

</div>


    </div>
    {/* <div>
    <button onClick={moveBoatRight}
    className="border-black border p-4">move</button>
  </div> */}
  </div>
   
  )
}

export default Game;
