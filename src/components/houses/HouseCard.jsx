import { Heart, MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../../services/authService"
import { addToFavorites, removeFromFavorites } from "../../services/interactionService"
import Badge from "../ui/Badge"
import Card from "../ui/Card"

const HouseCard = ({ house, isFavorite = false, onFavoriteToggle = () => {}, showOwner = false }) => {
  const handleFavoriteToggle = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (!isAuthenticated()) {
      // Redirect to login or show login modal
      return
    }

    try {
      if (isFavorite) {
        await removeFromFavorites(house.id)
      } else {
        await addToFavorites(house.id)
      }
      onFavoriteToggle(house.id)
    } catch (error) {
      console.error("Error toggling favorite:", error)
    }
  }

  return (
    <Card className="group transition-all duration-300 h-full flex flex-col" hover={true}>
      <Link to={`/houses/${house.id}`} className="flex flex-col h-full">
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={house.images || "https://i.ibb.co/VWgQBg65/house.jpg"}
            alt={house.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute top-2 right-2">
            <button
              onClick={handleFavoriteToggle}
              className={`p-2 rounded-full ${isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-700"} shadow-md hover:scale-110 transition-all duration-200`}
            >
              <Heart size={18} className={isFavorite ? "fill-current" : ""} />
            </button>
          </div>

          {house.categories && house.categories.length > 0 && (
            <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
              {house.categories.slice(0, 2).map((category) => (
                <Badge key={category.id} variant="primary" size="sm">
                  {category.name}
                </Badge>
              ))}
              {house.categories.length > 2 && (
                <Badge variant="secondary" size="sm">
                  +{house.categories.length - 2}
                </Badge>
              )}
            </div>
          )}
        </div>

        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">{house.title}</h3>
            <p className="text-purple-600 dark:text-purple-400 font-bold">
              ${Number.parseFloat(house.price).toLocaleString()}
            </p>
          </div>

          <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="mr-1" />
            <p className="text-sm line-clamp-1">{house.location}</p>
          </div>

          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{house.description}</p>

          {showOwner && house.owner && (
            <div className="mt-3 flex items-center">
              <img
                src={house.owner.image || "https://i.ibb.co/qMWG0D1/user-avatar.png"}
                alt={house.owner.owner_username}
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {house.owner.owner_first_name} {house.owner.owner_last_name}
              </span>
            </div>
          )}

          <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
                {house.average_rating ? house.average_rating.toFixed(1) : "N/A"}
              </span>
              <span className="mx-1 text-gray-400">•</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {house.review_count || 0} {house.review_count === 1 ? "review" : "reviews"}
              </span>
            </div>

            {!house.approved && (
              <Badge variant="warning" size="sm">
                Pending Approval
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default HouseCard

