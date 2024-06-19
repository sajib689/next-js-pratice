import { getMeals } from "@/app/Hooks/getMeals";
import Image from "next/image";

const MealsCard =async ({meal}) => {
    // const meals =await getMeals()
    // const mealFind =await meals.find(meal => meal.idCategory === parseFloat(params.idCategory))
    const {strCategory,strCategoryThumb,strCategoryDescription} = meal
    return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
        width={350}
        height={350}
          src={strCategoryThumb}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strCategory}</h2>
        <p>{strCategoryDescription.slice(0,100)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    
  );
};

export default MealsCard;
