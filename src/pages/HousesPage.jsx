
import { Home } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import HouseCard from "../components/houses/HouseCard"
import HouseFilters from "../components/houses/HouseFilters"
import Pagination from "../components/ui/Pagination"
import Spinner from "../components/ui/Spinner"
import { isAuthenticated } from "../services/authService"
import { getCategories, getHouses } from "../services/houseService"
import { addToFavorites, getFavorites, removeFromFavorites } from "../services/interactionService"

const HousesPage = () => {
  const [houses, setHouses] = useState([])
  const [categories, setCategories] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    location: "",
  })

  const location = useLocation()
  const authenticated = isAuthenticated()

  // Parse query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const initialFilters = {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      minPrice: searchParams.get("min_price") || "",
      maxPrice: searchParams.get("max_price") || "",
      location: searchParams.get("location") || "",
    }

    setFilters(initialFilters)
    setCurrentPage(Number.parseInt(searchParams.get("page") || "1"))
  }, [location.search])

  // Fetch houses and categories
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        // Fetch houses with filters
        const housesData = await getHouses(currentPage, filters)
        setHouses(housesData.results)
        setTotalPages(Math.ceil(housesData.count / 10)) // Assuming 10 items per page

        // Fetch categories
        const categoriesData = await getCategories()
        setCategories(categoriesData.results)

        // Fetch favorites if authenticated
        if (authenticated) {
          const favoritesData = await getFavorites()
          setFavorites(favoritesData.results.map((fav) => fav.house.id))
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage, filters, authenticated])

  // Update URL when filters or page changes
  useEffect(() => {
    const searchParams = new URLSearchParams()

    if (filters.search) searchParams.set("search", filters.search)
    if (filters.category) searchParams.set("category", filters.category)
    if (filters.minPrice) searchParams.set("min_price", filters.minPrice)
    if (filters.maxPrice) searchParams.set("max_price", filters.maxPrice)
    if (filters.location) searchParams.set("location", filters.location)
    if (currentPage > 1) searchParams.set("page", currentPage.toString())

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`
    window.history.replaceState({}, "", newUrl)
  }, [filters, currentPage])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filters change
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handleFavoriteToggle = async (houseId) => {
    if (!authenticated) return

    try {
      if (favorites.includes(houseId)) {
        await removeFromFavorites(houseId)
        setFavorites(favorites.filter((id) => id !== houseId))
      } else {
        await addToFavorites(houseId)
        setFavorites([...favorites, houseId])
      }
    } catch (error) {
      console.error("Error toggling favorite:", error)
    }
  }

  return (
    <div className="max-w-[90vw]  mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <div className="flex items-center mb-6">
        <Home className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-2" />
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">Rental Properties</h1>
      </div>

      <HouseFilters categories={categories} onFilterChange={handleFilterChange} initialFilters={filters} />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner size="lg" />
        </div>
      ) : houses.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {houses.map((house) => (
              <HouseCard
                key={house.id}
                house={house}
                isFavorite={favorites.includes(house.id)}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      ) : (
        <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">No properties found</h3>
          <p className="text-zinc-600 dark:text-zinc-300">
            Try adjusting your filters or search criteria to find more properties.
          </p>
        </div>
      )}
    </div>
  )
}

export default HousesPage

