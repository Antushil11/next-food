const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border animate-pulse">

      {/* User */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>

        <div className="space-y-2">
          <div className="w-28 h-3 bg-gray-300 rounded"></div>
          <div className="w-20 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Review text */}
      <div className="space-y-2 mb-4">
        <div className="w-full h-3 bg-gray-300 rounded"></div>
        <div className="w-full h-3 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
      </div>

      {/* Button */}
      <div className="w-20 h-8 bg-gray-300 rounded"></div>
    </div>
  );
};

export default ReviewCardSkeleton;