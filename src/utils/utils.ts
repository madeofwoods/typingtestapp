import { faker } from "@faker-js/faker";

export const demoWords: string =
  "Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thankyou very much. They were the last people you’d expect to be involved in anything strange or mysterious, because they just didn’t hold with such nonsense. ";

export const generateWords = (count: number): string => {
  let output = "";
  for (let i = 0; i < count; i++) {
    output += faker.word.noun() + " ";
  }
  return output;
};

export const isCorrect = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char === typedChars[index] && char != " ";
};

export const isIncorrect = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char !== typedChars[index] && char != " ";
};

export const isIncorrectSpace = (char: string, index: number, typedChars: string, numberChars: number): boolean => {
  return index < numberChars && char !== typedChars[index] && char == " ";
};
