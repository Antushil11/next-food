"use client";
import React from "react";

export default function FoodCard({ food, onAddToCart, onViewDetails }) {
  return (
    <div className="max-w-sm rounded-2xl shadow-md bg-white overflow-hidden border border-gray-100 hover:shadow-xl transition">
      {/* Image */}
      <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{food.title}</h2>

        <p className="text-sm text-gray-500">Category: {food.category}</p>

        <p className="text-xl font-bold text-green-600">${food.price}</p>

        {/* Buttons */}
        <div className="flex gap-2 pt-3">
          <button
            onClick={() => onAddToCart(food)}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={() => onViewDetails(food)}
            className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
