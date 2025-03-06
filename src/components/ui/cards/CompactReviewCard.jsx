import { IoStar } from "react-icons/io5";

export default function CompactReviewCard({ review }) {
  return (
    <div className="border-b border-gray-700/20 py-3 first:pt-0 last:border-0">
      <div className="flex gap-3">
        <img
          src={review.reviewer_avatar}
          alt={review.reviewer_full_name}
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="rounded-xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <span className="font-medium dark:text-white">
                {review.reviewer_full_name}
              </span>
              <div className="flex items-center gap-1">
                <IoStar className="text-yellow-400" />
                <span className="text-sm">{review.rating}</span>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {review.comment}
            </p>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            {new Date(review.created_at).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
