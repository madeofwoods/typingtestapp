import { useContext } from "react";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";

const Options = () => {
  const { setGameLength, gameLength, setGameState, setDashboard, dashboard } = useContext(
    GlobalContext
  ) as GlobalContextType;

  const handleClick = (seconds: number) => {
    setGameState("reset");
    setGameLength(seconds);
  };
  return (
    <div className=" min-h-20 bg-gray-900/90 lg:bg-gray-800/40 absolute left-full translate-x-[-150px] md:translate-x-[-100%] gap-8 p-6 md:p-8 flex flex-col items-center rounded-xl select-none  text-sm md:text-base">
      <div className=" text-sm md:text-base">seconds</div>
      <div className=" grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-5 items-center">
        <div
          onClick={() => handleClick(10)}
          className={` w-12 h-12 md:w-16 md:h-16 border  rounded-lg flex items-center justify-center cursor-pointer  ${
            gameLength === 10 ? "bg-violet-900/20 border-violet-600" : "hover:border-white border-white/70"
          }`}
        >
          10
        </div>
        <div
          onClick={() => handleClick(60)}
          className={`  w-12 h-12 md:w-16 md:h-16 border  rounded-lg flex items-center justify-center cursor-pointer ${
            gameLength === 60 ? "bg-violet-900/20 border-violet-700" : "hover:border-white border-white/70"
          }`}
        >
          60
        </div>
        <div
          onClick={() => handleClick(30)}
          className={`  w-12 h-12 md:w-16 md:h-16 border  rounded-lg flex items-center justify-center cursor-pointer ${
            gameLength === 30 ? "bg-violet-900/20 border-violet-700" : "hover:border-white border-white/70"
          }`}
        >
          30
        </div>
        <div
          onClick={() => handleClick(120)}
          className={`  w-12 h-12 md:w-16 md:h-16 border  rounded-lg flex items-center justify-center cursor-pointer ${
            gameLength === 120 ? "bg-violet-900/20 border-violet-700" : "hover:border-white border-white/70"
          }`}
        >
          120
        </div>
      </div>
      <div className=" text-sm md:text-base">skin</div>
      <div className=" grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-5 items-center">
        <div
          onClick={() => setDashboard(1)}
          className={`  w-12 h-12 md:w-16 md:h-16 border  rounded-lg flex items-center justify-center cursor-pointer ${
            dashboard === 1 ? "bg-violet-900/20 border-violet-700" : "hover:border-white border-white/70"
          }`}
        >
          1
        </div>

        <div
          onClick={() => setDashboard(2)}
          className={`  w-12 h-12 md:w-16 md:h-16 border  rounded-lg flex items-center justify-center cursor-pointer ${
            dashboard === 2 ? "bg-violet-900/20 border-violet-700" : "hover:border-white border-white/70"
          }`}
        >
          2
        </div>
      </div>
    </div>
  );
};

export default Options;
