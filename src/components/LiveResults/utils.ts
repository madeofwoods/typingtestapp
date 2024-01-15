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
