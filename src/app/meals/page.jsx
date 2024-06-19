import MealsCard from "../Components/MealsCard/MealsCard";
import { getMeals } from "../Hooks/getMeals";

const page = async () => {
  const meals = await getMeals();

  return (
    <div className="grid grid-cols-3 gap-4">
      {meals?.categories?.map((meal) => (
        <MealsCard key={meal.idCategory} meal={meal} />
      ))}
    </div>
  );
};

export default page;
