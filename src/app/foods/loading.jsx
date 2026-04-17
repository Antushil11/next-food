// app/foods/loading.tsx
import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <FoodCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loading;