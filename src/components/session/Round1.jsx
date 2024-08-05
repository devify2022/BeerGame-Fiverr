import { GrPowerReset } from "react-icons/gr";
import { IoIosLock, IoIosMail, IoMdStopwatch } from "react-icons/io";
import { IoPauseCircleSharp } from "react-icons/io5";
import { MdGroups, MdOutlineZoomInMap, MdStop } from "react-icons/md";
import Table from "./Table";

const Round1 = () => {
  return (
    <div className="border w-[95%] lg:w-[80%] mx-auto mt-[-0.5rem]  mb-[-0.6rem] rounded-xl border-blue-500">
      <header>
        <div className="flex items-center justify-between p-2">
          <div className="flex flex-col items-center gap-2">
            <IoIosLock className="text-3xl" />
            <h2 className="text-2xl lg:text-3xl font-semibold text-blue-500">Round 1</h2>
            <h2 className="font-semibold  text-lg lg:text-xl">Short Beer Game ?</h2>
          </div>
          <MdOutlineZoomInMap className="text-3xl text-blue-500" />
        </div>

        <div className="bg-gray-200 p-2">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 items-center justify-center gap-5">
            <h2>Update all:</h2>
            <button
              to="/edit"
              className="flex items-center gap-2 bg-white px-3 py-2"
            >
              <IoMdStopwatch /> Start Timer
            </button>
            <button
              to="/edit"
              className="flex items-center gap-2 bg-white px-3 py-2 "
            >
              <IoPauseCircleSharp /> Pause
            </button>
            <button
              to="/edit"
              className="flex items-center gap-2 bg-white text-red-500 px-3 py-2"
            >
              <GrPowerReset /> Reset
            </button>
            <button
              to="/edit"
              className="flex items-center gap-2 bg-red-500 text-white px-3 py-2"
            >
              <MdStop /> Finish
            </button>
            <button
              to="/edit"
              className="flex items-center text-sm gap-2 bg-white text-gray-400 px-3 py-3"
            >
              <IoIosMail className="text-xl" /> Send Message
            </button>
            <button
              to="/edit"
              className="flex items-center gap-2 bg-black text-white px-3 py-2"
            >
              <MdGroups /> Start Timer
            </button>
          </div>
        </div>
      </header>
      <Table />
    </div>
  );
};

export default Round1;
