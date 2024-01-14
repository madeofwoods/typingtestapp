import { createContext, useMemo, useState } from "react";

export type gameStateType = "start" | "run" | "finish";

export type GlobalContextType = {
  typedChars: string;
  setTypedChars: React.Dispatch<React.SetStateAction<string>>;
  numberChars: number;
  setNumberChars: React.Dispatch<React.SetStateAction<number>>;
  gameState: gameStateType;
  setGameState: React.Dispatch<React.SetStateAction<gameStateType>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [typedChars, setTypedChars] = useState<string>("");
  const [numberChars, setNumberChars] = useState<number>(typedChars.length);
  const [gameState, setGameState] = useState<gameStateType>("start");

  const store = useMemo(
    () => ({
      typedChars,
      setTypedChars,
      numberChars,
      setNumberChars,
      gameState,
      setGameState,
    }),
    [typedChars, numberChars, gameState]
  );
  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
