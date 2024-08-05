import stocks from "../../assets/Game/participants.svg";
import participants from "../../assets/Game/participants.svg";
import orders from "../../assets/Game/orders.svg";
import week from "../../assets/Game/weeks.svg";
import Game from "./Game";
import { useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { CiDeliveryTruck, CiMoneyBill } from "react-icons/ci";
import { IoTriangle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import arrow from "../../assets/modal/arrow.png";
import whole from "../../assets/modal/whole.png";
import wholeSeller from "../../assets/modal/wholeseller.png";

const GameScreen = ({ name, setName, setShowModal1 }) => {
  const [move1, setMove1] = useState(false);
  const [move2, setMove2] = useState(false);
  const [move3, setMove3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:mt-[12vh] md:mt-[8vh] mt-[14vh] w-full flex-1 overflow-hidden">
      <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-between items-center w-[95%] lg:w-[70%]  gap-5 ml-2 lg:ml-4 border-2 rounded-md py-2 px-5 ">
        <div className="flex items-center gap-5">
          <img src={stocks} className="w-5" alt="" />
          <p>Stocks</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={participants} className="w-5" alt="" />
          <p>Paticipants 1/4</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={orders} className="w-5" alt="" />
          <p>Orders 0/1</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={week} className="w-5" alt="" />
          <p>Week 0</p>
        </div>
        {/* <div className="flex items-center gap-2">
          <button onClick={() => setMove1(true)}>move</button>
        </div> */}
      </div>

      <div>
        {/* <button
          onClick={handleToggleModal}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Toggle modal
        </button> */}

        {isOpen && (
          <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-[200] flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full bg-gray-500 bg-opacity-75"
          >
            <div className="relative p-4 w-full max-w-4xl max-h-full">
              {" "}
              {/* Increased max-w-2xl to max-w-4xl */}
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900 w-full text-center">
                    What happens week 0?
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    onClick={handleToggleModal}
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
                <div className="p-4 md:p-5 space-y-4 flex items-center justify-between border-b">
                  <div className="p-10">
                    <h1 className="flex items-center gap-2">
                      <MdEmail /> Demand:{" "}
                      <span className="text-red-500">4</span>
                    </h1>
                    <p>from Retailer</p>
                    <img src={arrow} className="w-48" alt="" />
                  </div>
                  <div>
                    <img src={wholeSeller} className="w-20 mx-auto" alt="" />
                    <div className="p-10 shadow-xl rounded-3xl">
                      <img src={whole} alt="" />
                    </div>
                  </div>
                  <div className="p-10">
                    <img
                      src={arrow}
                      className="w-48 transform -scale-x-100"
                      alt="Reversed arrow"
                    />
                    <h1 className="flex items-center gap-2">
                      <CiDeliveryTruck /> Receipt:{" "}
                      <span className="text-[#71D4CA]">4</span>
                    </h1>
                    <p>from Retailer</p>
                  </div>
                </div>

                <div className="w-[80%] mx-auto flex justify-between items-center p-5">
                  <div className="flex items-center gap-2">
                    <IoTriangle />
                    <h1>
                      Start Stock: 12 +{" "}
                      <span className="text-[#71D4CA]">4</span>
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiMoneyBill />
                    <h1>Start Cost: 0</h1>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 md:p-5 border-t border-gray-200 rounded-b">
                  <button
                    onClick={handleToggleModal}
                    type="button"
                    className="text-white flex items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
                  >
                    <IoMdRefresh /> See animation again
                  </button>
                  <button
                    onClick={handleToggleModal}
                    type="button"
                    className="text-white bg-[#E96E79]  font-medium rounded-3xl text-xl px-5 py-2.5 text-center"
                  >
                    Next step: Order
                  </button>
                  <button
                    //   onClick={handleToggleModal}
                    type="button"
                    className="py-2.5 px-5 ms-3 flex items-center gap-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg"
                  >
                    <input type="checkbox" name="" id="" />
                    Show this panel each week
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="my-0 md:my-0 lg:mt-4 w-[100%] lg:h-[75vh] md:h-[90vh] h-[86vh] flex items-center justify-center pt-10 bg-[#DDF6FF]">
        <Game
          handleToggleModal={handleToggleModal}
          name={name}
          setName={setName}
          setShowModal1={setShowModal1}
          move1={move1}
          setMove1={setMove1}
          move2={move2}
          setMove2={setMove2}
          move3={move3}
          setMove3={setMove3}
        />
      </div>
    </div>
  );
};

export default GameScreen;
