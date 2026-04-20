"use client";
import { useState } from "react";

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(review?.likes?.length || 0);
  const [liked, setLiked] = useState(false);

  if (!review) return null;

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  const formattedDate = new Date(review.date).toLocaleDateString();

  return (
    <div className="bg-white shadow-md rounded-xl p-5 border hover:shadow-xl transition">

      {/* User */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">{review.user}</h3>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">★</span>
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-700 mb-4 line-clamp-4">
        {review.review}
      </p>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 px-3 py-1 rounded-lg border transition 
        ${liked ? "bg-orange-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
      >
        👍 Like
        <span className="text-sm">{likes}</span>
      </button>
    </div>
  );
};

export default ReviewCard;