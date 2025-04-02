// pages/FeaturedPropertiesSection.jsx
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button, HouseCard } from "../../components";
import { isAuthenticated } from "../../services/authService";
import { getHouses } from "../../services/houseService";
import {
  getFavorites,
  toggleFavorite,
} from "../../services/interactionService";

const FeaturedPropertiesSection = () => {
  const authenticated = isAuthenticated();
  const queryClient = useQueryClient();

  // Fetch houses on page 1 and select the first 8 items as featured
  const {
    data: housesData,
    isLoading: housesLoading,
    error: housesError,
  } = useQuery({
    queryKey: ["featuredHouses"],
    queryFn: () => getHouses(1),
    select: (data) => data.results.slice(0, 8),
  });

  // Query for favorites if authenticated
  const { data: favoritesData, isLoading: favoritesLoading } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavorites(),
    enabled: authenticated,
  });

  // Mutation for toggling favorites with optimistic updates
  const favoriteToggleMutation = useMutation({
    mutationFn: ({ houseId, isFavorite }) =>
      toggleFavorite(houseId, isFavorite),
    // Optimistic update
    onMutate: async ({ houseId, isFavorite }) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["favorites"] });

      // Save previous favorites data
      const previousFavorites = queryClient.getQueryData(["favorites"]);

      // Optimistically update the UI
      if (previousFavorites) {
        const updatedResults = isFavorite
          ? previousFavorites.results.filter((fav) => fav.house.id !== houseId)
          : [...previousFavorites.results, { house: { id: houseId } }];

        queryClient.setQueryData(["favorites"], {
          ...previousFavorites,
          results: updatedResults,
        });
      }

      return { previousFavorites };
    },
    // If the mutation fails, use the context we saved to roll back
    onError: (err, variables, context) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(["favorites"], context.previousFavorites);
      }
      toast.error("Error updating favorites");
    },
    // Always refetch after error or success
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });

  const handleFavoriteToggle = async (houseId) => {
    if (!authenticated) {
      toast.error("Please login to add favorites");
      return;
    }

    // Check if house is currently in favorites
    const isFavorite = favoritesData?.results?.some(
      (fav) => fav.house.id === houseId,
    );

    // Execute mutation with optimistic update
    favoriteToggleMutation.mutate(
      {
        houseId,
        isFavorite,
      },
      {
        onSuccess: () => {
          toast.success(
            isFavorite ? "Removed from favorites" : "Added to favorites",
          );
        },
      },
    );
  };

  if (housesLoading || (authenticated && favoritesLoading)) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-80 animate-pulse rounded bg-gray-300 dark:bg-gray-700"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (housesError) return <div>Error loading featured properties.</div>;

  const houses = housesData || [];
  const favorites =
    authenticated && favoritesData
      ? favoritesData.results.map((fav) => fav.house.id)
      : [];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Featured Properties
          </h2>
          <Link to="/houses">
            <Button className="px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl">
              View All{" "}
              <ArrowRight
                size={16}
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {houses.map((house) => (
            <HouseCard
              key={house.id}
              house={house}
              isFavorite={favorites.includes(house.id)}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
