import homes from "../../../assets/game/homes.png";

const Step1 = ({ onClose, setCurrentStep }) => {
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
              Welcome Name !
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 w-[80%]">
              This game will teach you key supply-chain concepts , by simulating
              a beer distriution network
            </p>
          </div>

          <div className="flex items-center justify-between w-[80%] p-5">
            <h2 className="text-base font-semibold">
              Your role : <span className="text-[#FA620C]">Manufacturer</span>
            </h2>
            <h2 className="text-base font-semibold">
              Your Client : <span className="text-[#34B3F1]">Manufacturer</span>
            </h2>
          </div>

          <div>
            <img src={homes} alt="" />
          </div>

          <div className="flex items-center p-4 md:p-5 gap-5 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-[#34B3F1] bg-white hover:bg-blue-500 hover:text-white border border-[#34B3F1] text-sm px-6 py-2 rounded-lg"
              onClick={onClose}
            >
              CLOSE
            </button>
            <button
              type="button"
              className="text-white bg-[#34B3F1] hover:bg-blue-500 text-sm px-6 py-2 rounded-lg"
              onClick={() => setCurrentStep(2)}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;