export default function Loading() {
  return (
    <div className="min-h-screen  py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Skeleton */}
        <div className="h-10  rounded-xl w-3/4 mb-10 animate-pulse"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Skeleton */}
          <div className="aspect-[4/3] lg:aspect-square bg-gray-200 rounded-3xl animate-pulse"></div>

          {/* Content Skeleton */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-3">
              <div className="h-10 bg-gray-200 rounded-2xl w-11/12 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-xl w-48 animate-pulse"></div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-40 bg-gray-200 rounded-2xl animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-xl w-24 animate-pulse"></div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded-xl w-32 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-xl w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-xl w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-xl w-4/5 animate-pulse"></div>
            </div>

            {/* Video Link Skeleton */}
            <div className="h-6 bg-gray-200 rounded-xl w-64 animate-pulse"></div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="h-14 bg-gray-200 rounded-2xl flex-1 animate-pulse"></div>
              <div className="h-14 bg-gray-200 rounded-2xl flex-1 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}