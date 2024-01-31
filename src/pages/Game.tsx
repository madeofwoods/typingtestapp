import { useContext, useEffect } from "react";
import LiveResults from "../components/LiveResults/LiveResults";
import Words from "../components/Words";
import useTimer from "../hooks/useTimer";
import { GlobalContext, GlobalContextType } from "../context/GlobalContextProvider";
import { generateWords } from "../utils/utils";
import Navbar from "../components/Navbar";

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
    gameLength,
  } = useContext(GlobalContext) as GlobalContextType;
  const { timeRemaining, startTimer, resetTimer, counter, setTimeLeft } = useTimer(gameLength);

  //reset timer if game length is changed from 15 - 30 - 60 - 120
  useEffect(() => {
    resetTimer();
    setTimeLeft(gameLength);
  }, [gameLength, setTimeLeft, resetTimer]);

  //generate new block of words if first block is completed
  useEffect(() => {
    if (allWords.length == numberChars) {
      setCurrentWords(generateWords(wordsPerLevel));
    }
  }, [numberChars, allWords, setCurrentWords]);

  //update allWords if the first block is completed and another block is generated
  useEffect(() => {
    setAllWords((prev) => prev + currentWords);
  }, [currentWords, setAllWords]);

  //change game state
  useEffect(() => {
    timeRemaining == 0 && setGameState("finish");
  }, [timeRemaining, setGameState]);

  //reset game
  useEffect(() => {
    gameState === "run" && startTimer();

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
      {/* bring up keyboard for mobile */}
      <input type="text" className="block sm:hidden bg-white/20 w-full h-full absolute invisible" placeholder="hello" />
      <Navbar />
      <div className="flex items-center justify-center  sm:justify-evenly w-full h-[calc(100%-120px)] flex-col gap-4 md:gap-10 ">
        <LiveResults timeRemaining={timeRemaining} counter={counter} />
        <Words />
      </div>
    </div>
  );
};

export default Game;
