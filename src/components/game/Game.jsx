import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/all";
import { LuRefreshCcw } from "react-icons/lu";
import { MdComputer, MdOutlineEdit } from "react-icons/md";

const Game = ({
  name,
  setName,
  move1,
  setMove1,
  move2,
  setMove2,
  move3,
  setMove3,
}) => {
  const [reset, setReset] = useState(false);

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
          gsap.set(boat1_5.current, { clearProps: "all" });
          gsap.set(boat1_6.current, { clearProps: "all" });
        });
      },
    });

    const path1 = [
      { x: 0, y: 0 },
      { x: -10, y: 5 },
      { x: -20, y: 10 },
      { x: -120, y: 5 },
    ];

    const path2 = [
      { x: -120, y: 5 },
      { x: -140, y: 7 },
      { x: -150, y: 10 },
      { x: -200, y: 15 },
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
        curviness: 1,
      },
      ease: "power1.inOut",
    }).to(boat1_5.current, {
      duration: 3,
      motionPath: {
        path: path2,
        curviness: 1,
      },
      opacity: 0,
      ease: "power1.inOut",
    });

    t3.to(boat1_6.current, {
      duration: 3,
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: "linear",
    }).to(boat1_6.current, {
      duration: 3,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      opacity: 0,
      ease: "power1.inOut",
    });

    t3.to(boat1_7.current, {
      duration: 3,
      motionPath: {
        path: path5,
        curviness: 1,
      },
      rotate: -80,
      ease: "power1.inOut",
    });
  });

  const moveBoat = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.delayedCall(1, () => {
          gsap.set(boat1_1.current, { clearProps: "all" });
          gsap.set(boat1_2.current, { clearProps: "all" });
          gsap.set(boat1_3.current, { clearProps: "all" });
          gsap.set(boat1_4.current, { clearProps: "all" });
        });
      },
    });

    // Define the motion path
    const path1 = [
      { x: 0, y: -10 },
      { x: 5, y: -20 },
      { x: 20, y: -35 },
      { x: 50, y: -50 },
    ];

    const path2 = [{ x: 150, y: -85 }];

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

    const path5 = [{ x: -70, y: 80 }];
    const path6 = [
      { x: 0, y: 10 },
      { x: 5, y: 150 },
    ];

    const path7 = [
      { x: 0, y: 0 },
      { x: -10, y: 5 },
      { x: -20, y: 10 },
      { x: -120, y: 5 },
    ];

    tl.to(boat1_1.current, {
      duration: 3,
      rotate: -80,
      ease: "power1.inOut",
    })
      .to(boat1_1.current, {
        duration: 3,
        motionPath: {
          path: path1,
          curviness: 1,
        },
        rotate: -30,
        ease: "power1.inOut",
      })
      .to(boat1_1.current, {
        duration: 3,
        motionPath: {
          path: path2,
          curviness: 1,
        },
        rotate: -20,

        ease: "power1.inOut",
      })
      .to(boat1_1.current, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      });

    tl.to(boat1_2.current, {
      duration: 5, // Total duration for the combined path
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: "power1.inOut",
    }).to(boat1_2.current, {
      duration: 3, // Duration for fading out at the end
      opacity: 0,
      onComplete: () => {
        setReset(true);
      },
      ease: "power1.inOut",
    });

    tl.to(boat1_3.current, {
      duration: 3,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      onComplete: () => {
        setMove1(false);
      },
      ease: "power1.inOut",
    });

    tl.to(boat1_3.current, {
      duration: 3,
      motionPath: {
        path: path5,
        curviness: 1,
      },
      rotate: -40,
      ease: "power1.inOut",
    }).to(boat1_3.current, {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });

    tl.to(boat1_4.current, {
      duration: 3,
      motionPath: {
        path: path6,
        curviness: 1,
      },
      ease: "power1.inOut",
    }).to(boat1_4.current, {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });

    tl.to(boat1_5.current, {
      duration: 3,
      motionPath: {
        path: path7,
        curviness: 1,
      },
      rotate: 10,
      ease: "power1.inOut",
    }).to(boat1_5.current, {
      duration: 1,
      onComplete: () => {
        setMove2(false);
      },
      ease: "power1.inOut",
    });
  });

  useEffect(() => {
    if (move1) {
      moveBoat();
      //  moveBoatRight()
      //  moveBoatBottom()
    }
  }, [move1, move2, move3]);

  console.log(reset);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setvalue] = useState(0);

  console.log(value);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputName = e.target.elements.name.value;
    setName(inputName);
    setIsModalOpen(false);
  };

  const handleValue = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.value.value;
    setvalue(inputValue);
    console.log(value);
  };

  return (
    <div>
      <div className="w-full h-[40vh] md:h-[50vh] lg:h-[75vh] flex flex-col justify-center items-center relative bg-[#D7F4FD] py-8 px-5">
        <div className="Game w-full h-full relative">
          <div
            className="Boat w-20 h-[4.6rem] absolute top-[15%] left-[1%]"
            ref={boat1_1}
          >
            <p className="text-[1.2rem] font-bold">1</p>
          </div>
          <div
            className={`Boat w-20 h-[4.6rem] absolute top-[3%] left-[35%] ${
              reset ? "rotate-reset" : "rotate-init"
            }`}
            ref={boat1_2}
          >
            <p className="text-[1.2rem] font-bold">2</p>
          </div>
          <div
            className="Boat2 w-20 h-[4.6rem] absolute top-[15%] right-[10%]"
            ref={boat1_3}
          >
            <p className="text-[1.2rem] font-bold">3</p>
          </div>
          <div
            className="Boat2 w-20 h-[4.6rem] absolute top-[45%] right-[15%] rotate25"
            ref={boat1_4}
          >
            <p className="text-[1.2rem] font-bold">4</p>
          </div>
          <div
            className="Boat2 w-20 h-[4.6rem] absolute bottom-[5%] right-[25%]"
            ref={boat1_5}
          >
            <p className="text-[1.2rem] font-bold">5</p>
          </div>
          <div
            className="Boat2 w-20 h-[4.6rem] absolute bottom-[1%] left-[35%] rotate15"
            ref={boat1_6}
          >
            <p className="text-[1.2rem] font-bold">6</p>
          </div>
          <div
            className="Boat w-20 h-[4.6rem] absolute bottom-[5%] left-[-2%] rotate90"
            ref={boat1_7}
          >
            <p className="text-[1.2rem] font-bold">7</p>
          </div>

          {/* Boxes in the corners */}
          <div className="absolute top-0 left-0 w-[50%] text-center bg-white rounded-3xl bg-opacity-80 py-2">
            <div className="flex items-center justify-between px-5">
              <div></div>
              <h2 className="font-bold text-xl">Retailer</h2>
              <div className="flex items-center gap-2">
                <LuRefreshCcw />
                <MdComputer />
              </div>
            </div>
            <div className="border-t mt-5 p-5">
              <div className="flex items-center justify-between">
                <h2>
                  Stock: <span className="font-bold">4</span>
                </h2>
                <h2>
                  Cost: <span className="font-bold text-red-500">$12</span>
                </h2>
              </div>
              <div className="flex items-center justify-between gap-5 text-base mt-5">
                <div className="flex items-center gap-2">
                  <h2>Receipt:</h2>
                  <h2 className="text-blue-500 font-bold">$40</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2>Demand:</h2>
                  <h2 className="text-red-500 font-bold">$40</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2>Shipment:</h2>
                  <h2 className="text-blue-800 font-bold">$40</h2>
                </div>
              </div>
              <div className="mt-5">
                <form onSubmit={handleValue} action="">
                  <div className="">
                    <input
                      type="number"
                      placeholder="Quantity"
                      name="value"
                      id="value"
                      className=""
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 py-2 px-5 rounded-3xl ml-[-20px] text-white"
                    >
                      Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[50%] text-center bg-white rounded-3xl bg-opacity-80 py-2">
            <div className="flex items-center justify-between px-5">
              <div></div>
              <h2 className="font-bold text-xl">Wholesaler</h2>
              <div className="flex items-center gap-2">
                <LuRefreshCcw />
                <MdComputer />
              </div>
            </div>
            <div className="border-t mt-5 p-5">
              <div className="flex items-center justify-between">
                <h2>
                  Stock: <span className="font-bold">4</span>
                </h2>
                <h2>
                  Backorder: <span className="font-bold text-red-500">$8</span>
                </h2>
                <h2>
                  Cost: <span className="font-bold text-red-500">$20</span>
                </h2>
              </div>
              <div className="flex items-center justify-between gap-5 text-base mt-5">
                <div className="flex items-center gap-2">
                  <h2>Receipt:</h2>
                  <h2 className="text-blue-500 font-bold">$40</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2>Demand:</h2>
                  <h2 className="text-red-500 font-bold">$40</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2>Shipment:</h2>
                  <h2 className="text-blue-800 font-bold">$40</h2>
                </div>
              </div>
              <div className="mt-5">
                <form onSubmit={handleValue} action="">
                  <div className="">
                    <input
                      type="number"
                      placeholder="Quantity"
                      name="value"
                      id="value"
                      className=""
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 py-2 px-5 rounded-3xl ml-[-20px] text-white"
                    >
                      Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 w-[50%] text-center bg-white rounded-3xl bg-opacity-80 py-2">
            <div className="flex items-center justify-between px-5">
              <div></div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-xl">Distributor</h2>
                <h1>{name}</h1>
                <MdOutlineEdit
                  onClick={handleEdit}
                  className="cursor-pointer text-xl"
                />
              </div>
              <div className="flex items-center gap-2">
                <LuRefreshCcw />
                <MdComputer />
              </div>
            </div>
            <div className="border-t mt-5 p-5">
              <div className="flex items-center justify-between">
                <h2>
                  Stock: <span className="font-bold">4</span>
                </h2>
                <h2>
                  Cost: <span className="font-bold text-red-500">$12</span>
                </h2>
              </div>
              <div className="flex items-center justify-between gap-5 text-base mt-5">
                <div className="flex items-center gap-2">
                  <h2>Receipt:</h2>
                  <h2 className="text-blue-500 font-bold">$40</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2>Demand:</h2>
                  <h2 className="text-red-500 font-bold">$40</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2>Shipment:</h2>
                  <h2 className="text-blue-800 font-bold">$40</h2>
                </div>
              </div>
              <div className="mt-5">
                <form onSubmit={handleValue} action="">
                  <div className="">
                    <input
                      type="number"
                      placeholder="Quantity"
                      name="value"
                      id="value"
                      className=""
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 py-2 px-5 rounded-3xl ml-[-20px] text-white"
                    >
                      Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[50%] text-center bg-white rounded-3xl bg-opacity-80 py-2">
            <div className="flex items-center justify-between px-5">
              <div></div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-xl">Manufacturer</h2>
                <h1>{name}</h1>
                <MdOutlineEdit
                  onClick={handleEdit}
                  className="cursor-pointer text-xl"
                />
              </div>
              <div className="flex items-center gap-2">
                <LuRefreshCcw />
                <MdComputer />
              </div>
            </div>
            <div className="border-t mt-5 p-5">
              <div className="flex items-center justify-between">
                <h2>
                  Stock: <span className="font-bold">4</span>
                </h2>
                <h2>
                  Cost: <span className="font-bold text-red-500">$12</span>
                </h2>
              </div>
              <div className="flex items-center justify-between gap-5 text-base mt-5">
                <div className="flex items-center gap-2">
                  <h2>Receipt:</h2>
                  <h2 className="text-blue-500 font-bold">$40</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2>Demand:</h2>
                  <h2 className="text-red-500 font-bold">$40</h2>
                </div>
                <div className="flex items-center gap-2">
                  <h2>Shipment:</h2>
                  <h2 className="text-blue-800 font-bold">$40</h2>
                </div>
              </div>
              <div className="mt-5">
                <form onSubmit={handleValue} action="">
                  <div className="">
                    <input
                      type="number"
                      placeholder="Quantity"
                      name="value"
                      id="value"
                      className=""
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 py-2 px-5 rounded-3xl ml-[-20px] text-white"
                    >
                      Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Enter Your Name
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleCloseModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
