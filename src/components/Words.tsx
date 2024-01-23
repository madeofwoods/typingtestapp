import { useCallback, useContext, useEffect, useState } from "react";
import { demoWords, isCorrect, isIncorrect, isIncorrectSpace } from "../utils/utils";
import classNames from "classnames";
import { gameStateType } from "../pages/Game";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";

type WordsProps = {
  gameState: gameStateType;
  setGameState: React.Dispatch<React.SetStateAction<gameStateType>>;
};

const Words = ({ gameState, setGameState }: WordsProps) => {
  const { typedChars, setTypedChars, setNumberChars, setStartTime, currentWords } = useContext(
    GlobalContext
  ) as GlobalContextType;
  const [currentTyped, setCurrentTyped] = useState<string>("");

  const keydownHandler = useCallback(
    (e: KeyboardEvent): void => {
      if (gameState === "finish") return;
      if (gameState === "start") {
        setGameState("run");
        setStartTime(new Date());
      }
      switch (e.key) {
        case "Backspace":
          setTypedChars((prev) => prev.slice(0, -1));
          setCurrentTyped((prev) => prev.slice(0, -1));
          break;
        case "Shift":
          break;
        default:
          setTypedChars((prev) => prev + e.key);
          setCurrentTyped((prev) => prev + e.key);
      }
    },
    [gameState, setGameState, setTypedChars, setStartTime]
  );

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  useEffect(() => {
    setNumberChars(typedChars.length);
  }, [setNumberChars, typedChars]);

  useEffect(() => {
    setCurrentTyped("");
    console.log(currentWords);
  }, [currentWords]);

  useEffect(() => {
    console.log({ currentTyped, currentWords });
  }, [currentTyped, currentWords]);

  return (
    <div id="wordsContainer" className=" w-[800px] pl-[40px] mt-14">
      <div className="text-2xl w-[760px] tracking-normal leading-relaxed whitespace-break-spaces">
        {currentWords
          .split("")
          .map((char) => (char === " " ? " " : char))
          .map((char, index) => (
            <span
              key={`${char}_${index}`}
              className={`${classNames({
                "text-purple-500": isCorrect(char, index, currentTyped, currentTyped.length),
                "text-pink-600": isIncorrect(char, index, currentTyped, currentTyped.length),
                "bg-pink-600/50": isIncorrectSpace(char, index, currentTyped, currentTyped.length),
                "animate-caret": index == currentTyped.length,
              })} `}
            >
              {char}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Words;
