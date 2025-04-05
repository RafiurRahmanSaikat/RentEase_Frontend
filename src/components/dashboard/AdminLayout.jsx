import { Clock, Home, LayoutDashboard, Tag, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Card from "../ui/Card";

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  // Set active tab based on URL path
  useEffect(() => {
    const path = location.pathname.split("/")[2] || "overview";
    setActiveTab(path);
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/admin/${tab === "overview" ? "" : tab}`);
  };

  return (
    <div className="mx-auto max-w-[90vw] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <nav className="space-y-1">
              <button
                onClick={() => handleTabChange("overview")}
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                  activeTab === "overview"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <LayoutDashboard size={18} className="mr-3" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => handleTabChange("users")}
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                  activeTab === "users"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Users size={18} className="mr-3" />
                <span>Users</span>
              </button>

              <button
                onClick={() => handleTabChange("houses")}
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                  activeTab === "houses"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Home size={18} className="mr-3" />
                <span>Houses</span>
              </button>

              <button
                onClick={() => handleTabChange("rent-requests")}
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                  activeTab === "rent-requests"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Clock size={18} className="mr-3" />
                <span>Rent Requests</span>
              </button>

              <button
                onClick={() => handleTabChange("categories")}
                className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                  activeTab === "categories"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <Tag size={18} className="mr-3" />
                <span>Categories</span>
              </button>
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
