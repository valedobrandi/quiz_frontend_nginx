import React from 'react';

interface QuestionHeaderProps {
  questionsLength: number;
  children: React.ReactNode;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ questionsLength, children }) => {
  return (
    <div className="w-7xl flex flex-col justify-center items-center">
      <h3 className="font-Nunito md:text-4xl text-2xl font-black m-8 text-center">
        {questionsLength} Questions to test your knowledge!
      </h3>
      {children}
    </div>
  );
};

export default QuestionHeader;