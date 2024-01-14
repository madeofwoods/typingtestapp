import { useCallback, useContext, useEffect } from "react";
import { demoWords, isCorrect, isIncorrect, isIncorrectSpace } from "../utils/utils";
import classNames from "classnames";
import { gameStateType } from "../pages/Game";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";

type WordsProps = {
  gameState: gameStateType;
  setGameState: React.Dispatch<React.SetStateAction<gameStateType>>;
};

const Words = ({ gameState, setGameState }: WordsProps) => {
  const { typedChars, setTypedChars, numberChars, setNumberChars } = useContext(GlobalContext) as GlobalContextType;

  const keydownHandler = useCallback(
    (e: KeyboardEvent): void => {
      if (gameState === "finish") return;
      if (gameState === "start") {
        setGameState("run");
      }
      switch (e.key) {
        case "Backspace":
          setTypedChars((prev) => prev.slice(0, -1));
          break;
        case "Shift":
          break;
        default:
          setTypedChars((prev) => prev + e.key);
      }
    },
    [gameState, setGameState, setTypedChars]
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

  return (
    <div id="wordsContainer">
      <div className="text-2xl w-[720px] tracking-normal leading-relaxed whitespace-break-spaces">
        {demoWords
          .split("")
          .map((char) => (char === " " ? " " : char))
          .map((char, index) => (
            <span
              key={`${char}_${index}`}
              className={`${classNames({
                "text-green-500": isCorrect(char, index, typedChars, numberChars),
                "text-red-500": isIncorrect(char, index, typedChars, numberChars),
                "bg-red-500/50": isIncorrectSpace(char, index, typedChars, numberChars),
                // " border-l-white border-l": index == numberChars,
                // "border-l-red-100/0 border-l": index != numberChars,
                // "animate-flash": index == numberChars,
                "animate-caret": index == numberChars,
                // "underline underline-offset-16": index == numberChars,
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
