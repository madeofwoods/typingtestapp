import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (seconds: number) => {
  const [timeRemaining, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const startTimer = useCallback(() => {
    console.log("starting timer");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetTimer = useCallback(() => {
    console.log("reset timer");

    intervalRef.current && clearInterval(intervalRef.current);

    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!timeRemaining && intervalRef.current) {
      console.log("clear timer");
      clearInterval(intervalRef.current);
    }
  }, [timeRemaining, intervalRef]);

  return { timeRemaining, startTimer, resetTimer };
};

export default useTimer;
