import { BarChart, Heart, Home, LandPlot, User } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "../components";
import AuthContext from "../context/AuthContext";
import { useTheme } from "../theme/useTheme";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const DashboardLayout = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      const hamburger = document.getElementById("hamburger-menu");

      if (
        isOpen &&
        sidebar &&
        hamburger &&
        !sidebar.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const userMenuItems = [
    {
      icon: <BarChart className="h-5 w-5" />,
      label: "Overview",
      path: "/dashboard",
    },

    {
      icon: <LandPlot className="h-5 w-5" />,
      label: "Rent Request",
      path: "/dashboard/rent_request_list",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      label: "Favorites",
      path: "/dashboard/favorites",
    },
    {
      icon: <User className="h-5 w-5" />,
      label: "Profile",
      path: "/dashboard/profile",
    },
  ];

  const adminMenuItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Properties",
      path: "/dashboard",
    },
  ];

  const menuItems =
    user?.account_type === "User" ? userMenuItems : adminMenuItems;

  if (loading) return <Loading />;

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-slate-100">
      <Sidebar menuItems={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 transition-all duration-300">
        <Header
          toggleSidebar={() => setIsOpen(!isOpen)}
          toggleTheme={toggleTheme}
          isDark={isDark}
        />
        <main className="container mx-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
