import {
  DollarSign,
  MapPin,
  Search,
  SlidersHorizontal,
  Tag,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { PRICE_RANGES } from "../../constants";
import { Button, Input, Select } from "../ui";

const HouseFilters = ({
  categories = [],
  onFilterChange,
  initialFilters = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: initialFilters.search || "",
    category: initialFilters.category || "",
    min_price: initialFilters.min_price || "",
    max_price: initialFilters.max_price || "",
    location: initialFilters.location || "",
    priceRange: initialFilters.priceRange || "",
  });

  // Use useEffect to update local state when initialFilters change
  useEffect(() => {
    setFilters({
      search: initialFilters.search || "",
      category: initialFilters.category || "",
      min_price: initialFilters.min_price || "",
      max_price: initialFilters.max_price || "",
      location: initialFilters.location || "",
      priceRange: initialFilters.priceRange || "",
    });
  }, [initialFilters]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "priceRange" && value) {
      const selectedRange = PRICE_RANGES.find((range) => range.label === value);
      if (selectedRange) {
        setFilters({
          ...filters,
          priceRange: value,
          min_price: selectedRange.min,
          max_price: selectedRange.max,
        });
      }
    } else if (name === "min_price" || name === "max_price") {
      setFilters({
        ...filters,
        [name]: value === "" ? "" : Number.parseFloat(value),
        // Clear priceRange when manually setting min/max price
        ...(name === "min_price" || name === "max_price"
          ? { priceRange: "" }
          : {}),
      });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleClear = () => {
    const clearedFilters = {
      search: "",
      category: "",
      min_price: "",
      max_price: "",
      location: "",
      priceRange: "",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
    setIsOpen(false);
  };

  // Handle mobile search submission
  const handleMobileSearchSubmit = (e) => {
    if (e.key === "Enter") {
      onFilterChange({ ...filters });
    }
  };

  // Helper function to apply active filter styles
  const getActiveFilterStyle = (value) => {
    return value
      ? "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800"
      : "";
  };

  // Count active filters for badge
  const activeFilterCount = Object.values(filters).filter(
    (value) => value !== "" && value !== null && value !== undefined,
  ).length;

  return (
    <div className="mb-6 transition-all duration-200">
      {/* Mobile Search and Filter Toggle */}
      <div className="md:hidden">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={18} className="text-zinc-400" />
              </div>
              <input
                type="text"
                placeholder="Search houses..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                onKeyDown={handleMobileSearchSubmit}
                className="w-full rounded-lg border border-zinc-300 bg-white py-2.5 pl-10 pr-4 text-zinc-900 transition-all duration-200 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/30 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="secondary"
            className={`relative flex items-center gap-1.5 ${activeFilterCount > 0 ? "bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-900/50" : ""}`}
          >
            <SlidersHorizontal size={16} />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-medium text-white">
                {activeFilterCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Desktop Filters */}
      <div
        className={`mt-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-300 ease-in-out dark:border-zinc-700 dark:bg-zinc-800 ${isOpen ? "opacity-100" : "hidden md:block md:opacity-100"}`}
      >
        <div className="mb-4 flex items-center justify-between md:hidden">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-200"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-6 lg:items-end">
            {/* Search - Desktop Only */}
            <div className="hidden md:block lg:col-span-2">
              <Input
                label="Search"
                name="search"
                value={filters.search}
                onChange={handleInputChange}
                placeholder="Search properties..."
                icon={<Search size={18} className="text-zinc-400" />}
                className={`transition-all duration-200 ${getActiveFilterStyle(filters.search)}`}
              />
            </div>

            {/* Category */}
            <div>
              <Select
                label="Category"
                name="category"
                value={filters.category}
                onChange={handleInputChange}
                placeholder="Select category"
                icon={<Tag size={16} className="text-zinc-400" />}
                options={categories.map((cat) => ({
                  value: cat.id,
                  label: cat.name,
                }))}
                className={`transition-all duration-200 ${getActiveFilterStyle(filters.category)}`}
              />
            </div>

            {/* Price Range Group */}
            <div className="flex items-end gap-2 md:col-span-2 lg:col-span-1">
              <div className="flex-1">
                <Input
                  label="Min Price"
                  name="min_price"
                  value={filters.min_price}
                  onChange={handleInputChange}
                  placeholder="Min"
                  type="number"
                  icon={<DollarSign size={16} className="text-zinc-400" />}
                  className={`transition-all duration-200 ${getActiveFilterStyle(filters.min_price)}`}
                />
              </div>
              <div className="flex-1">
                <Input
                  label="Max Price"
                  name="max_price"
                  value={filters.max_price}
                  onChange={handleInputChange}
                  placeholder="Max"
                  type="number"
                  icon={<DollarSign size={16} className="text-zinc-400" />}
                  className={`transition-all duration-200 ${getActiveFilterStyle(filters.max_price)}`}
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <Input
                label="Location"
                name="location"
                value={filters.location}
                onChange={handleInputChange}
                placeholder="City, state, zip..."
                icon={<MapPin size={16} className="text-zinc-400" />}
                className={`transition-all duration-200 ${getActiveFilterStyle(filters.location)}`}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-end justify-end space-x-2 md:col-span-2 lg:col-span-1">
              <Button
                type="button"
                variant="outline"
                onClick={handleClear}
                className="border-zinc-300 hover:bg-zinc-50 dark:border-zinc-600 dark:hover:bg-zinc-700/50"
              >
                <X size={16} className="mr-1.5" />
                Clear
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
              >
                Apply
              </Button>
            </div>
          </div>

          {/* Active Filters Summary */}
          {activeFilterCount > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-700">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Active filters:
              </span>
              {filters.search && (
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  Search: {filters.search}
                </span>
              )}
              {filters.category && (
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  Category:{" "}
                  {categories.find((c) => c.id === filters.category)?.name ||
                    filters.category}
                </span>
              )}
              {(filters.min_price || filters.max_price) && (
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  Price: {filters.min_price ? `$${filters.min_price}` : "$0"} -{" "}
                  {filters.max_price ? `$${filters.max_price}` : "Any"}
                </span>
              )}
              {filters.location && (
                <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  Location: {filters.location}
                </span>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default HouseFilters;
