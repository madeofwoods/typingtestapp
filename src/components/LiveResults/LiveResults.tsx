import { useContext, useEffect, useState } from "react";
import { GlobalContext, GlobalContextType } from "../../context/GlobalContextProvider";
import { demoWords } from "../../utils/utils";
import { calculateErrors, getNetWPM } from "./utils";
import Acceleration from "../Acceleration";
import Speedometer from "../Speedometer";
import SpeedometerTwo from "../SpeedometerTwo";

const LiveResults = ({ timeRemaining }: { timeRemaining: number }) => {
  const { typedChars, numberChars, startTime } = useContext(GlobalContext) as GlobalContextType;
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);

  useEffect(() => {
    const currentTime = new Date();
    setElapsedTime((currentTime.getTime() - startTime.getTime()) / 1000);

    setErrors(calculateErrors(demoWords, typedChars));
  }, [typedChars, startTime]);

  return (
    <div className="">
      <div className="w-[700px] h-28 flex items-center justify-between">
        <div className="border-2 border-slate-500 w-20 py-4 text-center">{numberChars}</div>
        <div className="border-2 border-red-500 w-20 py-4 text-center text-red-400">{errors}</div>
        <div className="border-2 border-purple-500 w-20 py-4 text-center text-purple-400">
          {getNetWPM(typedChars.length, elapsedTime, errors)}
        </div>
        {/* <Acceleration /> */}
        <div className="border-2 border-slate-500 w-20 py-4 text-center">{timeRemaining}</div>
      </div>
      <div className="mx-auto p-10 flex items-center justify-center">
        {/* <Speedometer /> */}
        <SpeedometerTwo typedChars={typedChars} elapsedTime={elapsedTime} errors={errors} />
      </div>
    </div>
  );
};

export default LiveResults;
