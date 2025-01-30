import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(rating, review);
    setRating(0);
    setReview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2 rounded-2xl bg-gray-50 p-3 dark:bg-gray-800"
    >
      <h3 className="text-lg font-semibold dark:text-white">Write a Review</h3>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="text-2xl"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            {star <= (hover || rating) ? (
              <IoStar className="text-yellow-400" />
            ) : (
              <IoStarOutline className="text-yellow-400" />
            )}
          </button>
        ))}
      </div>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Share your experience..."
        className="w-full rounded-xl border-2 border-gray-200 bg-white p-3 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
        rows="2"
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        disabled={!rating || !review.trim()}
      >
        Submit Review
      </button>
    </form>
  );
}
