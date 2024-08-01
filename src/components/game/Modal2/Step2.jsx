import manufacturer from "../../../assets/game/manufacturer.png";

const Step2 = ({ setCurrentStep }) => {
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Objective of the Game
            </h3>
            <p className="text-sm text-[#23BB86] dark:text-gray-400 mt-4 w-[80%]">
              Fullfill your client’s orders while keeping your costs to minimum.
            </p>
          </div>

          <div className="flex items-center justify-between w-[70%] px-5">
            <h2 className="text-sm text-[#C4C4C4]">
              Stock Cost : <span className="text-[#EB5757]">$0.50</span>/
              <span>unit/week</span>
            </h2>
            <h2 className="text-sm text-[#C4C4C4]">
              Backorder Cost : <span className="text-[#EB5757]">$0.50</span>/
              <span>unit/week</span>
            </h2>
          </div>

          <div className="p-5">
            <h2 className="text-base font-semibold">You are starting with</h2>
            <div className="flex items-center gap-10 mt-5">
              <img src={manufacturer} alt="" />
              <h2 className="text-base text-[#FA620C] font-semibold">Stocks:</h2>
              <h2 className="text-base text-[#FA620C] font-semibold">Backorder:</h2>
            </div>
          </div>

          <div className="flex items-center p-4 md:p-5 gap-5 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-[#34B3F1] bg-white hover:bg-blue-500 hover:text-white border border-[#34B3F1] text-sm px-6 py-2 rounded-lg"
              onClick={() =>setCurrentStep(1)}
            >
              BACK
            </button>
            <button
              type="button"
              className="text-white bg-[#34B3F1] hover:bg-blue-500 text-sm px-6 py-2 rounded-lg"
              onClick={() =>setCurrentStep(3)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
