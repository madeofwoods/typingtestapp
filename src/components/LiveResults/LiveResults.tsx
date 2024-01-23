import { useContext, useEffect, useState } from "react";
import { GlobalContext, GlobalContextType } from "../../context/GlobalContextProvider";
import { demoWords } from "../../utils/utils";
import { calculateErrors, getGrossWPM, getNetWPM } from "./utils";
import FullDashboard from "../FullDashboard";

const LiveResults = ({ timeRemaining, counter }: { timeRemaining: number; counter: number }) => {
  const { typedChars, numberChars, startTime, currentWords, allWords } = useContext(GlobalContext) as GlobalContextType;
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [numberTyped, setNumberTyped] = useState<number[]>([]);
  const [speedArray, setSpeedArray] = useState<number[]>([0, 0, 0, 0, 0]);
  const [liveWPM, setLiveWPM] = useState<number>(0);

  useEffect(() => {
    setLiveWPM(getNetWPM(typedChars.length, elapsedTime, errors));
  }, [elapsedTime, typedChars, errors]);

  useEffect(() => {
    if (
      (counter > 5 && numberChars >= numberTyped[counter - 6]) ||
      (counter <= 5 && numberChars >= numberTyped[counter - 1])
    ) {
      const lettersToCheck =
        counter > 4
          ? typedChars.slice(numberTyped[counter - 6], numberChars)
          : typedChars.slice(numberTyped[counter], numberChars);
      const correctLettersToCheck = allWords.slice(
        counter > 4 ? numberTyped[counter - 6] : numberTyped[counter],
        numberChars
      );

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
    setNumberTyped((prev) => [...prev, typedChars.length]);
  }, [counter]);

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

    setErrors(calculateErrors(allWords, typedChars));
  }, [typedChars, startTime, timeRemaining]);

  return (
    <div className="">
      <div className=" w-[800px] h-[400px] mb-20">
        <FullDashboard
          typedChars={typedChars}
          elapsedTime={elapsedTime}
          errors={errors}
          timeRemaining={timeRemaining}
          accuracy={getAccuracy(typedChars, errors)}
          speedArray={speedArray}
          wpm={liveWPM}
        />
      </div>
    </div>
  );
};

export default LiveResults;
