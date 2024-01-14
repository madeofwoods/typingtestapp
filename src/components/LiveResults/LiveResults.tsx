import { useContext, useEffect } from "react";
import { GlobalContext, GlobalContextType } from "../../context/GlobalContextProvider";
import { Box } from "./LiveResults.styled";

const LiveResults = ({ timeRemaining }: { timeRemaining: number }) => {
  const { typedChars, numberChars } = useContext(GlobalContext) as GlobalContextType;

  return (
    <div className="w-[700px] h-48 flex items-center justify-between">
      <div className="border-2 border-slate-500 w-20 py-4 text-center">{numberChars}</div>
      <div className="border-2 border-slate-500 w-20 py-4 text-center">{timeRemaining}</div>
    </div>
  );
};

export default LiveResults;
