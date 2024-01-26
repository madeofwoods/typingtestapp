import { createContext, useMemo, useState } from "react";

export type gameStateType = "start" | "run" | "finish" | "reset";
export type dashboardType = 1 | 2;

export type GlobalContextType = {
  typedChars: string;
  setTypedChars: React.Dispatch<React.SetStateAction<string>>;
  numberChars: number;
  setNumberChars: React.Dispatch<React.SetStateAction<number>>;
  gameState: gameStateType;
  setGameState: React.Dispatch<React.SetStateAction<gameStateType>>;
  startTime: Date;
  setStartTime: React.Dispatch<React.SetStateAction<Date>>;
  currentWords: string;
  setCurrentWords: React.Dispatch<React.SetStateAction<string>>;
  allWords: string;
  setAllWords: React.Dispatch<React.SetStateAction<string>>;
  gameLength: number;
  setGameLength: React.Dispatch<React.SetStateAction<number>>;
  dashboard: dashboardType;
  setDashboard: React.Dispatch<React.SetStateAction<dashboardType>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [typedChars, setTypedChars] = useState<string>("");
  const [numberChars, setNumberChars] = useState<number>(typedChars.length);
  const [gameState, setGameState] = useState<gameStateType>("start");
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [currentWords, setCurrentWords] = useState<string>("");
  const [allWords, setAllWords] = useState<string>("");
  const [gameLength, setGameLength] = useState<number>(30);
  const [dashboard, setDashboard] = useState<dashboardType>(1);

  const store = useMemo(
    () => ({
      typedChars,
      setTypedChars,
      numberChars,
      setNumberChars,
      gameState,
      setGameState,
      startTime,
      setStartTime,
      currentWords,
      setCurrentWords,
      allWords,
      setAllWords,
      gameLength,
      setGameLength,
      dashboard,
      setDashboard,
    }),
    [typedChars, numberChars, gameState, startTime, currentWords, allWords, gameLength, dashboard]
  );
  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
