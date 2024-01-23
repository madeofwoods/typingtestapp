import { useContext, useEffect } from "react";
import LiveResults from "../components/LiveResults/LiveResults";
import Words from "../components/Words";
import useTimer from "../hooks/useTimer";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";
import { generateWords } from "../utils/utils";

const Game = () => {
  const wordsPerLevel: number = 15;
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
  }, [gameState, resetTimer, startTimer]);

  return (
    <div className="bg-black w-screen h-screen flex items-center justify-center text-gray-300 font-mono flex-col">
      <LiveResults timeRemaining={timeRemaining} counter={counter} />
      <Words gameState={gameState} setGameState={setGameState} />
    </div>
  );
};

export default Game;
