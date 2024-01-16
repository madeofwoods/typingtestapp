import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (seconds: number) => {
  const [timeRemaining, setTimeLeft] = useState(seconds);
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const milisecondsRef = useRef<NodeJS.Timer | null>(null);

  const startTimer = useCallback(() => {
    console.log("starting timer");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    //milisecs added
    milisecondsRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 200);
  }, [setTimeLeft]);

  const resetTimer = useCallback(() => {
    console.log("reset timer");

    intervalRef.current && clearInterval(intervalRef.current);
    //milisecs added
    milisecondsRef.current && clearInterval(milisecondsRef.current);

    setTimeLeft(seconds);
    //milisecs added
    setCounter(0);
  }, [seconds]);

  useEffect(() => {
    if (!timeRemaining && intervalRef.current && milisecondsRef.current) {
      console.log("clear timer");
      clearInterval(intervalRef.current);
      //milisecs added
      clearInterval(milisecondsRef.current);
    }
  }, [timeRemaining, intervalRef]);

  return { timeRemaining, startTimer, resetTimer, counter };
};

export default useTimer;
