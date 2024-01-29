import { faker } from "@faker-js/faker";

export const generateWords = (count: number): string => {
  let output = "";
  for (let i = 0; i < count; i++) {
    output += faker.word.noun() + " ";
  }
  return output;
};

export const isKeyboardCodeAllowed = (code: string) => {
  return code.startsWith("Key") || code === "Backspace" || code === "Space" || code == "Minus";
};

// helpers for changing colour of text

export const isCorrect = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char === typedChars[index] && char != " ";
};

export const isIncorrect = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char !== typedChars[index] && char != " ";
};

export const isIncorrectSpace = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char !== typedChars[index] && char == " ";
};
