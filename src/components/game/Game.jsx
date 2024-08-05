import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/all";
import { LuRefreshCcw } from "react-icons/lu";
import { MdComputer, MdOutlineEdit } from "react-icons/md";
import Map from "../GameMap/GameMap";

const Game = ({ move1, setMove1, handleToggleModal }) => {
  const [reset, setReset] = useState(false);

  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(0);

  const [modalName, setModalName] = useState("Wholesaler");

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
    console.log(inputName);
    setIsModalOpen(false);
  };

  const handleValue = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.value.value;
    setValue(inputValue);
    moveBoat();
  };

  const boat1_1 = useRef();
  const boat1_2 = useRef();
  const boat1_3 = useRef();
  const boat1_4 = useRef();
  const boat1_5 = useRef();
  const boat1_6 = useRef();
  const boat1_7 = useRef();
  const { contextSafe } = useGSAP();

  gsap.registerPlugin(MotionPathPlugin);
  const moveBoat = contextSafe(() => {
    const masterTimeline = gsap.timeline({
      onComplete: () => {
        gsap.delayedCall(1, () => {
          gsap.set(boat1_1.current, { clearProps: "all" });
          gsap.set(boat1_2.current, { clearProps: "all" });
          gsap.set(boat1_3.current, { clearProps: "all" });
          gsap.set(boat1_4.current, { clearProps: "all" });
          gsap.set(boat1_5.current, { clearProps: "all" });
          gsap.set(boat1_6.current, { clearProps: "all" });
          gsap.set(boat1_7.current, { clearProps: "all" });
        });
      },
    });

    // Define the motion paths
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
    const path5 = [{ x: -70, y: 80 }];
    const path6 = [
      { x: 0, y: 10 },
      { x: 5, y: 150 },
    ];
    const path8 = [
      { x: 0, y: 0 },
      { x: -10, y: 5 },
      { x: -20, y: 10 },
      { x: -120, y: 5 },
    ];
    const path9 = [
      { x: -120, y: 5 },
      { x: -140, y: 7 },
      { x: -150, y: 10 },
      { x: -200, y: 15 },
    ];
    const path10 = [
      { x: -120, y: 0 },
      { x: -140, y: 2 },
      { x: -150, y: 4 },
    ];
    const path11 = [
      { x: -180, y: 5 },
      { x: -200, y: 5 },
    ];
    const path12 = [
      { x: 0, y: -10 },
      { x: 5, y: -20 },
      { x: 10, y: -30 },
      { x: 20, y: -60 },
      { x: 40, y: -90 },
    ];

    // Define individual timelines for each boat
    const timeline1 = gsap.timeline();
    timeline1
      .to(boat1_1.current, {
        duration: 1,
        rotate: -80,
        ease: "power1.inOut",
      })
      .to(boat1_1.current, {
        duration: 1,
        motionPath: { path: path1, curviness: 1 },
        rotate: -30,
        ease: "power1.inOut",
      })
      .to(boat1_1.current, {
        duration: 1,
        motionPath: { path: path2, curviness: 1 },
        rotate: -20,
        ease: "power1.inOut",
      })
      .to(boat1_1.current, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      });

    const timeline2 = gsap.timeline();
    timeline2
      .to(boat1_2.current, {
        duration: 3,
        motionPath: { path: path3, curviness: 1 },
        ease: "power1.inOut",
      })
      .to(boat1_2.current, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          setReset(true);
        },
        ease: "power1.inOut",
      });

    const timeline3 = gsap.timeline();
    timeline3
      .to(boat1_3.current, {
        duration: 3,
        motionPath: { path: path5, curviness: 1 },
        rotate: -40,
        ease: "power1.inOut",
      })
      .to(boat1_3.current, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      });

    const timeline4 = gsap.timeline();
    timeline4
      .to(boat1_4.current, {
        duration: 3,
        motionPath: { path: path6, curviness: 1 },
        ease: "power1.inOut",
      })
      .to(boat1_4.current, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      });

    const timeline5 = gsap.timeline();
    timeline5
      .to(boat1_5.current, {
        duration: 3,
        motionPath: { path: path8, curviness: 1 },
        ease: "power1.inOut",
      })
      .to(boat1_5.current, {
        duration: 1,
        motionPath: { path: path9, curviness: 1 },
        opacity: 0,
        ease: "power1.inOut",
      });

    const timeline6 = gsap.timeline();
    timeline6
      .to(boat1_6.current, {
        duration: 3,
        motionPath: { path: path10, curviness: 1 },
        ease: "linear",
      })
      .to(boat1_6.current, {
        duration: 1,
        motionPath: { path: path11, curviness: 1 },
        opacity: 0,
        ease: "power1.inOut",
      });

    const timeline7 = gsap.timeline();
    timeline7.to(boat1_7.current, {
      duration: 4,
      motionPath: { path: path12, curviness: 1 },
      rotate: -80,
      opacity: 0,
      ease: "power1.inOut",
      onComplete: () => {
        setMove1(false),
          setTimeout(() => {
            handleToggleModal();
          }, 1000);
      },
    });

    masterTimeline.add(timeline1, 1);
    masterTimeline.add(timeline2, 1);
    masterTimeline.add(timeline3, 1);
    masterTimeline.add(timeline4, 1);
    masterTimeline.add(timeline5, 1);
    masterTimeline.add(timeline6, 1);
    masterTimeline.add(timeline7, 1);
  });

  useEffect(() => {
    if (move1) {
      moveBoat();
    }
  }, [move1]);

  console.log(reset);
  return (
    <div className="w-full flex justify-center items-center">
      <Map />
      <div className=" w-full h-[75vh] relative">
        <div
          className="Boat w-20 h-[4.6rem] absolute  top-[5vw] left-[10vw]"
          ref={boat1_1}
        >
          <p className="text-[1.2rem] font-bold">1</p>
        </div>
        <div
          className={`Boat w-20 h-[4.6rem] absolute top-[0vw] left-[26vw] ${
            reset ? "rotate-reset" : "rotate-init"
          }`}
          ref={boat1_2}
        >
          <p className="text-[1.2rem] font-bold">2</p>
        </div>
        <div
          className="Boat2 w-20 h-[4.6rem] absolute top-[6vw] right-[13vw] "
          ref={boat1_3}
        >
          <p className="text-[1.2rem] font-bold">3</p>
        </div>
        <div
          className="Boat2 w-20 h-[4.6rem] absolute top-[18vw] right-[14vw] rotate25"
          ref={boat1_4}
        >
          <p className="text-[1.2rem] font-bold">4</p>
        </div>
        <div
          className="Boat2 w-20 h-[4.6rem] absolute bottom-[4vw] right-[18vw]"
          ref={boat1_5}
        >
          <p className="text-[1.2rem] font-bold">5</p>
        </div>
        <div
          className="Boat2 w-20 h-[4.6rem] absolute bottom-[2vw] left-[35vw] rotate15"
          ref={boat1_6}
        >
          <p className="text-[1.2rem] font-bold">6</p>
        </div>
        <div
          className="Boat w-20 h-[4.6rem] absolute  bottom-[3vw] left-[7vw] rotate90"
          ref={boat1_7}
        >
          <p className="text-[1.2rem] font-bold">7</p>
        </div>

        {/* Boxes in the corners */}

        {modalName === "Manufacturer" && (
          <div className="absolute z-[120] top-0 left-0 w-[50%] text-center bg-white rounded-3xl bg-opacity-80 py-2">
            <div className="flex items-center justify-between px-5">
              <div></div>
              <h2 className="font-bold text-xl">Manufacturer</h2>
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
                <form onSubmit={handleValue}>
                  <div>
                    <input
                      type="number"
                      placeholder="Quantity"
                      name="value"
                      id="value"
                      className="h-[3rem] "
                      style={{
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 py-2 px-5 h-[3rem]   text-white"
                      style={{
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                      }}
                    >
                      Order
                    </button>
                  </div>
                </form>
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
            </div>
          </div>
        )}

        {modalName === "Distributor" && (
          <div className="absolute z-[120] top-0 right-0 w-[50%] text-center bg-white rounded-3xl bg-opacity-80 py-2">
            <div className="flex items-center justify-between px-5">
              <div></div>
              <h2 className="font-bold text-xl">Distributor</h2>
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
                <form onSubmit={handleValue}>
                  <div>
                    <input
                      type="number"
                      placeholder="Quantity"
                      name="value"
                      id="value"
                      className="h-[3rem] "
                      style={{
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 py-2 px-5 h-[3rem]   text-white"
                      style={{
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                      }}
                    >
                      Order
                    </button>
                  </div>
                </form>
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
            </div>
          </div>
        )}

        {modalName === "Wholesaler" && (
          <div className="absolute z-[120] left-0 bottom-0 w-[50%] text-center bg-white rounded-3xl bg-opacity-80 py-2">
            <div className="flex items-center justify-between px-5">
              <div></div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-xl">WholeSaler</h2>
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
                <form onSubmit={handleValue}>
                  <div>
                    <input
                      type="number"
                      placeholder="Quantity"
                      name="value"
                      id="value"
                      className="h-[3rem] "
                      style={{
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 py-2 px-5 h-[3rem]   text-white"
                      style={{
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                      }}
                    >
                      Order
                    </button>
                  </div>
                </form>
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
            </div>
          </div>
        )}

        {modalName === "Retailer" && (
          <div className="absolute z-[120] right-0 bottom-0 w-[50%] text-center bg-white rounded-3xl bg-opacity-80 py-2">
            <div className="flex items-center justify-between px-5">
              <div></div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-xl">Retailer</h2>
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
                <form onSubmit={handleValue}>
                  <div>
                    <input
                      type="number"
                      placeholder="Quantity"
                      name="value"
                      id="value"
                      className="h-[3rem]"
                      style={{
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 py-2 px-5 h-[3rem]   text-white"
                      style={{
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                      }}
                    >
                      Order
                    </button>
                  </div>
                </form>
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
            </div>
          </div>
        )}

        {isModalOpen && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-lg font-semibold text-gray-900 ">
                    Enter Your Name
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
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
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
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
  );
};

export default Game;
