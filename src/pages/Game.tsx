import { useContext, useEffect } from "react";
import LiveResults from "../components/LiveResults/LiveResults";
import Words from "../components/Words";
import useTimer from "../hooks/useTimer";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";
import { generateWords } from "../utils/utils";

const Game = () => {
  const wordsPerLevel: number = 20;
  const {
    gameState,
    setGameState,
    setCurrentWords,
    currentWords,
    allWords,
    setAllWords,
    numberChars,
    setTypedChars,
    setNumberChars,
  } = useContext(GlobalContext) as GlobalContextType;
  const { timeRemaining, startTimer, resetTimer, counter } = useTimer(30);

  useEffect(() => {
    setAllWords((prev) => prev + currentWords);
  }, [currentWords, setAllWords]);

  useEffect(() => {
    if (allWords.length == numberChars) {
      setCurrentWords(generateWords(wordsPerLevel));
    }
  }, [numberChars, allWords, setCurrentWords]);

  useEffect(() => {
    timeRemaining == 0 && setGameState("finish");
  }, [timeRemaining, setGameState]);

  useEffect(() => {
    gameState === "run" && startTimer();
    // gameState === "finish"

    if (gameState === "reset") {
      resetTimer();
      setAllWords("");
      setTypedChars("");
      setNumberChars(0);
      setGameState("start");
    }
  }, [gameState, resetTimer, startTimer, setAllWords, setNumberChars, setGameState, setTypedChars]);

  return (
    <div className="bg-black w-screen h-screen items-center  text-gray-300 font-mono">
      <div className="w-full h-[120px] flex items-center justify-center text-4xl tracking-widest text-white font-sans">
        TYPE TEST
      </div>
      <div className="flex items-center w-full h-[calc(100%-120px)] mt-16 flex-col gap-20">
        <LiveResults timeRemaining={timeRemaining} counter={counter} />
        <Words />
      </div>
    </div>
  );
};

export default Game;
