import { Heart, MapPin, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { isAuthenticated } from "../../services/authService";
import { Badge, Card } from "../ui";

const HouseCard = ({
  house,
  isFavorite = false,
  onFavoriteToggle = () => {},
  showOwner = false,
}) => {
  const navigate = useNavigate();

  const handleFavoriteToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated()) {
      // Redirect to login
      toast.error("Please login to add favorites");
      navigate("/login");
      return;
    }

    // We'll use the parent component's handler which now has optimistic updates
    onFavoriteToggle(house.id);
  };

  return (
    <Card
      className="group flex h-full flex-col transition-all duration-300"
      hover={true}
    >
      <Link to={`/houses/${house.id}`} className="flex h-full flex-col">
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={house.images || "https://i.ibb.co/VWgQBg65/house.jpg"}
            alt={house.title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute right-2 top-2">
            <button
              onClick={handleFavoriteToggle}
              className={`rounded-full p-2 ${
                isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-700"
              } shadow-md transition-all duration-200 hover:scale-110`}
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

        <div className="flex flex-grow flex-col p-4">
          <div className="flex items-start justify-between">
            <h3 className="line-clamp-1 text-lg font-semibold text-gray-900 dark:text-white">
              {house.title}
            </h3>
            <p className="font-bold text-purple-600 dark:text-purple-400">
              ${Number.parseFloat(house.price).toLocaleString()}
            </p>
          </div>

          <div className="mt-2 flex items-center text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="mr-1" />
            <p className="line-clamp-1 text-sm">{house.location}</p>
          </div>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
            {house.description}
          </p>

          {showOwner && house.owner && (
            <div className="mt-3 flex items-center">
              <img
                src={
                  house.owner.image ||
                  "https://i.ibb.co/qMWG0D1/user-avatar.png"
                }
                alt={house.owner.owner_username}
                className="mr-2 h-6 w-6 rounded-full"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {house.owner.owner_first_name} {house.owner.owner_last_name}
              </span>
            </div>
          )}

          <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-700">
            <div className="flex items-center">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
                {house.average_rating ? house.average_rating.toFixed(1) : "N/A"}
              </span>
              <span className="mx-1 text-gray-400">•</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {house.review_count || 0}{" "}
                {house.review_count === 1 ? "review" : "reviews"}
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
  );
};

export default HouseCard;
