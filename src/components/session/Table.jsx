import { GoDotFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoFlag } from "react-icons/io5";

const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-gray-500 text-center border border-gray-200">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
          <tr>
            <th scope="col" className="border px-6 py-3"></th>
            <th scope="col" className="border px-6 py-3">
              Team name
            </th>
            <th scope="col" className="border px-6 py-3">
              Status
            </th>
            <th scope="col" className="border px-6 py-3">
              Players
            </th>
            <th scope="col" className="border px-6 py-3">
              Orders
            </th>
            <th scope="col" className="border px-6 py-3">
              Week
            </th>
            <th scope="col" className="border px-6 py-3">
              Cost
            </th>
            <th scope="col" className="border px-6 py-3">
              Timer
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-gray-200">
            <th
              scope="row"
              className="border px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              <input type="checkbox" name="" id="" />
            </th>
            <td className="border px-6 py-4">Team 1</td>
            <td className="border px-6 py-4 flex items-center text-[#2DC4B6] gap-1">
              <GoDotFill /> Active
            </td>
            <td className="border px-6 py-4">1/4 ?</td>
            <td className="border px-6 py-4">1/4 ?</td>
            <td className="border px-6 py-4 flex items-center gap-1 text-[#2DC4B6]">
              <IoFlag /> 9/12
            </td>
            <td className="border px-6 py-4 text-blue-500">$202</td>
            <td className="border px-6 py-4"></td>
            <td className="border px-6 py-4">
              <IoMdSettings className="text-xl text-blue-500" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
