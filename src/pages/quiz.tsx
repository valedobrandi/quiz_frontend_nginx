import Options from "../components/Options";
import Button from "../components/Button";
import Progress from "../components/Progress";
import reducer from "../reducer/index";
import { initialState } from "../reducer/store";
import isRender from "../utils/isRender";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useEffect, useReducer, useRef } from "react";
import { HTTP } from "../endPoints";

type QuizPropsType = {
  setUsername: React.Dispatch<any>;
  username: string | null;
};

function Quiz({ setUsername, username }: QuizPropsType) {
  const [
    {
      status,
      questions,
      categories,
      index,
      answer,
      points,
      seconds,
      nextQuestion,
      sequence,
      bonus,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const userRef = useRef("");

  const fetchQuestions = async (action: string) => {
    try {
      const questions = await fetch(`${HTTP.QUIZ_BACKEND}/quiz`);
      const data = await questions.json();

      dispatch({ type: action, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "fail", payload: null });
    }
  };

  useEffect(() => {
    fetchQuestions("success");
  }, []);

  useEffect(() => {
    if ((questions.length - index) < 5) {
      fetchQuestions("refreshQuestion");
    }
  }, [index]);


  useEffect(() => {
    if (nextQuestion === 0) return;
    const timeoutId = setTimeout(() => {
      dispatch({
        type: "nextQuestion",
        payload: questions[index].correct_answers,
      });
    }, 1000);


    return () => clearTimeout(timeoutId);

  }, [nextQuestion]);

  return (
    <div className="my-12">
      {isRender(status, "loading") && <Loader />}
      {isRender(status, "error") && <Error />}
      {isRender(status, "ready") && (
        <div className="m-8 text-center">
          <h1 className="font-Nunito md:text-4xl text-2xl font-black m-8 text-center">
            You have 60 seconds to answer how many question you can.
          </h1>
          <div className="flex flex-col items-center">
            {!username && (
              <input
                onChange={({ target }) => (userRef.current = target.value)}
                type="text"
                placeholder="type your nickname ..."
                className="input input-bordered input-warning w-full max-w-xs m-4"
              />
            )}

            <Button
              style="btn btn-active btn-lg md:text-lg"
              setClick={() => (
                dispatch({ type: "start", payload: null }),
                setUsername({ type: "setNickname", payload: userRef.current })
              )}
              title={"Start Quiz"}
            />

          </div>
        </div>
      )}
      {isRender(status, "finish") && (
        <div className="m-8 text-center">
          <h1 className="font-Nunito md:text-4xl text-2xl font-black m-8 text-center">
            You have 2 minutes to answer how many question you can.
          </h1>
          <Button
            style="btn btn-active btn-lg md:text-lg"
            title={"Restart Quiz"}
            setClick={() => dispatch({ type: "restartQuiz", payload: null })}
          />
        </div>
      )}
      {isRender(status, "start") && (
        <div className="m-6">
          <div className="mx-auto">
            <Progress
              username={username || "player"}
              categories={categories}
              seconds={seconds}
              dispatch={dispatch}
              index={index}
              points={points}
              sequence={sequence}
              bonus={bonus}
              questions={questions}
            />
            <div>
              <h4
                className="terminal-box p-4 md:text-2xl w-full 
              justify-start h-full text-xl mb-4 text-center"
              >
                {questions[index].question}
              </h4>
            </div>
            <div className="options">
              <Options
                dispatch={dispatch}
                answerOptions={questions[index].answers}
                correctAnswer={Number(questions[index].correct_answers)}
                answer={answer}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
