import { IInitialState } from "../interfaces/IInitialState";

export const initialState: IInitialState = {
  questions: [],
  categories: {},
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  sequence: 0,
  bonus: 0,
  seconds: 0,
  username: null,
  nextQuestion: 0,
};


