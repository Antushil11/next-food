import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );

  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

const Foods = async () => {
  const food = await getFoods();
  return (
    <div>
      <h2 className="text-4xl font-bold">
        Food <span className="text-orange-600">{food.length}</span> Founds.
      </h2>
      <div className="grid my-5 grid-cols-3 gap-5 max-w-7xl mx-auto">
        {
            food.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
        }

      </div>
    </div>
  );
};

export default Foods;
