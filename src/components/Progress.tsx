import { useEffect } from "react";
import Timer from "./Timer";
import { IAction } from "../interfaces/IAction";
import { IQuestion } from "../interfaces/IQuestions";

type ProgressPropsType = {
  dispatch: React.Dispatch<IAction>;
  index: number;
  points: number;
  seconds: number;
  categories: any;
  username: string;
  sequence: number;
  bonus: number;
  questions: IQuestion[];
};

interface LevelProgress {
  backgroundColor: { [key: number]: string };
  borderColor: { [key: number]: string };
}

export default function Progress({
  index,
  points,
  dispatch,
  seconds,
  categories,
  username,
  sequence,
  bonus,
  questions
}: ProgressPropsType) {

  useEffect(() => {
    if (sequence === 4) {
      dispatch({ type: "BONUS", payload: bonus + 1});
    }
  }, [sequence]);

  const progressStyle: LevelProgress = {
    backgroundColor: {
      1: "progress-info",
      2: "progress-warning",
      3: "progress-secondary",
    },
    borderColor: {
      1: "border-yellow-200 border-2",
      2: "border-yellow-300 border-4",
      3: "border-yellow-400 border-8",
      4: "border-yellow-500 border-8",
    },
  };

  return (
    <section>
      <div className="flex flex-row item-center md:gap-12 m-6">
        <div className="badge badge-ghost inline-flex md:text-xl p-6">
          <img
            className="h-7 mr-3 md:mr-4"
            src="question-and-answer.svg"
            alt="statistics picture"
          />
          <p className="md:text-2xl">
            <strong>{index + 1}</strong>
          </p>
        </div>
        <div className="badge badge-ghost inline-flex md:text-xl p-6">
          <img
            className="h-7 mr-2 md:mr-4"
            src="profits-statistics-svgrepo-com.svg"
            alt="statistics picture"
          />
          <p className="md:text-2xl">
            <strong>{points}</strong>
          </p>
        </div>
        <div
          className="badge badge-ghost 
       inline-flex md:text-xl p-6"
        >
          <Timer
            bonusValue={bonus}
            timerExtendValue={30 * bonus}
            username={username}
            points={points}
            dispatch={dispatch}
            seconds={seconds}
            categories={categories}
            questions={questions}
            index={index}
          />
        </div>
      </div>
      <progress
        className={`progress 
          ${progressStyle.backgroundColor[sequence]}
          ${progressStyle.borderColor[bonus]}
          md:h-5 h-3 w-full] mb-8`}
        value={sequence}
        max={3}
      ></progress>
    </section>
  );
}
