import { Clock, Heart, Home, LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import Spinner from "../../components/ui/Spinner.jsx";
import { getUserProfile, logout } from "../../services/authService";
import {
  getFavorites,
  getRentRequests,
} from "../../services/interactionService";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);
  const [rentRequests, setRentRequests] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  // Set active tab based on URL path
  useEffect(() => {
    if (location.pathname === "/profile") {
      setActiveTab("profile");
    } else if (location.pathname === "/favorites") {
      setActiveTab("favorites");
    } else if (location.pathname === "/rent-requests") {
      setActiveTab("rentRequests");
    } else {
      setActiveTab("overview");
    }
  }, [location.pathname]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Use Promise.all to fetch data in parallel
        const [userProfile, rentRequestsData, favoritesData] =
          await Promise.all([
            getUserProfile(),
            getRentRequests(),
            getFavorites(),
          ]);

        setUser(userProfile);
        setRentRequests(rentRequestsData?.results || []);
        setFavorites(favoritesData?.results || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast?.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  const renderTabContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-20">
          <Spinner size="lg" />
        </div>
      );
    }

    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Rent Requests</h3>
                    <p className="text-2xl font-bold">
                      {rentRequests?.length || 0}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white">
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Favorites</h3>
                    <p className="text-2xl font-bold">
                      {favorites?.length || 0}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-neutral-50/20 p-3">
                    <Home size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Approved Requests</h3>
                    <p className="text-2xl font-bold">
                      {rentRequests?.filter((req) => req.status === "approved")
                        ?.length || 0}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Rent Requests
                </h3>
                {rentRequests?.length > 0 ? (
                  <div className="space-y-4">
                    {rentRequests.slice(0, 3).map((request) => (
                      <div
                        key={request.id}
                        className="flex items-center rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            House #{request.house}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Duration: {request.duration} days • Status:
                            <span
                              className={`ml-1 font-medium ${
                                request.status === "approved"
                                  ? "text-green-600 dark:text-green-400"
                                  : request.status === "rejected"
                                    ? "text-red-600 dark:text-red-400"
                                    : "text-yellow-600 dark:text-yellow-400"
                              }`}
                            >
                              {request.status.charAt(0).toUpperCase() +
                                request.status.slice(1)}
                            </span>
                          </p>
                        </div>
                        <div>
                          {request.status === "approved" && !request.paid && (
                            <Button size="sm" variant="success">
                              Pay Now
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">
                    No rent requests yet.
                  </p>
                )}
                {rentRequests?.length > 3 && (
                  <div className="mt-4">
                    <Link to="/rent-requests">
                      <Button variant="outline" fullWidth>
                        View All Requests
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>

              <Card>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Favorites
                </h3>
                {favorites?.length > 0 ? (
                  <div className="space-y-4">
                    {favorites.slice(0, 3).map((favorite) => (
                      <div
                        key={favorite.id}
                        className="flex items-center rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                      >
                        <img
                          src={
                            favorite.house?.images ||
                            "https://i.ibb.co/VWgQBg65/house.jpg"
                          }
                          alt={favorite.house?.title}
                          className="mr-4 h-16 w-16 rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {favorite.house?.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {favorite.house?.location}
                          </p>
                          <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            $
                            {Number.parseFloat(
                              favorite.house?.price || 0,
                            ).toLocaleString()}{" "}
                            / day
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">
                    No favorites yet.
                  </p>
                )}
                {favorites?.length > 3 && (
                  <div className="mt-4">
                    <Link to="/favorites">
                      <Button variant="outline" fullWidth>
                        View All Favorites
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>
            </div>
          </div>
        );

      case "rentRequests":
        return (
          <Card>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              All Rent Requests
            </h3>
            {rentRequests?.length > 0 ? (
              <div className="space-y-4">
                {rentRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                  >
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          House #{request.house}
                        </h4>
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            request.status === "approved"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : request.status === "rejected"
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}
                        >
                          {request.status.charAt(0).toUpperCase() +
                            request.status.slice(1)}
                        </span>
                      </div>
                      <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                        {request.message}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock size={14} className="mr-1" />
                        <span>Duration: {request.duration} days</span>
                        <span className="mx-2">•</span>
                        <span>
                          Created:{" "}
                          {new Date(request.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div>
                      {request.status === "approved" && !request.paid && (
                        <Button size="sm" variant="success">
                          Pay Now
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No rent requests yet.
              </p>
            )}
          </Card>
        );

      case "favorites":
        return (
          <Card>
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              All Favorites
            </h3>
            {favorites?.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {favorites.map((favorite) => (
                  <Link
                    key={favorite.id}
                    to={`/houses/${favorite.house?.id}`}
                    className="block"
                  >
                    <Card className="h-full transition-shadow duration-200 hover:shadow-lg">
                      <div className="relative h-40">
                        <img
                          src={
                            favorite.house?.images ||
                            "https://i.ibb.co/VWgQBg65/house.jpg"
                          }
                          alt={favorite.house?.title}
                          className="h-full w-full rounded-t-lg object-cover"
                        />
                        <div className="absolute right-2 top-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              // Handle remove from favorites
                            }}
                            className="rounded-full bg-neutral-50 p-1.5 text-red-500 shadow-md transition-colors duration-200 hover:bg-red-500 hover:text-white"
                          >
                            <Heart size={16} className="fill-current" />
                          </button>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="line-clamp-1 font-medium text-gray-900 dark:text-white">
                          {favorite.house?.title}
                        </h4>
                        <p className="line-clamp-1 text-sm text-gray-500 dark:text-gray-400">
                          {favorite.house?.location}
                        </p>
                        <p className="mt-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                          $
                          {Number.parseFloat(
                            favorite.house?.price || 0,
                          ).toLocaleString()}{" "}
                          / day
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No favorites yet.
              </p>
            )}
          </Card>
        );

      case "profile":
        return (
          <Card>
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              My Profile
            </h3>
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <div className="flex w-full flex-col items-center md:w-1/3">
                <div className="relative">
                  <img
                    src={
                      user?.image || "https://i.ibb.co/qMWG0D1/user-avatar.png"
                    }
                    alt={user?.username}
                    className="h-32 w-32 rounded-full border-4 border-purple-200 object-cover dark:border-purple-900"
                  />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {user?.first_name} {user?.last_name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  @{user?.username}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {user?.role || "User"}
                </p>
              </div>

              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {user?.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {user?.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Address
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {user?.address}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email Verified
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {user?.is_email_verified ? "Yes" : "No"}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/profile/edit">
                    <Button>Edit Profile</Button>
                  </Link>
                  <Link to="/change-password">
                    <Button variant="outline">Change Password</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        );

      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="mx-auto max-w-[90vw] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
        {activeTab === "profile"
          ? "My Profile"
          : activeTab === "rentRequests"
            ? "My Rent Requests"
            : activeTab === "favorites"
              ? "My Favorites"
              : "My Dashboard"}
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <nav className="space-y-1">
              <Link
                to="/dashboard"
                className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${
                  activeTab === "overview"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Home size={18} className="mr-3" />
                <span>Overview</span>
              </Link>

              <Link
                to="/rent-requests"
                className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${
                  activeTab === "rentRequests"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Clock size={18} className="mr-3" />
                <span>Rent Requests</span>
              </Link>

              <Link
                to="/favorites"
                className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${
                  activeTab === "favorites"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Heart size={18} className="mr-3" />
                <span>Favorites</span>
              </Link>

              <Link
                to="/profile"
                className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${
                  activeTab === "profile"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <User size={18} className="mr-3" />
                <span>My Profile</span>
              </Link>

              <hr className="border-gray-200 dark:border-gray-700" />

              <button
                onClick={handleLogout}
                className="flex w-full items-center rounded-lg px-4 py-3 text-left text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                <LogOut size={18} className="mr-3" />
                <span>Logout</span>
              </button>
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default UserDashboard;
