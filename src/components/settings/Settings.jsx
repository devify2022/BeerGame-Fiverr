import { SlGraph } from "react-icons/sl";
import RoundSettings from "./RoundSettings";
import { useState } from "react";

const Settings = () => {
  const [active, setActive] = useState(1);
  const [termsVal, setTermsval] = useState(1);

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-20 border rounded-md shadow-md p-5">
      <div className="flex justify-between">
        <div className="flex gap-5 border-b">
          <button
            onClick={() => setActive(1)}
            className={`font-semibold text-lg ${
              active === 1 && "text-pink-500 border-b border-pink-600"
            }`}
          >
            Settings
          </button>
          <button
            onClick={() => setActive(2)}
            className={`font-bold text-lg ${
              active === 2 && "text-pink-500 border-b border-pink-600"
            }`}
          >
            Invite players
          </button>
        </div>
        <SlGraph className="text-xl text-pink-600" />
      </div>
      {active === 1 && (
        <>
          <div className="w-[100%] mt-5">
            <h1 className="font-bold">Session Name</h1>
            <input
              type="text"
              className="w-full lg:w-[80%] border p-1 border-gray-200 rounded-md mt-2"
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-center gap-10 justify-between mt-5">
            <div className="">
              <h1 className="text-lg font-bold">Number of tearms</h1>
              <p>Each team can accommodate up to 4 players</p>
              <div className="flex items-center">
                <div className="flex justify-start items-center gap-2 mt-2">
                  <button
                    onClick={() => setTermsval((prev) => Math.max(prev - 1, 0))}
                    className={`py-1 px-3 border text-white rounded-md ${
                      termsVal === 1
                        ? "bg-blue-200 cursor-not-allowed"
                        : "bg-blue-500"
                    }`}
                    disabled={termsVal === 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name=""
                    value={termsVal}
                    className="text-center w-[12%] rounded-md border"
                    id=""
                    readOnly
                  />
                  <button
                    onClick={() => setTermsval((prev) => prev + 1)}
                    className="py-1 px-3 border text-white bg-blue-500 rounded-md"
                  >
                    +
                  </button>
                  <p className="text-base text-blue-500">Choose team names</p>
                </div>
              </div>
            </div>
            <div className="w-full mt-2 lg:mt-0 md:w-[50%] lg:w-[50%]">
              <h1 className="font-bold text-lg">Session name</h1>
              <select
                name=""
                id=""
                className="w-[80%] border p-1 border-gray-200 rounded-md mt-2"
              >
                <option value="">Maintain teams and role</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between mt-5">
            <div className="lg:w-[50%]">
              <h1 className="font-bold text-lg">Game instructions format ?</h1>
              <select
                name=""
                id=""
                className="w-[70%] border p-1 border-gray-200 rounded-md mt-2"
              >
                <option value="">
                  Video shown by instructor and slides for players
                </option>
              </select>
            </div>

            <div className="lg:w-[50%] mt-5">
              <h1 className="font-bold text-lg">
                Allow players to reset their game
              </h1>

              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 mt-5">
                  No
                </span>
              </label>
            </div>
          </div>
          <RoundSettings />
        </>
      )}
    </div>
  );
};

export default Settings;
