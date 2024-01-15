import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";
import { demoWords } from "../utils/utils";

const Acceleration = () => {
  const { typedChars, numberChars, startTime, gameState } = useContext(GlobalContext) as GlobalContextType;
  const [lastTyped, setLastTyped] = useState<string>("");
  const [numberTyped, setNumberTyped] = useState<number>(lastTyped.length);
  const [active, setActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    console.log("hi");
    if (gameState == "run" && !active) {
      setActive(true);
      console.log("running");
      intervalRef.current = setInterval(() => {
        const currentTime = new Date();
        const elapsedTime = currentTime.getTime() - startTime.getTime();
        console.log(elapsedTime);

        const numCharsVar = numberChars;
        console.log(numCharsVar);

        if (numberChars > numberTyped) {
          const lettersToCheck = typedChars.slice(numberTyped, numberChars);

          console.log(lettersToCheck);
        }
        setLastTyped(typedChars);
        setNumberTyped(lastTyped.length);
      }, 500);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState == "finish" && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [gameState]);

  return <div className="border-2 border-orange-500 w-20 py-4 text-center">XXX</div>;
};

export default Acceleration;
