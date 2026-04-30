import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import Cartitems from "./[id]/Cartitems";

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
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold">
        Food <span className="text-orange-600">{food.length}</span> Founds.
      </h2>
      <div className="flex gap-5">
        <div className="flex-1 grid my-5 grid-cols-3 gap-5 ">
          {food.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-[250px] border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
            <Cartitems></Cartitems>
        </div>
      </div>
    </div>
  );
};

export default Foods;
