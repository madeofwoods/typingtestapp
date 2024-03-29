import { useContext, useEffect, useState } from "react";
import { GlobalContext, GlobalContextType } from "../../context/GlobalContextProvider";
import { calculateErrors, getAccuracy, getGrossWPM, getNetWPM } from "./utils";
import FullDashboard from "../FullDashboard";
import MobileDashboard from "../MobileDashboard";

const LiveResults = ({ timeRemaining, counter }: { timeRemaining: number; counter: number }) => {
  const { typedChars, numberChars, startTime, allWords, gameState } = useContext(GlobalContext) as GlobalContextType;
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [numberTyped, setNumberTyped] = useState<number[]>([]);
  const [speedArray, setSpeedArray] = useState<number[]>([0, 0, 0, 0, 0]);
  const [liveWPM, setLiveWPM] = useState<number>(0);
  const [counterCheck, setCounterCheck] = useState<number>(0);

  //update wpm every second, or whenever a char is typed or deleted
  useEffect(() => {
    setLiveWPM(getNetWPM(typedChars.length, elapsedTime, errors));
  }, [elapsedTime, typedChars, errors]);

  //reset the speedbar
  useEffect(() => {
    if (gameState == "reset") {
      setNumberTyped([]);
      setSpeedArray([0, 0, 0, 0, 0]);
      setCounterCheck(0);
    }
  }, [gameState]);

  // updating and storing the speed over the last second, updating every 0.2s (counter)
  // use counterCheck to only trigger this logic when when counter changes

  useEffect(() => {
    if (counterCheck < counter) {
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
      setCounterCheck((prev) => prev + 1);
    }
  }, [allWords, counter, counterCheck, numberChars, numberTyped, typedChars]);

  //calculte an accurate length of time that the game has been running
  useEffect(() => {
    const currentTime = new Date();
    setElapsedTime((currentTime.getTime() - startTime.getTime()) / 1000);

    setErrors(calculateErrors(allWords, typedChars));
  }, [typedChars, startTime, timeRemaining, allWords]);

  return (
    <div className=" w-full flex-4 mb-0">
      <MobileDashboard wpm={liveWPM} timeRemaining={timeRemaining} elapsedTime={elapsedTime} errors={errors} />
      <FullDashboard
        typedChars={typedChars}
        elapsedTime={elapsedTime}
        errors={errors}
        timeRemaining={timeRemaining}
        accuracy={getAccuracy(typedChars, errors)}
        speedArray={speedArray}
        wpm={liveWPM}
        counter={counter}
      />
    </div>
  );
};

export default LiveResults;
