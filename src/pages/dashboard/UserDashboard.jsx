import { Clock, Edit, Heart, Home, LogOut, Plus, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import Input from "../../components/ui/Input.jsx";
import Modal from "../../components/ui/Modal.jsx";
import Select from "../../components/ui/Select.jsx";
import Spinner from "../../components/ui/Spinner.jsx";
import Textarea from "../../components/ui/Textarea.jsx";
import { getUserProfile, logout } from "../../services/authService";
import {
  createHouse,
  getCategories,
  updateHouse,
} from "../../services/houseService";
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
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    images: "",
    category_ids: [],
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Set active tab based on URL path
  useEffect(() => {
    if (location.pathname === "/profile") {
      setActiveTab("profile");
    } else if (location.pathname === "/favorites") {
      setActiveTab("favorites");
    } else if (location.pathname === "/rent-requests") {
      setActiveTab("rentRequests");
    } else if (location.pathname === "/my-houses") {
      setActiveTab("myHouses");
    } else {
      setActiveTab("overview");
    }
  }, [location.pathname]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Use Promise.all to fetch data in parallel
        const [userProfile, rentRequestsData, favoritesData, categoriesData] =
          await Promise.all([
            getUserProfile(),
            getRentRequests(),
            getFavorites(),
            getCategories(),
          ]);

        setUser(userProfile);
        setRentRequests(rentRequestsData?.results || []);
        setFavorites(favoritesData?.results || []);
        setCategories(categoriesData?.results || []);
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

  const openModal = (type, house = null) => {
    setModalType(type);
    setSelectedHouse(house);

    if (type === "addHouse") {
      setFormData({
        title: "",
        description: "",
        location: "",
        price: "",
        images: "",
        category_ids: [],
      });
    } else if (type === "editHouse") {
      setFormData({
        title: house.title,
        description: house.description,
        location: house.location,
        price: house.price,
        images: house.images,
        category_ids: house.categories?.map((cat) => cat.id) || [],
      });
    }

    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "category_ids") {
      // Handle multi-select for categories
      const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
        Number.parseInt(option.value),
      );
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async () => {
    try {
      if (modalType === "addHouse") {
        await createHouse(formData);
        toast?.success("House created successfully");
      } else if (modalType === "editHouse") {
        await updateHouse(selectedHouse.id, formData);
        toast?.success("House updated successfully");
      }

      // Refresh data
      // You would need to implement a function to fetch user's houses
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast?.error("Failed to submit form");
    }
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
                          src={favorite.house?.images}
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
                          src={favorite.house?.images}
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

      case "myHouses":
        return (
          <Card>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                My Houses
              </h3>
              <Button onClick={() => openModal("addHouse")}>
                <Plus size={18} className="mr-1" /> Add House
              </Button>
            </div>

            {/* This would need to be implemented with actual user houses data */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Sample house card - replace with actual data */}
              <Card className="h-full transition-shadow duration-200 hover:shadow-lg">
                <div className="relative h-40">
                  <img
                    src="https://i.ibb.co/VWgQBg65/house.jpg"
                    alt="Sample House"
                    className="h-full w-full rounded-t-lg object-cover"
                  />
                  <div className="absolute right-2 top-2">
                    <button
                      onClick={() =>
                        openModal("editHouse", {
                          id: 1,
                          title: "Sample House",
                          description: "A beautiful sample house",
                          location: "New York",
                          price: "150.00",
                          images: "https://i.ibb.co/VWgQBg65/house.jpg",
                          categories: [],
                        })
                      }
                      className="rounded-full bg-neutral-50 p-1.5 text-blue-500 shadow-md transition-colors duration-200 hover:bg-blue-500 hover:text-white"
                    >
                      <Edit size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h4 className="line-clamp-1 font-medium text-gray-900 dark:text-white">
                      Sample House
                    </h4>
                    <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                      Pending
                    </span>
                  </div>
                  <p className="line-clamp-1 text-sm text-gray-500 dark:text-gray-400">
                    New York
                  </p>
                  <p className="mt-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                    $150.00 / day
                  </p>
                </div>
              </Card>

              {/* Empty state */}
              <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-8 text-center dark:border-gray-700">
                <Home size={48} className="mb-2 text-gray-400" />
                <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                  No houses yet
                </h3>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  Add your first house listing to start renting it out
                </p>
                <Button onClick={() => openModal("addHouse")}>
                  <Plus size={18} className="mr-1" /> Add House
                </Button>
              </div>
            </div>
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
              : activeTab === "myHouses"
                ? "My Houses"
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
                to="/my-houses"
                className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${
                  activeTab === "myHouses"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Home size={18} className="mr-3" />
                <span>My Houses</span>
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

      {/* House Modal */}
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
    </div>
  );
};

export default UserDashboard;
