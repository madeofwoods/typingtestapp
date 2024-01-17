import { useContext, useEffect, useState } from "react";
import { GlobalContext, GlobalContextType } from "../../context/GlobalContextProvider";
import { demoWords } from "../../utils/utils";
import { calculateErrors, getGrossWPM, getNetWPM } from "./utils";
import Acceleration from "../Acceleration";
import Speedometer from "../Speedometer";
import SpeedometerTwo from "../SpeedometerTwo";
import Dashboard from "../DashboardSVGs/Dashboard";
import FullDashboard from "../DashboardSVGs/FullDashboard";

const LiveResults = ({ timeRemaining, counter }: { timeRemaining: number; counter: number }) => {
  const { typedChars, numberChars, startTime } = useContext(GlobalContext) as GlobalContextType;
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [numberTyped, setNumberTyped] = useState<number[]>([]);
  const [speedArray, setSpeedArray] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    if (
      (counter > 5 && numberChars >= numberTyped[counter - 6]) ||
      (counter <= 5 && numberChars >= numberTyped[counter - 1])
    ) {
      const lettersToCheck =
        counter > 4
          ? typedChars.slice(numberTyped[counter - 6], numberChars)
          : typedChars.slice(numberTyped[counter], numberChars);
      const correctLettersToCheck = demoWords.slice(
        counter > 4 ? numberTyped[counter - 6] : numberTyped[counter],
        numberChars
      );
      console.log({ lettersToCheck, counter });

      let corr = 0;
      let err = 0;

      lettersToCheck.split("").forEach((el, i) => {
        el == correctLettersToCheck[i] ? corr++ : err++;
      });

      const speed = getGrossWPM(corr, 1);

      setSpeedArray((prev) => [...prev, speed]);
    } else {
      setSpeedArray((prev) => [...prev, 0]);
    }
    console.log(numberChars);
    console.log(numberTyped[counter - 1]);
    setNumberTyped((prev) => [...prev, typedChars.length]);
    console.log(numberTyped);
  }, [counter]);

  // useEffect(() => {
  //   console.log(speedArray);
  // }, [speedArray]);

  const getAccuracy = (typedChars: string, errors: number): number => {
    const numberTyped: number = typedChars.length;
    if (numberTyped == 0) return 0;
    if (errors == 0) return 100;
    else {
      return Math.round(((numberTyped - errors) / numberTyped) * 100);
    }
  };

  useEffect(() => {
    const currentTime = new Date();
    setElapsedTime((currentTime.getTime() - startTime.getTime()) / 1000);

    setErrors(calculateErrors(demoWords, typedChars));
  }, [typedChars, startTime]);

  return (
    <div className="">
      {/* <div className="w-[700px] h-28 flex items-center justify-between">
        <div className="border-2 border-slate-500 w-20 py-4 text-center">{numberChars}</div>
        <div className="border-2 border-red-500 w-20 py-4 text-center text-red-400">{errors}</div>
        <div className="border-2 border-purple-500 w-20 py-4 text-center text-purple-400">
          {getNetWPM(typedChars.length, elapsedTime, errors)}
        </div>
        <div className="border-2 border-slate-500 w-20 py-4 text-center">{timeRemaining}</div>
      </div> */}
      <div className=" w-[800px] h-[400px] mb-20">
        <FullDashboard
          typedChars={typedChars}
          elapsedTime={elapsedTime}
          errors={errors}
          timeRemaining={timeRemaining}
          accuracy={getAccuracy(typedChars, errors)}
          speedArray={speedArray}
        />
      </div>
    </div>
  );
};

export default LiveResults;
