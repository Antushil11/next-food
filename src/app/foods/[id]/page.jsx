// page.jsx  (JavaScript version)
import React from "react";

const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("Error fetching food:", error);
    return null;
  }
};

function FoodDetailsSkeleton() {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-3/4 mb-8"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="aspect-square bg-gray-200 rounded-2xl"></div>
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          <div className="pt-6 border-t">
            <div className="h-10 bg-gray-200 rounded w-48"></div>
          </div>
          <div className="flex gap-4 pt-4">
            <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
            <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function FoodDetailsPage({ params }) {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-600">Food Not Found 😔</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={food.foodImg}
              alt={food.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold 00 mb-2">
                {food.title}
              </h1>
              <p className="text-lg ">
                {food.category} • {food.area}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold text-green-600">
                ${food.price}
              </div>
              <div className="text-sm ">per serving</div>
            </div>

            {food.description && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {food.description}
                </p>
              </div>
            )}

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
              >
                ▶ Watch Recipe Video on YouTube
              </a>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl transition text-lg">
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold py-4 rounded-2xl transition text-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}