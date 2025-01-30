import axios from "axios";
import React, { useState } from "react";
import { FaCheck, FaPlus, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { backEndApi } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../ui/loadings/LoadingSpinner";

export default function AdminDashboard() {
  const token = localStorage.getItem("token");
  const [refresh, setRefresh] = useState(false);

  const url = `${backEndApi}/house/admin-house-list/`;
  const { data, loading } = useFetch(
    url,
    { headers: { Authorization: `Token ${token}` } },
    [refresh],
  );

  const onRefresh = () => setRefresh(!refresh);

  const handleApproveAdvertisement = async (houseId) => {
    try {
      await axios.post(
        `${backEndApi}/house/approve-advertisement/`,
        { house_id: houseId },
        { headers: { Authorization: `Token ${token}` } },
      );
      toast.success("Advertisement Approved!");
      onRefresh();
    } catch (error) {
      toast.error("Failed to approve advertisement.");
    }
  };
  const handleAddCategory = async (category) => {
    try {
      const response = await axios.post(
        `${backEndApi}/house/category/`, // Updated endpoint
        {
          name: category,
          slug: category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        },
      );
      toast.success("Category added successfully!");
      if (typeof onRefresh === "function") {
        onRefresh();
      }
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category. Please try again.");
    }
  };

  const handleDeleteHouse = async (houseId) => {
    try {
      await axios.delete(`${backEndApi}/house/list/${houseId}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toast.success("House deleted successfully!");
      if (typeof onRefresh === "function") {
        onRefresh();
      }
    } catch (error) {
      toast.error("Failed to delete house. Admin access required.");
    }
  };
  if (loading) return <Loading />;

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header and Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg p-4 shadow dark:bg-gray-800 dark:text-white">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-sm">
            Manage houses, categories, and approvals.
          </p>
        </div>
        <div className="rounded-lg p-4 shadow dark:bg-gray-800 dark:text-white">
          <h3 className="text-base font-semibold">Total Houses</h3>
          <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
            {data?.length || 0}
          </p>
        </div>
        <div className="rounded-lg p-4 shadow dark:bg-gray-800 dark:text-white">
          <h2 className="mb-2 text-base font-semibold">Add Category</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const category = e.target.category.value.trim();
              if (category) handleAddCategory(category);
              e.target.reset();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              className="w-full rounded border p-2 text-sm dark:border-gray-600 dark:bg-gray-700"
            />
            <button
              type="submit"
              className="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
            >
              <FaPlus className="mr-1 inline" />
              Add
            </button>
          </form>
        </div>
      </div>

      {/* Houses List */}
      <div className="rounded-lg shadow dark:bg-gray-800 dark:text-white">
        <div className="border-b p-4 dark:border-gray-700">
          <h2 className="text-lg font-semibold">All Houses</h2>
        </div>
        <div className="grid grid-cols-1 divide-y dark:divide-gray-700 md:grid-cols-2 lg:grid-cols-2">
          {data?.map((item) => (
            <div
              key={item.house.id}
              className="flex items-start justify-between p-4"
            >
              <div className="flex items-start space-x-3">
                <img
                  src={item.house.image}
                  alt={item.house.title}
                  className="h-20 w-20 rounded-lg object-cover"
                />
                <div className="space-y-1">
                  <h3 className="font-medium">{item.house.title}</h3>
                  <p className="text-xs text-gray-500">{item.house.location}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-400">
                    Owner: {item.house.owner?.user?.first_name}{" "}
                    {item.house.owner?.user?.last_name}
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-400">
                    Email: {item.house.owner?.user?.email}
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    Status:{" "}
                    <span
                      className={`${
                        item.is_approved
                          ? item.is_rented
                            ? "text-red-600"
                            : "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {item.is_approved
                        ? item.is_rented
                          ? "Sold"
                          : "Available"
                        : "Not Advertised"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleApproveAdvertisement(item.house.id)}
                  disabled={item.is_approved}
                  className={`rounded px-3 py-1 text-xs ${
                    item.is_approved
                      ? "cursor-not-allowed bg-gray-300 text-gray-600"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <FaCheck className="mr-1 inline" />
                  {item.is_approved ? "Approved" : "Approve"}
                </button>
                <button
                  onClick={() => handleDeleteHouse(item.house.id)}
                  className="rounded bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-700"
                >
                  <FaTrashAlt className="mr-1 inline" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
