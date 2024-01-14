export const getGrossWPM = (numChar: number, time: number) => numChar / (5 * time);

export const getNetWPM = (numChar: number, time: number, numErrors: number) => (numChar / 5 - numErrors) / time;
