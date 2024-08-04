import { FaPlay } from "react-icons/fa";
import Header from "./Header";
import Round1 from "./Round1";
import Round2 from "./Round2";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useState } from "react";

const Session = () => {
  const [active, setActive] = useState(2);

  return (
    <div>
      <Header active={active} setActive={setActive} />
      {active === 2 && (
        <>
          <div className="flex items-center justify-center mt-5">
            <div>
              <p className="flex items-center gap-2 text-center border px-5 py-1 rounded-2xl border-blue-500 text-blue-500">
                <FaPlay className="text-xs" /> Game Instruction
              </p>
              <IoIosArrowRoundDown className="text-7xl w-full mx-auto text-blue-500" />
            </div>
          </div>
          <Round1 />
          <div className="flex items-center justify-center">
            <IoIosArrowRoundDown className="text-7xl text-blue-500" />
          </div>
          <Round2 />
          <div className="flex items-center justify-center mt-[-0.8rem] mb-10">
            <div>
              <IoIosArrowRoundDown className="text-7xl text-blue-500" />
              <p className="text-center border rounded-2xl border-blue-500 text-blue-500 mt-[-0.9rem]">
                End
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Session;
