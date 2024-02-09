import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (seconds: number) => {
  const [timeRemaining, setTimeRemaining] = useState(seconds);
  const [counter, setCounter] = useState(0);
  const milisecondsRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    //milisecs added
    milisecondsRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 200);
  }, [setCounter]);

  const resetTimer = useCallback(() => {
    //milisecs added
    milisecondsRef.current && clearInterval(milisecondsRef.current);

    setTimeRemaining(seconds);
    //milisecs added
    setCounter(0);
  }, [seconds]);

  useEffect(() => {
    if (counter % 5 == 0 && counter > 0) {
      setTimeRemaining((timeLeft) => timeLeft - 1);
    }
  }, [counter]);

  useEffect(() => {
    if (!timeRemaining && milisecondsRef.current) {
      //milisecs added
      clearInterval(milisecondsRef.current);
    }
  }, [timeRemaining, milisecondsRef]);

  return { timeRemaining, startTimer, resetTimer, counter, setTimeRemaining };
};

export default useTimer;
