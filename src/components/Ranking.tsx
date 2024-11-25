type RankingProps = {
  ranking: { username: string; score: number }[];
};

export default function Ranking({ ranking }: RankingProps) {
  const renderScore = "0000";

  return (
    <ul role="list" className="flex flex-col">
      <div className="flex flex-wrap md:w-[50%] h-[50%] md:mx-auto">
        {ranking.map((user, index) => {
          const scoreLength = user.score.toString().length;
          const formateScore = renderScore.slice(scoreLength) + user.score;

          return (
            <li
              key={index}
              className="flex flex-wrap h-full min-h-14 min-w-full flex bg-[#1d232a] rounded-xl
              md:justify-between justify-center items-center gap-4 md:px-10 m-2 sm:py-5 "
            >
              <div
                className="flex relative justify-center 
            items-center gap-8 gap-x-4 md:my-auto"
              >
                {index === 0 && (
                  <img
                    src="ranking-crown-svgrepo-com.svg" 
                    alt="Crown"
                    className="absolute -top-6 -left-5 -rotate-[25deg] w-8 h-8"
                  />
                )}
                <p
                  className="text-md md:text-xl 
                text-center leading-6 
                [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]
                pressStart text-[#a6adba]"
                >
                  {user.username.slice(0, 12)}
                </p>
              </div>
              <p
                className="
                [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]
                pressStart text-yellow-400 md:text-2xl text-md"
              >
                {formateScore}
              </p>
            </li>
          );
        })}
      </div>
    </ul>
  );
}
