
import { Search, SlidersHorizontal, X } from "lucide-react"
import { useState } from "react"
import { PRICE_RANGES } from "../../constants"
import Button from "../ui/Button"
import Input from "../ui/Input"
import Select from "../ui/Select"

const HouseFilters = ({ categories = [], onFilterChange, initialFilters = {} }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    search: initialFilters.search || "",
    category: initialFilters.category || "",
    minPrice: initialFilters.minPrice || "",
    maxPrice: initialFilters.maxPrice || "",
    location: initialFilters.location || "",
    priceRange: initialFilters.priceRange || "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })

    // If price range is selected, update min and max price
    if (name === "priceRange" && value) {
      const selectedRange = PRICE_RANGES.find((range) => range.label === value)
      if (selectedRange) {
        setFilters({
          ...filters,
          priceRange: value,
          minPrice: selectedRange.min,
          maxPrice: selectedRange.max,
        })
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onFilterChange(filters)
    setIsOpen(false)
  }

  const handleClear = () => {
    const clearedFilters = {
      search: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      location: "",
      priceRange: "",
    }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  return (
    <div className="mb-6">
      {/* Mobile Search and Filter Toggle */}
      <div className="md:hidden">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-zinc-400" />
              </div>
              <input
                type="text"
                placeholder="Search houses..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-neutral-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="secondary"
            className="flex items-center"
            icon={<SlidersHorizontal size={18} />}
          >
            Filters
          </Button>
        </div>
      </div>

      {/* Desktop Filters */}
      <div
        className={`bg-neutral-50 dark:bg-zinc-800 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700 p-4 mt-4 ${isOpen || "hidden md:block"}`}
      >
        <div className="flex items-center justify-between mb-4 md:hidden">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search - Desktop Only */}
            <div className="hidden md:block">
              <Input
                label="Search"
                name="search"
                value={filters.search}
                onChange={handleInputChange}
                placeholder="Search by title or description"
                icon={<Search size={18} className="text-zinc-400" />}
              />
            </div>

            {/* Category */}
            <Select
              label="Category"
              name="category"
              value={filters.category}
              onChange={handleInputChange}
              placeholder="Select category"
              options={categories.map((cat) => ({ value: cat.id, label: cat.name }))}
            />

            {/* Price Range */}
            <Select
              label="Price Range"
              name="priceRange"
              value={filters.priceRange}
              onChange={handleInputChange}
              placeholder="Select price range"
              options={PRICE_RANGES.map((range) => ({ value: range.label, label: range.label }))}
            />

            {/* Location */}
            <Input
              label="Location"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
              placeholder="Enter location"
            />
          </div>

          <div className="flex items-center justify-end mt-4 space-x-2">
            <Button type="button" variant="outline" onClick={handleClear}>
              Clear
            </Button>
            <Button type="submit">Apply Filters</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HouseFilters

