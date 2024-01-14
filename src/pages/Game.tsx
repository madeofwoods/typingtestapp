import { useEffect, useState } from "react";
import LiveResults from "../components/LiveResults/LiveResults";
import Words from "../components/Words";
import useTimer from "../hooks/useTimer";

export type gameStateType = "start" | "run" | "finish";

const Game = () => {
  const [gameState, setGameState] = useState<gameStateType>("start");
  const { timeRemaining, startTimer, resetTimer } = useTimer(10);

  useEffect(() => {
    timeRemaining == 0 && setGameState("finish");
  }, [timeRemaining]);

  useEffect(() => {
    console.log("gameState", gameState);
  }, [gameState]);

  useEffect(() => {
    gameState === "run" && startTimer();
    gameState === "finish";
  }, [gameState, resetTimer, startTimer]);

  return (
    <div className="bg-slate-900 w-screen h-screen flex items-center justify-center text-gray-300 font-mono flex-col">
      <LiveResults timeRemaining={timeRemaining} />
      <Words gameState={gameState} setGameState={setGameState} />
    </div>
  );
};

export default Game;
