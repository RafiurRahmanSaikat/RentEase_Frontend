/* eslint-disable react/no-unescaped-entities */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  CheckCircle,
  DollarSign,
  Heart,
  MapPin,
  Share2,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  Badge,
  Button,
  Card,
  HouseDetailSkeleton,
  HouseReviews,
  Modal,
  RentRequestForm,
} from "../components";
import {
  getCurrentUser,
  isAdmin,
  isAuthenticated,
} from "../services/authService";
import {
  approveHouse,
  getHouseById,
  submitHouseForApproval,
} from "../services/houseService";
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from "../services/interactionService";

const HouseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const authenticated = isAuthenticated();
  const admin = isAdmin();
  const currentUser = getCurrentUser();

  // Query for house details
  const {
    data: house,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["houseDetail", id],
    queryFn: () => getHouseById(id),
  });

  // Query for favorites if authenticated
  const {
    data: favoritesData,
    isLoading: favoritesLoading,
    error: favoritesError,
    refetch: refetchFavorites,
  } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavorites(),
    enabled: authenticated,
  });

  // Check if current house is in favorites
  const isFavorite = favoritesData?.results?.some(
    (fav) => fav.house.id === Number(id),
  );

  // Determine if the current user is the owner
  const isOwner =
    house &&
    currentUser &&
    house.owner &&
    house.owner.owner_username === currentUser.username;

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Mutation for submitting house for approval
  const submitApprovalMutation = useMutation({
    mutationFn: () => submitHouseForApproval(id),
    onSuccess: () => {
      setSuccessMessage("Property has been submitted for approval.");
      setShowSuccessModal(true);
      queryClient.invalidateQueries({ queryKey: ["houseDetail", id] });
    },
  });

  // Mutation for approving the house (admin only)
  const approveMutation = useMutation({
    mutationFn: () => approveHouse(id),
    onSuccess: () => {
      setSuccessMessage("Property has been approved successfully.");
      setShowSuccessModal(true);
      queryClient.invalidateQueries({ queryKey: ["houseDetail", id] });
    },
  });

  // Mutation for toggling favorite
  const favoriteToggleMutation = useMutation({
    mutationFn: async () => {
      if (isFavorite) {
        return removeFromFavorites(id);
      } else {
        return addToFavorites(id);
      }
    },
    onSuccess: () => {
      toast.success(
        isFavorite
          ? "Property removed from favorites"
          : "Property added to favorites",
      );
      refetchFavorites();
      queryClient.invalidateQueries({ queryKey: ["houses"] });
    },
    onError: (error) => {
      toast.error("Failed to update favorites");
      console.error("Favorite error:", error);
    },
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: house.title,
        text: `Check out this property: ${house.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleFavoriteToggle = () => {
    if (!authenticated) {
      toast.error("Please login to add favorites");
      navigate("/login");
      return;
    }
    favoriteToggleMutation.mutate();
  };

  const handleSubmitForApproval = () => {
    submitApprovalMutation.mutate();
  };

  const handleApprove = () => {
    approveMutation.mutate();
  };

  const handleRentRequestSubmitted = () => {
    setSuccessMessage(
      "Your rent request has been submitted successfully. The owner will review it shortly.",
    );
    setShowSuccessModal(true);
  };

  const handleReviewChange = () => {
    queryClient.invalidateQueries(["houseDetail", id]);
  };

  if (isLoading) return <HouseDetailSkeleton />;
  if (error) return <div>Error loading house details.</div>;
  if (!house) {
    return (
      <div className="mx-auto max-w-[90vw] px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
          Property Not Found
        </h2>
        <p className="mb-6 text-zinc-600 dark:text-zinc-300">
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/houses">
          <Button>
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
          </Button>
        </Link>
      </div>
    );
  }

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
            <div className="relative h-64 sm:h-80 md:h-96">
              <img
                src={house.images || "https://i.ibb.co/VWgQBg65/house.jpg"}
                alt={house.title}
                className="h-full w-full object-cover"
              />
              {!house.approved && (
                <div className="absolute left-4 top-4">
                  <Badge variant="warning">Pending Approval</Badge>
                </div>
              )}
              <div className="absolute right-4 top-4 flex space-x-2">
                <button
                  onClick={handleFavoriteToggle}
                  className={`rounded-full p-2 ${
                    isFavorite
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700"
                  } shadow-md transition-all duration-200 hover:scale-110`}
                  disabled={favoriteToggleMutation.isLoading}
                >
                  <Heart
                    size={20}
                    className={isFavorite ? "fill-current" : ""}
                  />
                </button>
                <button
                  onClick={handleShare}
                  className="rounded-full bg-blue-500 p-2 text-white shadow-md transition-all duration-200 hover:scale-110"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
                    {house.title}
                  </h1>
                  <div className="flex items-center text-zinc-600 dark:text-zinc-300">
                    <MapPin size={18} className="mr-1" />
                    <span>{house.location}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign
                    size={24}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                    ${Number.parseFloat(house.price).toLocaleString()}
                  </span>
                  <span className="ml-1 text-zinc-500 dark:text-zinc-400">
                    / day
                  </span>
                </div>
              </div>

              {house.categories && house.categories.length > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {house.categories.map((category) => (
                    <Badge key={category.id} variant="primary">
                      {category.name}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="mb-6">
                <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">
                  Description
                </h2>
                <p className="whitespace-pre-line text-zinc-600 dark:text-zinc-300">
                  {house.description}
                </p>
              </div>

              {house.owner && (
                <Card className="mb-6">
                  <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
                    Property Owner
                  </h2>
                  <div className="flex items-center">
                    <img
                      src={
                        house.owner.image ||
                        "https://i.ibb.co/qMWG0D1/user-avatar.png"
                      }
                      alt={house.owner.owner_username}
                      className="mr-4 h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-zinc-900 dark:text-white">
                        {house.owner.owner_first_name}{" "}
                        {house.owner.owner_last_name}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {house.owner.email}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {house.owner.phone}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {(isOwner || admin) && !house.approved && (
                <Card className="mb-6 border-2 border-yellow-300 dark:border-yellow-600">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                        Property Approval Status
                      </h3>
                      <p className="mb-4 text-zinc-600 dark:text-zinc-300">
                        This property is pending approval.{" "}
                        {isOwner
                          ? "Submit it for approval to make it visible to potential tenants."
                          : "As an admin, you can approve this property."}
                      </p>
                    </div>
                    {isOwner && (
                      <Button onClick={handleSubmitForApproval}>
                        Submit for Approval
                      </Button>
                    )}
                    {admin && (
                      <Button onClick={handleApprove}>Approve Property</Button>
                    )}
                  </div>
                </Card>
              )}

              <HouseReviews
                houseId={house.id}
                reviews={house.reviews || []}
                onReviewChange={handleReviewChange}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <RentRequestForm
            house={house}
            onRequestSubmitted={handleRentRequestSubmitted}
          />
        </div>
      </div>

      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Success"
        size="md"
      >
        <div className="py-4 text-center">
          <CheckCircle size={80} className="mx-auto mb-4 text-green-500" />
          <p className="text-xl text-zinc-800 dark:text-zinc-200">
            {successMessage}
          </p>
          <Button
            variant="danger"
            onClick={() => setShowSuccessModal(false)}
            className="mx-auto mt-6"
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default HouseDetailPage;
