import { useState } from "react";
import { ICategoryPoints } from "../interfaces/IInitialState";


function useCategory(categories: ICategoryPoints) {
  const [categoryList, _] = useState<ICategoryPoints>(categories);


  const calculateTotalPoints = (): number => {
    return Object.keys(categoryList).reduce((prev, cur) => categoryList[cur] + prev, 0);
  };

  return { categoryList, calculateTotalPoints };
}

export default useCategory;
