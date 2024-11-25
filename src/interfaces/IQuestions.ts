export interface IQuestion {
  id: number;
  question: string;
  description: string | null;
  answers: IAnswer;
  multiple_correct_answers: string;
  correct_answers: ICorrectAnswers;
  correct_answer: string;
  explanation: string | null;
  tip: string | null;
  tags: { name: string }[];
  category: string;
  difficulty: string;
}

export interface ICorrectAnswers {
  answer_a_correct: string;
  answer_b_correct: string;
  answer_c_correct: string;
  answer_d_correct: string;
  answer_e_correct: string;
  answer_f_correct: string;
};

export interface IAnswer {
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
  answer_e: string;
  answer_f: string;
}