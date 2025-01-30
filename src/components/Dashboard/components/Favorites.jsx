import axios from "axios";
import { User } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { EmptyState, Loading } from "../..";
import { backEndApi } from "../../../constants";
import AuthContext from "../../../context/AuthContext";

const Favorite = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const ids = user?.favourites || [];

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          ids.map((id) =>
            axios.get(`${backEndApi}/house/favorites_advertisements/${id}/`, {
              headers: { Authorization: `Token ${token}` },
            }),
          ),
        );
        setHouses(responses.map((response) => response.data));
      } catch (error) {
        toast.error("Failed to fetch favorite houses");
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, [ids]);

  const handleRemoveFavorite = async (adId) => {
    try {
      await axios.post(
        `${backEndApi}/account/profile/favorites/remove/${adId}/`,
        {},
        {
          headers: { Authorization: `Token ${token}` },
        },
      );
      setHouses((prev) => prev.filter((house) => house.id !== adId));
      toast.success("Removed from favorites");
    } catch (error) {
      toast.error("Failed to remove from favorites");
    }
  };

  if (loading) return <Loading />;

  if (houses.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={`min-h-screen p-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Favorite Properties</h1>
        </div>

        <div className="overflow-x-auto rounded-lg border dark:border-gray-700">
          <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className={`bg-gray-50 dark:bg-gray-800`}>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  Property
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  Categories
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  Owner
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {houses.map((house) => (
                <tr
                  key={house.id}
                  className={`group hover:bg-slate-50 dark:hover:bg-gray-800`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={house.house.image}
                        alt={house.house.title}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium dark:text-white">
                          {house.house.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                          {house.house.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {house.house.category.map((cat) => (
                        <span
                          key={cat.id}
                          className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      ${house.house.price}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        house.is_rented
                          ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200"
                          : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      {house.is_rented ? "Not Available" : "Available"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm dark:text-gray-300">
                        {house.house.owner.user.username}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {!house.is_rented && (
                        <Link
                          to={`/advertise/${house.id}`}
                          className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                          View
                        </Link>
                      )}
                      <button
                        onClick={() => handleRemoveFavorite(house.id)}
                        className="rounded-lg bg-red-100 px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
