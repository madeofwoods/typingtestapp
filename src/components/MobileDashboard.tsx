import { useContext } from "react";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";
import image from "../assets/undo-arrow.png";
import MobileSVG from "./MobileSVG";

const MobileDashboard = ({
  wpm,
  timeRemaining,
  elapsedTime,
  errors,
}: {
  wpm: number;
  timeRemaining: number;
  elapsedTime: number;
  errors: number;
}) => {
  const { setGameState } = useContext(GlobalContext) as GlobalContextType;
  return (
    <div className="relative flex justify-center items-center z-0 select-none sm:hidden">
      <div className="flex flex-col justify-center items-center gap-4">
        <MobileSVG elapsedTime={elapsedTime} errors={errors} />
        <div className="flex gap-8 items-center justify-center">
          <div className="flex flex-col w-24 gap-4">
            <div className="text-center">wpm</div>
            <div className="text-center text-2xl">{Math.round(wpm)}</div>
          </div>
          <div className="flex flex-col w-24  gap-4">
            <div className="text-center">time</div>
            <div className="text-center text-2xl">{timeRemaining}</div>
          </div>
          <div className="flex  w-24  justify-center">
            <div
              onClick={() => setGameState("reset")}
              className=" cursor-pointer text-gray-100/80 text-2xl  bg-indigo-800/30 w-14 h-14 rounded-lg flex items-center justify-center border-violet-700 border-2 hover:border-violet-500 hover:bg-indigo-700/30  "
            >
              <img src={image} width={30} height={30} className=" invert-[60%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;
