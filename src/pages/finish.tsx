import Ranking from "../components/Ranking";
import { useEffect, useState } from "react";
import ToggleView from "../components/ToggleView";
import PerformanceOverview from "../components/PerformanceOverview";
import CategoryLeaderboard from "../components/CategoryLeaderboard";
import HeaderSection from "../components/HeaderSection";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { HTTP } from "../endPoints";

type FinishProps = {
  username: string | null;
};

function Finish({ username }: FinishProps) {
  const [toggleView, setToggleView] = useState(true);
  const [ranking, setRanking] = useState<{ username: string; score: number }[]>(
    [{ username: "", score: 0 }]
  );
  const location = useLocation();
  const { categories, points } = location.state || {};

  useEffect(() => {
    const httpGetRanking = async () => {
      const response = await fetch(`${HTTP.QUIZ_BACKEND}/ranking`);
      const data = await response.json();
      setRanking(data);
      if (response.ok) {
        console.log("ranking fetched successfully");
      }
    };
    httpGetRanking();
  }, []);

  useEffect(() => {
    const scrollToCenter = () => {
      if (!toggleView) {
        const centerY =
          (document.documentElement.scrollHeight - window.innerHeight) / 2;
        window.scrollTo({ top: centerY, behavior: "smooth" });
      }
    };
    scrollToCenter();
  }, [toggleView]);
  const sortRaking = ranking.sort((a, b) => b.score - a.score);

  const getRanking = sortRaking.findIndex(
    (user) => user.username === username && user.score === Number(points)
  );

  return (
    <>
      <PerformanceOverview points={points} userRanking={getRanking + 1} />
      <div className="flex flex-wrap items-center gap-6 p-4 mt-4">
        <ToggleView setToggleView={() => setToggleView(!toggleView)} />
        <Link
          className="btn btn-active gap-2 bg-[#641ae6] text-[#f1f3f5] uppercase"
          to={"/quiz"}
        >
          Try Again
          <img src="icons8-arrow-48.png" alt="arrow right picture" />
        </Link>
      </div>
      <section className="flex flex-col justify-center mt-10">
        {toggleView && (
          <div>
            <HeaderSection
              altText="trophy image"
              headerText="Leaderboard Standings"
              imageSrc="trophy-svgrepo-com.svg"
            />
            <Ranking ranking={sortRaking.slice(0, 15)} />
          </div>
        )}
        {!toggleView && (
          <div>
            <HeaderSection
              altText="computer image"
              headerText="Tech Bubble"
              imageSrc="chart-graph-svgrepo-com.svg"
            />
            <CategoryLeaderboard categories={categories} />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Finish;
