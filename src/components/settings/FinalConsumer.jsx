import { useState } from "react";
import { BsFileBarGraph } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { IoMdRefresh } from "react-icons/io";

const FinalConsumer = () => {
  const [showDiv, setShowDiv] = useState(0);

  const numbers1 = [1, 11, 3, 4];
  const numbers2 = [12, 12, 11, 0];

  return (
    <div>
      <div className="flex items-center gap-2">
        <BsFileBarGraph className="text-xl" />
        <h1 className="text-xl font-bold">Final Consumer Demand</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className=" md:w-[80%] lg:w-[50%] p-5">
          <div className="flex items-center justify-between border-b p-">
            <h2
              onClick={() => setShowDiv(0)}
              className={`text-lg font-bold ${
                showDiv === 0 && "border-b-2 border-pink-400"
              }`}
            >
              Manual update
            </h2>
            <h2
              onClick={() => setShowDiv(1)}
              className={`text-lg font-bold ${
                showDiv === 1 && "border-b-2 border-pink-400"
              }`}
            >
              Generate Demand
            </h2>
          </div>

          {showDiv === 0 && (
            <div>
              <h2 className="mt-2">
                Modify the values below or simply copy/paste a list of cells
                from an Exel spreadsheet:
              </h2>

              <textarea
                name=""
                id=""
                placeholder=" 4,8,8,8,8,8,8,8,"
                className="w-full h-40 border mt-5 p-2"
              >
                4,8,8,8,8,8,8,8,
              </textarea>
            </div>
          )}

          {showDiv === 1 && (
            <div className="mt-5">
              <div className="flex items-center justify-between border-b">
                <h2 className="text-lg font-bold">Form Cycle</h2>
                <h2 className="text-lg font-bold">To Cycle</h2>
                <h2 className="text-lg font-bold">Average</h2>
                <h2 className="text-lg font-bold">Variability</h2>
              </div>

              <div className="h-40">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                  {numbers1.map((num, index) => (
                    <input
                      key={index}
                      type="number"
                      value={num}
                      className="border w-28 h-8"
                    />
                  ))}
                </div>

                <p className="border my-2"></p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                  {numbers2.map((num, index) => (
                    <input
                      key={index}
                      type="number"
                      value={num}
                      className="border w-28 h-8"
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center gap-5">
                <button
                  className="flex items-center gap-2 bg-yellow-400 px-4 py-2"
                >
                  <IoMdRefresh /> Refresh
                </button>
                <button
                  className="flex items-center gap-2 bg-[#2DC4B6] text-white px-4 py-2"
                >
                  <FiPlus /> Add Segment
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Graph */}
        <div className="border-2 w-[50%]"></div>
      </div>
    </div>
  );
};

export default FinalConsumer;
