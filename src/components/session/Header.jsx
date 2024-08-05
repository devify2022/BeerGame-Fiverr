import { BsThreeDots } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import qr from "../../assets/session/qr.png";
import { Link } from "react-router-dom";

const Header = ({ active, setActive }) => {
  return (
    <div className="bg-gradient-to-b from-[#F5B5BB] to-white">
      <div className="p-10 flex flex-col gap-10 md:flex-row lg:flex-row items-center justify-between">
        <div className="flex  items-center gap-5">
          <div>
            <img src={qr} className="w-28 border border-red-500 p-2" alt="" />
            <h2 className="text-sm">Click to show link</h2>
          </div>

          <div>
            <h1 className="text-4xl font-bold">test</h1>
            <div className="mt-2 flex flex-col lg:flex-row gap-2">
              <button className="px-5 py-1 text-white rounded-2xl bg-green-500">
                Published
              </button>
              <button className="px-5 py-1 rounded-2xl bg-white text-blue-500">
                1 Team
              </button>
              <button className="px-5 py-1 rounded-2xl bg-white text-blue-500">
                2 Rounds
              </button>
              <button className="px-5 py-1 rounded-2xl bg-white text-blue-500">
                1/4 Player
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2">
          <Link
            to="/settings"
            className="flex items-center gap-2 bg-yellow-400 px-4 py-2 rounded-2xl"
          >
            <MdEdit /> Settings
          </Link>
          <button
            to="/edit"
            className="flex items-center gap-2 bg-gray-300 text-blue-500 px-4 py-2 rounded-2xl"
          >
            <FaStar /> Invite Players
          </button>
          <button
            to="/edit"
            className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl"
          >
            <BsThreeDots />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center text-xl gap-3">
        <button
          onClick={() => setActive(1)}
          className={`px-5 py-2 text-black ${
            active === 1 && "border border-b-0 bg-white text-[#F4B5BA]"
          }`}
        >
          Lobby
        </button>
        <button
          onClick={() => setActive(2)}
          className={`px-5 py-2 text-black ${
            active === 2 && "border border-b-0 bg-white text-[#F4B5BA]"
          }`}
        >
          Follow-up
        </button>
        <button
          onClick={() => setActive(3)}
          className={`px-5 py-2 text-black ${
            active === 3 && "border border-b-0 bg-white text-[#F4B5BA]"
          }`}
        >
          Results
        </button>
      </div>
    </div>
  );
};

export default Header;
