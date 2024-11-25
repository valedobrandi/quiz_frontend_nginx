import { useEffect, useState } from "react";
import { IAction } from "../interfaces/IAction";
import { useNavigate } from "react-router-dom";
import { ICategoryPoints } from "../interfaces/IInitialState";
import ExtendTimeAnimation from "./ExtendTimeAnimation";
import { HTTP } from "../endPoints";
import { IQuestion } from "../interfaces/IQuestions";

type TimerPropsType = {
  dispatch: React.Dispatch<IAction>;
  seconds: number;
  categories: ICategoryPoints;
  points: number;
  username: string;
  timerExtendValue: number;
  bonusValue: number;
  questions: IQuestion[];
  index: number;
};
export default function Timer({
  dispatch,
  seconds,
  categories,
  points,
  username,
  bonusValue: levelup,
  questions,
  index
}: TimerPropsType) {
  const [showAnimation, setShowAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const httpPostScore = async () => {
      const response = await fetch(`${HTTP.QUIZ_BACKEND}/ranking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, score: points }),
      });
      if (response.ok) {
        console.log("score registered with successfully");
      }
    };

    const handleFinish = async () => {
      if (
        seconds === 0 ||
        questions.length === (index + 1)
      ) {
        await httpPostScore();
        dispatch({ type: "finished", payload: null });
        navigate("/finish", { state: { categories, points } });
      }
    };

    handleFinish();
    const id = setInterval(() => {
      dispatch({ type: "tick", payload: null });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch, seconds]);

  useEffect(() => {
    if (levelup > 0) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000); // Duração da animação em milissegundos
      return () => clearTimeout(timer);
    }
  }, [levelup]);


  return (
    <div className="flex items-center badge">
      <div className="text-center flex items-center">
        <img className="h-7 mr-2 md:mr-4" src="timer.svg" alt="statistics picture" />
        <p className="countdown font-mono md:text-3xl text-2xl text-red-800">{seconds}</p>
      </div>
      {showAnimation ? <ExtendTimeAnimation timerExtendValue={12 * levelup} /> : <p className="absolute"></p>}
    </div>
  );
}
