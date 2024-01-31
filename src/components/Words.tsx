import { useCallback, useContext, useEffect, useState } from "react";
import { isCorrect, isIncorrect, isIncorrectSpace, isKeyboardCodeAllowed } from "../utils/utils";
import classNames from "classnames";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";

const Words = () => {
  const { typedChars, setTypedChars, setNumberChars, setStartTime, currentWords, gameState, setGameState } = useContext(
    GlobalContext
  ) as GlobalContextType;
  const [currentTyped, setCurrentTyped] = useState<string>("");
  // const inputRef = useRef(null);

  const keydownHandler = useCallback(
    (e: KeyboardEvent): void => {
      if (gameState === "finish") return;
      if (gameState === "start") {
        setGameState("run");
        setStartTime(new Date());
      }
      //only allow certain keys
      if (!isKeyboardCodeAllowed(e.code)) {
        return;
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
  }, [currentWords]);

  return (
    <div className="w-full flex flex-2 justify-center">
      <div id="wordsContainer" className=" w-[550px]  md:w-[650px] lg:w-[800px]  select-none min-h-[230px]">
        {/* bring up keyboard for mobile */}
        <input
          type="text"
          className="block sm:hidden bg-white/20 w-[550px] min-h-[230px] absolute opacity-0"
          placeholder="hello"
          value={"hello"}
          autoFocus
          // onClick={() => {inputRef.current?.focus()}}
        />
        <div className="text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] w-full tracking-normal leading-relaxed whitespace-break-spaces bg-gray-900/30 pl-[40px] pr-[20px] py-10 rounded-3xl">
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
    </div>
  );
};

export default Words;
