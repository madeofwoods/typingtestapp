import { createContext, useMemo, useState } from "react";

export type gameStateType = "start" | "run" | "finish";

export type GlobalContextType = {
  typedChars: string;
  setTypedChars: React.Dispatch<React.SetStateAction<string>>;
  numberChars: number;
  setNumberChars: React.Dispatch<React.SetStateAction<number>>;
  gameState: gameStateType;
  setGameState: React.Dispatch<React.SetStateAction<gameStateType>>;
  startTime: Date;
  setStartTime: React.Dispatch<React.SetStateAction<Date>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [typedChars, setTypedChars] = useState<string>("");
  const [numberChars, setNumberChars] = useState<number>(typedChars.length);
  const [gameState, setGameState] = useState<gameStateType>("start");
  const [startTime, setStartTime] = useState<Date>(new Date());

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
    }),
    [typedChars, numberChars, gameState, startTime]
  );
  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
