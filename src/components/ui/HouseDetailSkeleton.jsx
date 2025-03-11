import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HouseDetailSkeleton = () => {
  return (
    <div className="mx-auto max-w-[90vw] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          to="/houses"
          className="flex items-center text-purple-600 hover:underline dark:text-purple-400"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Properties
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl bg-neutral-50 shadow-md dark:bg-zinc-800">
            {/* Property Image Skeleton */}
            <div className="relative h-64 w-full animate-pulse bg-zinc-200 dark:bg-zinc-700 sm:h-80 md:h-96"></div>

            {/* Property Details Skeleton */}
            <div className="p-6">
              {/* Title and Price Skeleton */}
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div className="w-3/4">
                  <div className="mb-2 h-8 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700 md:h-10"></div>
                  <div className="h-4 w-1/2 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
                </div>
                <div className="h-8 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
              </div>

              {/* Categories Skeleton */}
              <div className="mb-6 flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-20 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700"
                  ></div>
                ))}
              </div>

              {/* Description Skeleton */}
              <div className="mb-6">
                <div className="mb-2 h-6 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
                  <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
                  <div className="h-4 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
                  <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
                  <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
                </div>
              </div>

              {/* Owner Info Skeleton */}
              <div className="mb-6 rounded-lg bg-white p-4 shadow-sm dark:bg-zinc-700">
                <div className="mb-4 h-6 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-600"></div>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-600"></div>
                  <div className="flex-1">
                    <div className="mb-2 h-5 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-600"></div>
                    <div className="mb-1 h-4 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-600"></div>
                    <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-600"></div>
                  </div>
                </div>
              </div>

              {/* Reviews Skeleton */}
              <div className="mb-6">
                <div className="mb-4 h-6 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-zinc-700"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3 h-10 w-10 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-600"></div>
                        <div className="h-5 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-600"></div>
                      </div>
                      <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-600"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-600"></div>
                      <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-200 dark:bg-zinc-600"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-zinc-800">
            <div className="mb-4 h-7 w-1/2 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="mb-8 space-y-4">
              <div className="h-10 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="h-10 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="h-10 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="h-24 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-700"></div>
            </div>
            <div className="h-12 w-full animate-pulse rounded bg-purple-200 dark:bg-purple-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetailSkeleton;
