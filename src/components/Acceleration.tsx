import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";
import { demoWords } from "../utils/utils";
import { getGrossWPM, getNetWPM } from "./LiveResults/utils";

const Acceleration = () => {
  const { typedChars, numberChars, startTime, gameState } = useContext(GlobalContext) as GlobalContextType;
  const [lastTyped, setLastTyped] = useState<string>("");
  const [numberTyped, setNumberTyped] = useState<number[]>([]);
  const [speedCheck, setSpeedCheck] = useState<number>(0);
  const [currentSpeed, setCurrentSpeed] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (
      (speedCheck > 5 && numberChars >= numberTyped[speedCheck - 6]) ||
      (speedCheck <= 5 && numberChars >= numberTyped[speedCheck - 1])
    ) {
      const lettersToCheck =
        speedCheck > 4
          ? typedChars.slice(numberTyped[speedCheck - 6], numberChars)
          : typedChars.slice(numberTyped[speedCheck], numberChars);
      const correctLettersToCheck = demoWords.slice(
        speedCheck > 4 ? numberTyped[speedCheck - 6] : numberTyped[speedCheck],
        numberChars
      );
      console.log({ lettersToCheck, speedCheck });

      let corr = 0;
      let err = 0;

      lettersToCheck.split("").forEach((el, i) => {
        el == correctLettersToCheck[i] ? corr++ : err++;
      });

      setCurrentSpeed(getGrossWPM(corr, 2.5));
    } else {
      setCurrentSpeed(0);
    }
    console.log(numberChars);
    console.log(numberTyped[speedCheck - 1]);
    setLastTyped(typedChars);
    setNumberTyped((prev) => [...prev, typedChars.length]);
    console.log(numberTyped);
  }, [speedCheck]);

  useEffect(() => {
    if (gameState == "run") {
      console.log("running");
      intervalRef.current = setInterval(() => {
        // const currentTime = new Date();
        // const elapsedTime = currentTime.getTime() - startTime.getTime();

        // setSpeedCheck(elapsedTime);
        setSpeedCheck((prev) => prev + 1);
      }, 500);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState == "finish" && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [gameState]);

  return <div className="border-2 border-orange-500 w-20 py-4 text-center">{currentSpeed}</div>;
};

export default Acceleration;
