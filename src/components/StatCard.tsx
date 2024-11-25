import React from "react";

interface StatCardProps {
  title: string;
  value: number;
  index: number;
}

const backgroundColor = [
  "css-points-container-background-color ml-1",
  "css-ranking-container-background-color mr-1",
];

const StatCard: React.FC<StatCardProps> = ({ title, value, index }) => {

  const getBackgroundColor =
    index % 2 === 0 ? backgroundColor[0] : backgroundColor[1];

  const pix =(value * 12) + 120;

  const windowWidth = window.innerWidth;
  const styledSize = windowWidth < 400 ? `${pix}px` : `${pix}px`;
  return (
    <div
      className={`${getBackgroundColor} rounded-full m-auto flex justify-center item-center 
        flex-col text-white`}
      style={{ width: `${styledSize}`, height: `${styledSize}` }}
    >
      <span
        className="stat-title font-black uppercase 
      whitespace-normal leading-3 text-sm
      text-center text-black truncate p-2 "
      >
        {/* <div className="inline text-lg mr-2 text-center">{icon}</div> */}
        {title}
      </span>
      <span className="stat-value overflow-hidden text-center mt-2">
        {value}
      </span>
      {/*       <span
        className="stat-desc whitespace-normal 
      text-center opacity-100 text-gray-200"
      >
        {description}
      </span> */}
    </div>
  );
};

export default StatCard;
