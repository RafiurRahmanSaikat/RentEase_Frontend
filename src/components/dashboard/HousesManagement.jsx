"use client";

import { Edit, Filter, Plus, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  approveHouse,
  createHouse,
  getAllHouses,
  getCategories,
  updateHouse,
} from "../../services/houseService";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Pagination from "../ui/Pagination";
import Select from "../ui/Select";
import Spinner from "../ui/Spinner";
import Textarea from "../ui/Textarea";

const HousesManagement = () => {
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    min_price: "",
    max_price: "",
    location: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    images: "",
    category_ids: [],
  });

  useEffect(() => {
    fetchHouses();
    fetchCategories();
  }, [currentPage]);

  const fetchHouses = async () => {
    setLoading(true);
    try {
      const activeFilters = Object.entries(filters).reduce(
        (acc, [key, value]) => {
          if (value) acc[key] = value;
          return acc;
        },
        {},
      );

      const data = await getAllHouses(currentPage, activeFilters);
      setHouses(data?.results || []);
      setTotalPages(Math.ceil((data?.count || 0) / 10));
    } catch (error) {
      console.error("Error fetching houses:", error);
      toast?.error("Failed to load houses");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data?.results || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleFilterChange = (name, value) =>
    setFilters({ ...filters, [name]: value });

  const handleApplyFilters = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchHouses();
    setShowFilters(false);
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      category: "",
      min_price: "",
      max_price: "",
      location: "",
    });
    setCurrentPage(1);
    fetchHouses();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category_ids") {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
        Number.parseInt(option.value),
      );
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const openModal = (type, house = null) => {
    setModalType(type);
    setSelectedHouse(house);
    setFormData(
      type === "addHouse"
        ? {
            title: "",
            description: "",
            location: "",
            price: "",
            images: "",
            category_ids: [],
          }
        : {
            title: house.title,
            description: house.description,
            location: house.location,
            price: house.price,
            images: house.images,
            category_ids: house.categories?.map((cat) => cat.id) || [],
          },
    );
    setShowModal(true);
  };

  const handleSubmit = async () => {
    try {
      if (modalType === "addHouse") {
        await createHouse(formData);
        toast?.success("House created successfully");
      } else {
        await updateHouse(selectedHouse.id, formData);
        toast?.success("House updated successfully");
      }
      fetchHouses();
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast?.error("Failed to submit form");
    }
  };

  const handleApproveHouse = async (id) => {
    try {
      await approveHouse(id);
      setHouses(
        houses.map((house) =>
          house.id === id ? { ...house, approved: true } : house,
        ),
      );
      toast?.success("House approved successfully");
    } catch (error) {
      console.error("Error approving house:", error);
      toast?.error("Failed to approve house");
    }
  };

  const activeFilterCount = Object.values(filters).filter(
    (value) => value,
  ).length;

  return (
    <>
      <Card>
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Manage Houses
          </h3>
          <div className="flex flex-col gap-3 sm:flex-row">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchHouses();
              }}
              className="flex"
            >
              <Input
                placeholder="Search houses..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none">
                <Search size={18} />
              </Button>
            </form>
            <Button
              variant="outline"
              className="relative whitespace-nowrap"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="mr-1" /> Filters
              {activeFilterCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-medium text-white">
                  {activeFilterCount}
                </span>
              )}
            </Button>
            <Button
              onClick={() => openModal("addHouse")}
              className="whitespace-nowrap"
            >
              <Plus size={18} className="mr-1" /> Add House
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <form onSubmit={handleApplyFilters}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <Select
                  label="Category"
                  name="category"
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                  options={[
                    { value: "", label: "All Categories" },
                    ...categories.map((cat) => ({
                      value: cat.id,
                      label: cat.name,
                    })),
                  ]}
                />
                <Input
                  label="Min Price"
                  name="min_price"
                  type="number"
                  value={filters.min_price}
                  onChange={(e) =>
                    handleFilterChange("min_price", e.target.value)
                  }
                  placeholder="Min price"
                />
                <Input
                  label="Max Price"
                  name="max_price"
                  type="number"
                  value={filters.max_price}
                  onChange={(e) =>
                    handleFilterChange("max_price", e.target.value)
                  }
                  placeholder="Max price"
                />
                <Input
                  label="Location"
                  name="location"
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                  placeholder="City, state..."
                />
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClearFilters}
                >
                  <X size={16} className="mr-1" /> Clear
                </Button>
                <Button type="submit">Apply Filters</Button>
              </div>
            </form>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">House</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="min-h-[200px]">
              {houses.map((house) => (
                <tr key={house.id} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <img
                        src={
                          house.images || "https://i.ibb.co/VWgQBg65/house.jpg"
                        }
                        alt={house.title}
                        className="mr-2 h-10 w-10 rounded object-cover"
                      />
                      <span className="line-clamp-1 font-medium text-gray-900 dark:text-white">
                        {house.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {house.location}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    ${Number.parseFloat(house.price).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {house.owner_name}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        house.approved
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {house.approved ? "Approved" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/houses/${house.id}`}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <button>View</button>
                      </Link>
                      <button
                        onClick={() => openModal("editHouse", house)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Edit size={18} />
                      </button>
                      {!house.approved && (
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleApproveHouse(house.id)}
                        >
                          Approve
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {houses.length === 0 && !loading && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
                  >
                    No houses found. Try adjusting your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {loading && (
            <div className="flex items-center justify-center py-8">
              <Spinner size="lg" />
            </div>
          )}
        </div>

        {houses.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-6"
          />
        )}
      </Card>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalType === "addHouse" ? "Add New House" : "Edit House"}
        size="lg"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter house title"
            required
          />
          <Input
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter location"
            required
          />
          <Input
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter price per day"
            required
          />
          <Select
            label="Categories"
            name="category_ids"
            value={formData.category_ids}
            onChange={handleInputChange}
            multiple
            options={categories.map((cat) => ({
              value: cat.id,
              label: cat.name,
            }))}
          />
        </div>
        <Textarea
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter house description"
          className="mt-4"
          required
        />
        <Input
          label="Images (comma separated URLs)"
          name="images"
          value={formData.images}
          onChange={handleInputChange}
          placeholder="Enter image URLs separated by commas"
          className="mt-4"
        />
        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {modalType === "addHouse" ? "Create House" : "Update House"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default HousesManagement;
