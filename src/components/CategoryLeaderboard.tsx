import useCategory from "../customHooks/useCategory";
import { ICategoryPoints } from "../interfaces/IInitialState";
import StatCard from "./StatCard";

type CategoryLeaderboardPropsType = {
  categories: ICategoryPoints;
};

function CategoryLeaderboard({ categories }: CategoryLeaderboardPropsType) {
  const { categoryList } = useCategory(categories);
  console.log(categoryList);
  
  return (
    <ul role="list" className="flex flex-wrap w-[80%] h-[50%] m-auto mt-10">
      {categoryList &&
        Object.keys(categoryList).map((name, index) => {
          return (
            <li key={index}>
              <StatCard index={index} title={name} value={categoryList[name]} />
            </li>
          );
        })}
    </ul>
  );
}

export default CategoryLeaderboard;
