"use client";

import ReviewCard from "@/components/cards/ReviewsCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false)
      });
  }, []);

  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Reviews <span className="text-orange-600">{reviews.length}</span>{" "}
        Founds.
      </h2>
      <div className="grid my-5 grid-cols-3 gap-5 max-w-7xl mx-auto">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
