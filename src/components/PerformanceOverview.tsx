import { ScoreBadge } from "./ScoreBadge";

type PerformanceOverviewProps = {
  points: number;
  userRanking: number;
};

function PerformanceOverview({ points, userRanking }: PerformanceOverviewProps) {
  const renderScore = "0000";

  const scoreLength = points.toString().length;
  const formateScore = renderScore.slice(scoreLength) + points;
  return (
    <div
      className="badge bg-[#242933] h-fit flex flex-wrap
    items-center gap-4 p-4 mx-1 md:m-0 md:flex-nowrap"
    >
      <h2 className="w-full md:text-2xl text-md 
      tracking-widest font-Coiny text-center text-blue-600">
        Performance Overview
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="flex gap-6 items-center">
          <ScoreBadge
            style="badge badge-error p-7 items-center tracking-wider"
            image="ranking-crown-svgrepo-com.svg"
            title="Ranking:"
            value={userRanking}
          />
          <p
            className="
                [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]
                pressStart text-yellow-400 text-2xl"
          >
            {formateScore}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceOverview;
