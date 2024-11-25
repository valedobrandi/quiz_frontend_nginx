import { IQuestion } from "./IQuestions";

export interface ICategoryPoints {
  [key: string]: number;
}

export interface IInitialState {
  questions: IQuestion[] | [];
  categories: ICategoryPoints;
  status: string;
  index: number;
  answer: null | number;
  points: number;
  seconds: number;
  username: null | string;
  nextQuestion: number;
  sequence: number;
  bonus: number;
}