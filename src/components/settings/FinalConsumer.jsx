import { BsFileBarGraph } from "react-icons/bs";

const FinalConsumer = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-2">
        <BsFileBarGraph className="text-xl" />
        <h1 className="text-xl font-bold">Final Consumer Demand</h1>
      </div>

      <div className="flex items-center justify-between border border-red-500 gap-5">
        <div className="border-2 w-[50%] p-5">
          <div className="flex items-center justify-between border-b-2">
            <h2 className="text-lg font-bold border-b-2 border-">Manual update</h2>
            <h2 className="text-lg font-bold">Generate Demand</h2>
          </div>
        </div>

        {/* Graph */}
        <div className="border-2 w-[50%]">
          
        </div>
      </div>
    </div>
  );
};

export default FinalConsumer;
