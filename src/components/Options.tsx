import { useContext } from "react";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";

const Options = () => {
  const { setGameLength, gameLength, setGameState } = useContext(GlobalContext) as GlobalContextType;

  const handleClick = (seconds: number) => {
    setGameState("reset");
    setGameLength(seconds);
  };
  return (
    <div className=" min-h-20 bg-gray-800/40 absolute left-full translate-x-[-100%] gap-8 py-8 px-8 flex flex-col items-center rounded-xl select-none">
      <div className=" text-base">seconds</div>
      <div className=" grid grid-rows-2 grid-flow-col gap-5 items-center">
        <div
          onClick={() => handleClick(10)}
          className=" w-16 h-16 border border-white/70 rounded-lg flex items-center justify-center cursor-pointer hover:border-white"
        >
          10
        </div>
        <div
          onClick={() => handleClick(60)}
          className=" w-16 h-16 border border-white/70 rounded-lg flex items-center justify-center cursor-pointer hover:border-white"
        >
          60
        </div>
        <div
          onClick={() => handleClick(30)}
          className=" w-16 h-16 border border-white/70 rounded-lg flex items-center justify-center cursor-pointer hover:border-white"
        >
          30
        </div>
        <div
          onClick={() => handleClick(120)}
          className=" w-16 h-16 border border-white/70 rounded-lg flex items-center justify-center cursor-pointer hover:border-white"
        >
          120
        </div>
      </div>
      <div className=" text-base">dashboard</div>
      <div className=" grid grid-rows-1 grid-flow-col gap-5 items-center">
        <div className=" w-16 h-16 border border-white/70 rounded-lg flex items-center justify-center cursor-pointer hover:border-white">
          1
        </div>

        <div className=" w-16 h-16 border border-white/70 rounded-lg flex items-center justify-center cursor-pointer hover:border-white">
          2
        </div>
      </div>
    </div>
  );
};

export default Options;
