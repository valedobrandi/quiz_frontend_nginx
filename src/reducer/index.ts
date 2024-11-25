import { IAction } from "../interfaces/IAction";
import { IInitialState } from "../interfaces/IInitialState";

export default function reducer(
  state: IInitialState,
  action: IAction
): IInitialState {
  switch (action.type) {
    case "setNickname":
      let username = action.payload
      if (action.payload.trim() === '') username = "player"
      return { ...state, username: username};
    case "success":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "refreshQuestion":
      return {
        ...state,
        questions: state.questions.concat(action.payload),
      };
    case "fail":
      return { ...state, status: "error" };
    case "BONUS":
      let time;
      switch (action.payload) {
        case 1:
          time = 30;
          break
        case 2:
          time = 60;
          break
        case 3:
          time = 90;
          break
        case 4:
          time = 120;
          break
        default:
          time = 0;
          break
      }
      return { ...state, seconds: state.seconds + time, sequence: 0, bonus: state.bonus + 1 };
    case "start":
      return { ...state, status: "start", seconds: 30 * 2 };
    case "finished":
      return {
        ...state,
        questions: [],
        status: "loading",
        index: 0,
        answer: null,
        points: 0,
        seconds: 0,
      };
    case "answer": {
      return {
        ...state,
        answer: Number(action.payload),
        nextQuestion: state.nextQuestion + 1,
      };
    }
    case "nextQuestion": {
      const { answer } = state;
      let answerPoints = 0;
      let sequence = 0;
      if (action.payload === answer) answerPoints = 1;
      if (action.payload === answer) sequence = state.sequence + 1;
      const categoryName = state.questions[state.index].category;

      const getCategoryAndPoint = {
        ...state.categories,
        [categoryName]: (state.categories[categoryName] || 0) + answerPoints,
      };
      
      return {
        ...state,
        categories: { ...state.categories, ...getCategoryAndPoint },
        index: state.index + 1,
        answer: null,
        points: state.points + answerPoints,
        sequence
      };
    }
    case "restartQuiz":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: "start",
        seconds: 60 * 4,
      };
    case "tick":
      return { ...state, seconds: state.seconds - 1 };
    default:
      return state;
  }
}
