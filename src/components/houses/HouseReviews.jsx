
import { Edit, Trash2 } from "lucide-react"
import { useState } from "react"
import { getCurrentUser } from "../../services/authService"
import { addReview, deleteReview, updateReview } from "../../services/houseService"
import Button from "../ui/Button"
import Card from "../ui/Card"
import Rating from "../ui/Rating"
import Textarea from "../ui/Textarea"

const HouseReviews = ({ houseId, reviews = [], onReviewChange }) => {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [editingReview, setEditingReview] = useState(null)
  const [reviewData, setReviewData] = useState({
    rating: 5,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const currentUser = getCurrentUser()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setReviewData({ ...reviewData, [name]: value })
  }

  const handleRatingChange = (rating) => {
    setReviewData({ ...reviewData, rating })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (editingReview) {
        await updateReview(editingReview.id, reviewData)
      } else {
        await addReview(houseId, reviewData)
      }

      // Reset form
      setReviewData({ rating: 5, comment: "" })
      setShowReviewForm(false)
      setEditingReview(null)

      // Refresh reviews
      onReviewChange()
    } catch (error) {
      console.error("Error submitting review:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (review) => {
    setEditingReview(review)
    setReviewData({
      rating: review.rating,
      comment: review.comment,
    })
    setShowReviewForm(true)
  }

  const handleDelete = async (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await deleteReview(reviewId)
        onReviewChange()
      } catch (error) {
        console.error("Error deleting review:", error)
      }
    }
  }

  const handleCancel = () => {
    setShowReviewForm(false)
    setEditingReview(null)
    setReviewData({ rating: 5, comment: "" })
  }

  const userHasReviewed = currentUser && reviews.some((review) => review.reviewer_email === currentUser.email)

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Reviews ({reviews.length})</h2>

        {currentUser && !showReviewForm && (
          <Button onClick={() => setShowReviewForm(true)} variant="outline">
            Write a Review
          </Button>
        )}
      </div>

      {showReviewForm && (
        <Card className="mb-6">
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-medium mb-4">{editingReview ? "Edit Your Review" : "Write a Review"}</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating</label>
              <Rating value={reviewData.rating} onChange={handleRatingChange} size="lg" />
            </div>

            <Textarea
              label="Your Review"
              name="comment"
              value={reviewData.comment}
              onChange={handleInputChange}
              placeholder="Share your experience with this property..."
              required
            />

            <div className="flex justify-end space-x-2 mt-4">
              <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : editingReview ? "Update Review" : "Submit Review"}
              </Button>
            </div>
          </form>
        </Card>
      )}

      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id} className="p-4">
              <div className="flex items-start">
                <img
                  src={review.reviewer_avatar || "https://i.ibb.co/qMWG0D1/user-avatar.png"}
                  alt={review.reviewer_full_name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{review.reviewer_full_name}</h4>
                      <div className="flex items-center mt-1">
                        <Rating value={review.rating} readOnly size="sm" />
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {currentUser && currentUser.email === review.reviewer_email && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(review)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(review.id)}
                          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{review.comment}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">No reviews yet. Be the first to review this property!</p>
        </div>
      )}
    </div>
  )
}

export default HouseReviews

