export const getGrossWPM = (numChar: number, time: number) => Number(((numChar * 60) / (5 * time)).toFixed(2));

export const getNetWPM = (numChar: number, time: number, numErrors: number): number => {
  const wpm: number = Number((((numChar / 5 - numErrors / 3) * 60) / time).toFixed(2));

  return wpm > 0 ? wpm : 0;
};

export const calculateErrors = (actual: string, typed: string): number => {
  return typed.split("").reduce((prev, curr, index) => {
    curr !== actual[index] && prev++;
    return prev;
  }, 0);
};

export const getSpeed = (speedArray: number[], index: number, speedBarHeight: number): number => {
  const speed: number = speedArray[speedArray.length - index];
  const adjustedSpeed: number = (speed * speedBarHeight) / 140;
  return Math.min(Math.max(adjustedSpeed, 0), speedBarHeight);
};

export const getAccuracy = (typedChars: string, errors: number): number => {
  const numberTyped: number = typedChars.length;
  if (numberTyped == 0) return 0;
  if (errors == 0) return 100;
  else {
    return Math.round(((numberTyped - errors) / numberTyped) * 100);
  }
};
