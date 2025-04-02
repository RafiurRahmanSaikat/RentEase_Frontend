import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { HouseCard, HouseFilters, Pagination } from "../components";

import { isAuthenticated } from "../services/authService";
import { getCategories, getHouses } from "../services/houseService";
import { getFavorites, toggleFavorite } from "../services/interactionService";

const HousesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const authenticated = isAuthenticated();
  const queryClient = useQueryClient();

  // Build filters from search parameters
  const filters = {
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    minPrice: searchParams.get("min_price") || "",
    maxPrice: searchParams.get("max_price") || "",
    location: searchParams.get("location") || "",
  };
  const currentPage = Number(searchParams.get("page") || "1");

  // Query for houses
  const {
    data: housesData,
    isLoading: housesLoading,
    error: housesError,
  } = useQuery({
    queryKey: ["houses", currentPage, filters],
    queryFn: () => getHouses(currentPage, filters),
    keepPreviousData: true,
  });

  // Query for categories
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    keepPreviousData: true,
  });

  // Query for favorites if authenticated
  const {
    data: favoritesData,
    isLoading: favoritesLoading,
    error: favoritesError,
  } = useQuery({
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

  const handleFilterChange = (newFilters) => {
    // Reset page to 1 when filters change
    setSearchParams({ ...newFilters, page: "1" });
  };

  const handlePageChange = (page) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: page.toString(),
    });
    window.scrollTo(0, 0);
  };

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

  if (
    housesLoading ||
    categoriesLoading ||
    (authenticated && favoritesLoading)
  ) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-80 animate-pulse rounded bg-gray-300 dark:bg-gray-700"
          ></div>
        ))}
      </div>
    );
  }

  if (housesError || categoriesError || favoritesError) {
    return <div>Error loading data.</div>;
  }

  const houses = housesData.results;
  const totalPages = Math.ceil(housesData.count / 10);
  const categories = categoriesData.results;
  const favorites =
    authenticated && favoritesData
      ? favoritesData.results.map((fav) => fav.house.id)
      : [];

  return (
    <div className="mx-auto max-w-[90vw] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
          Rental Properties
        </h1>
      </div>

      <HouseFilters
        categories={categories}
        onFilterChange={handleFilterChange}
        initialFilters={filters}
      />

      {houses.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {houses.map((house) => (
              <HouseCard
                key={house.id}
                house={house}
                isFavorite={favorites.includes(house.id)}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="rounded-lg bg-zinc-50 py-20 text-center dark:bg-zinc-800">
          <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">
            No properties found
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300">
            Try adjusting your filters or search criteria to find more
            properties.
          </p>
        </div>
      )}
    </div>
  );
};

export default HousesPage;
