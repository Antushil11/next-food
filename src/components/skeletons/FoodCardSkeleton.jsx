// @/components/skeletons/FoodCardSkeleton.tsx
import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className=" max-w-7xl rounded-2xl shadow-md border border-gray-200 overflow-hidden bg-white animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-11/12"></div>

        {/* Category */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Price */}
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <div className="h-10 flex-1 bg-gray-300 rounded-lg"></div>
          <div className="h-10 flex-1 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;