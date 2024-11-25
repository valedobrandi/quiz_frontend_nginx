import { IAnswer } from "../interfaces/IQuestions";

type OptionsPropsType = {
  answerOptions: IAnswer;
  dispatch: any;
  correctAnswer: number;
  answer: number | null;
}


export default function Options({ answerOptions, dispatch, correctAnswer, answer }: OptionsPropsType) {
  
  return Object.values(answerOptions).filter((answerOption: string | null) => answerOption !== null)
  .map((answerOption, index) => {
      
      const isDisabled = answer !== null;
      const styleOption = index !== answer && "opacity-20";
      const applyStyleTranslate = index == answer && "translate-x-6"
      const applyStyleWrongCorrectColor = index == correctAnswer ? "badge-success" : "badge-error";
      const hoverTranslate = 'hover:translate-x-6'

      return (
        <div key={answerOption} >
          <button
            className={`badge text-lg p-4 md:text-2xl w-full h-full 
               ${applyStyleTranslate && applyStyleWrongCorrectColor}
               ${!isDisabled && hoverTranslate}
               ${isDisabled && styleOption}
               ${isDisabled && applyStyleTranslate}`}
            onClick={() => {
              dispatch({ type: "answer", payload: index });
            
            }}
            disabled={isDisabled}
          >
            {answerOption}
          </button>
        </div>
      );

    })
}
