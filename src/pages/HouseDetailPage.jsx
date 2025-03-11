
import { ArrowLeft, CheckCircle, DollarSign, Heart, MapPin, Share2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import HouseReviews from "../components/houses/HouseReviews"
import RentRequestForm from "../components/houses/RentRequestForm"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Modal from "../components/ui/Modal"
import Spinner from "../components/ui/Spinner"
import { getCurrentUser, isAdmin, isAuthenticated } from "../services/authService"
import { approveHouse, getHouseById, submitHouseForApproval } from "../services/houseService"
import { addToFavorites, removeFromFavorites } from "../services/interactionService"

const HouseDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [house, setHouse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const authenticated = isAuthenticated()
  const admin = isAdmin()
  const currentUser = getCurrentUser()

  // Check if current user is the owner
  const isOwner = house && currentUser && house.owner && house.owner.owner_username === currentUser.username

  useEffect(() => {
    const fetchHouse = async () => {
      setLoading(true)
      try {
        const data = await getHouseById(id)
        setHouse(data)

        // Check if house is in favorites
        // This would require a separate API call or checking against a list of favorites
        // For now, we'll just set it to false
        setIsFavorite(false)
      } catch (error) {
        console.error("Error fetching house details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchHouse()
  }, [id])

  const handleFavoriteToggle = async () => {
    if (!authenticated) {
      navigate("/login")
      return
    }

    try {
      if (isFavorite) {
        await removeFromFavorites(id)
      } else {
        await addToFavorites(id)
      }
      setIsFavorite(!isFavorite)
    } catch (error) {
      console.error("Error toggling favorite:", error)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: house.title,
        text: `Check out this property: ${house.title}`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const handleSubmitForApproval = async () => {
    try {
      await submitHouseForApproval(id)
      setSuccessMessage("Property has been submitted for approval.")
      setShowSuccessModal(true)

      // Refresh house data
      const updatedHouse = await getHouseById(id)
      setHouse(updatedHouse)
    } catch (error) {
      console.error("Error submitting for approval:", error)
    }
  }

  const handleApprove = async () => {
    try {
      await approveHouse(id)
      setSuccessMessage("Property has been approved successfully.")
      setShowSuccessModal(true)

      // Refresh house data
      const updatedHouse = await getHouseById(id)
      setHouse(updatedHouse)
    } catch (error) {
      console.error("Error approving house:", error)
    }
  }

  const handleRentRequestSubmitted = () => {
    setSuccessMessage("Your rent request has been submitted successfully. The owner will review it shortly.")
    setShowSuccessModal(true)
  }

  const handleReviewChange = async () => {
    // Refresh house data to get updated reviews
    const updatedHouse = await getHouseById(id)
    setHouse(updatedHouse)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Spinner size="lg" />
      </div>
    )
  }

  if (!house) {
    return (
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Property Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/houses">
          <Button>
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/houses" className="text-purple-600 dark:text-purple-400 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-1" />
          Back to Properties
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-neutral-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            {/* Property Images */}
            <div className="relative h-64 sm:h-80 md:h-96">
              <img
                src={house.images || "https://i.ibb.co/VWgQBg65/house.jpg"}
                alt={house.title}
                className="w-full h-full object-cover"
              />

              {!house.approved && (
                <div className="absolute top-4 left-4">
                  <Badge variant="warning">Pending Approval</Badge>
                </div>
              )}

              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={handleFavoriteToggle}
                  className={`p-2 rounded-full ${isFavorite ? "bg-red-500 text-white" : "bg-neutral-50 text-gray-700"} shadow-md hover:scale-110 transition-all duration-200`}
                >
                  <Heart size={20} className={isFavorite ? "fill-current" : ""} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-neutral-50 text-gray-700 shadow-md hover:scale-110 transition-all duration-200"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{house.title}</h1>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin size={18} className="mr-1" />
                    <span>{house.location}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign size={24} className="text-purple-600 dark:text-purple-400" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${Number.parseFloat(house.price).toLocaleString()}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/ day</span>
                </div>
              </div>

              {/* Categories */}
              {house.categories && house.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {house.categories.map((category) => (
                    <Badge key={category.id} variant="primary">
                      {category.name}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Description</h2>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{house.description}</p>
              </div>

              {/* Owner Info */}
              {house.owner && (
                <Card className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Property Owner</h2>
                  <div className="flex items-center">
                    <img
                      src={house.owner.image || "https://i.ibb.co/qMWG0D1/user-avatar.png"}
                      alt={house.owner.owner_username}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {house.owner.owner_first_name} {house.owner.owner_last_name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{house.owner.email}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{house.owner.phone}</p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Admin/Owner Actions */}
              {(isOwner || admin) && !house.approved && (
                <Card className="mb-6 border-2 border-yellow-300 dark:border-yellow-600">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Property Approval Status
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This property is pending approval.{" "}
                        {isOwner
                          ? "Submit it for approval to make it visible to potential tenants."
                          : "As an admin, you can approve this property."}
                      </p>
                    </div>
                    {isOwner && <Button onClick={handleSubmitForApproval}>Submit for Approval</Button>}
                    {admin && <Button onClick={handleApprove}>Approve Property</Button>}
                  </div>
                </Card>
              )}

              {/* Reviews */}
              <HouseReviews houseId={house.id} reviews={house.reviews || []} onReviewChange={handleReviewChange} />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <RentRequestForm house={house} onRequestSubmitted={handleRentRequestSubmitted} />
        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} title="Success" size="md">
        <div className="text-center py-4 ">
          <CheckCircle size={80} className="mx-auto text-green-500 mb-4" />
          <p className="text-zinc-800 dark:text-zinc-200 text-xl">{successMessage}</p>
          <Button variant="danger" onClick={() => setShowSuccessModal(false)} className="mt-6  mx-auto">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default HouseDetailPage

