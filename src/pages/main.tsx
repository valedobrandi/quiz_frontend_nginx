import StatCard from "../components/StatCard";
import SideBoard from "../components/SideBoard";
import SideCard from "../components/SideCard";
import { MainPageCategories } from "../files/MainPageCategories";
import Footer from "../components/Footer";

const Main: React.FC = () => {
  return (
    <>
      <main className="space-y-24 md:space-y-48 px-4">
        <section className="flex flex-col md:flex-row md:pt-24">
          <SideBoard
            title="Test Your Knowledge and Compete for the Crown"
            description="Discover how far you can go! Track your progress and
        learn."
            buttonText="Let`s Go!"
          />
          <div className="w-full md:w-[30rem] group">
            <div className="grid grid-cols-1 gap-16">
              <SideCard
                style="css-ranking-container-background-color text-center"
                styleAbsolute="absolute -top-14 "
                image="ranking-crown-svgrepo-com.svg"
                title="Rank Yourself Against Other Players"
              />
            </div>
            <SideCard
              style="css-points-container-background-color mt-16 text-center"
              styleAbsolute="absolute -top-10 -left-14 rotate-[-10deg]"
              image="profits-statistics-svgrepo-com.svg"
              title="Build Your Streak, Earn Time!"
            />
          </div>
        </section>

        <section className="">
          <div className="text-center md:mb-60 ">
            <h2 className="md:text-5xl font-black">
              Are You Ready to Test Your Tech Knowledge?
            </h2>
            <p className="md:text-xl my-8">
              Dive into a world of tech questions and track your progress with
              instant feedback. How many categories can you master? Challenge
              yourself and see how high you can score!
            </p>
          </div>
          <div className="flex flex-wrap items-center md:flex-nowrap md:pt-24 pb-40">
            <SideBoard
              title="Your Knowledge Bubble"
              description="Explore how your tech knowledge stacks up! 
              See your performance across different categories in a visual bubble chart. "
              buttonText="Build My Knowledge Grid"
            />
            <div className="flex h-fit gap-1 flex-wrap">
              {MainPageCategories.map((category, index) => {
                return (
                  <StatCard
                    index={index}
                    key={index}
                    title={category.name}
                    value={category.points}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Main;
