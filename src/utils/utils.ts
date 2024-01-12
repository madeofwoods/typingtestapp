export const demoWords: string = "This is a demo sentence just to get me started. We will see how it goes. ";

export const isCorrect = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char === typedChars[index] && char != " ";
};

export const isIncorrect = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char !== typedChars[index] && char != " ";
};

export const isIncorrectSpace = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char !== typedChars[index] && char == " ";
};
