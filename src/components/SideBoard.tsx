import React from 'react';
import { Link } from 'react-router-dom';

interface SideBoardProps {
    title: string;
    description: string;
    buttonText: string;
  }

const SideBoard: React.FC<SideBoardProps> = ({title, description, buttonText,}) => {
  return (
    <div className="mb-24 md:mb-0">
      <h1 className="md:text-4xl text-[#a6adba] text-center md:text-left font-Nunito font-extrabold p-2">
        {title}
      </h1>
      <p className="font-extralight text-[#1faa9f] text-center md:text-left font-medium p-2 mb-4 md:mt-16 md:text-xl ">
        {description}
      </p>
    
      <Link
        className="btn btn-active gap-2 bg-[#641ae6] text-[#f1f3f5] uppercase  mt-16"
        to={"/quiz"}
      >
        {buttonText}
        <img src="icons8-arrow-48.png" alt="arrow right picture" />
      </Link>

    </div>
  );
};

export default SideBoard;