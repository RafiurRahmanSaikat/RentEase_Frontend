import { PencilIcon, Trash2Icon } from "lucide-react";
import React, { useContext, useState } from "react";
import { backEndApi } from "../../../constants";
import AuthContext from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";

const MyHouses = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const [refresh, setRefresh] = useState(false);

  const { data: houses, loading } = useFetch(
    `${backEndApi}/house/my-houses/`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
    [refresh],
  );

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this house?")) {
      try {
        const response = await fetch(`${backEndApi}/house/${id}/`, {
          method: "DELETE",
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        if (response.ok) {
          setRefresh((prev) => !prev);
        }
      } catch (error) {
        console.error("Error deleting house:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-100">
          My Houses
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {houses?.map((house) => (
          <div
            key={house.id}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <img
              src={house.image}
              alt={house.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-600">
                {house.title}
              </h3>
              <p className="text-gray-600">{house.location}</p>
              <p className="mt-2 font-semibold text-blue-600">${house.price}</p>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`rounded px-2 py-1 text-sm ${
                    house.is_advertised
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {house.is_advertised ? "Active" : "Pending"}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => alert(house.id)}
                    className="rounded p-2 text-blue-600 hover:bg-blue-50"
                  >
                    <PencilIcon size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(house.id)}
                    className="rounded p-2 text-red-600 hover:bg-red-50"
                  >
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHouses;
