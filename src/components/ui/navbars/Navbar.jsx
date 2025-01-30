import { Configuration01Icon } from "hugeicons-react";
import {
  Home,
  LogOutIcon,
  Menu,
  Moon,
  ScanFace,
  Sun,
  UserRoundPlus,
} from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const Navbar = ({ onThemeToggle, currentTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, LogOut } = useContext(AuthContext);

  const navLinks = isAuthenticated
    ? [
        {
          href: "/",
          icon: <Home className="h-4 w-4" />,
          label: "Home",
        },
        {
          href: "/dashboard",
          icon: <Configuration01Icon className="h-4 w-4" />,
          label: "Dashboard",
        },
        {
          href: "#",
          icon: <LogOutIcon className="h-4 w-4" />,
          label: "Logout",
          action: LogOut,
        },
      ]
    : [
        {
          href: "/",
          icon: <Home className="h-4 w-4" />,
          label: "Home",
        },
        {
          href: "/login",
          icon: <ScanFace className="h-4 w-4" />,
          label: "Login",
        },
        {
          href: "/signup",
          icon: <UserRoundPlus className="h-4 w-4" />,
          label: "Register",
        },
      ];

  return (
    <nav className="relative mx-auto mt-4 w-[90vw] rounded-3xl bg-white/5 shadow-lg backdrop-blur-3xl">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
              RentEase
            </span>
          </Link>
          {/* <Link to={"/"} className="me-3.5 text-2xl font-bold">
            Rent Ease
          </Link> */}
        </div>

        <div className="hidden md:flex md:items-center md:space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={link.action}
              className="inline-flex items-center rounded-full px-4 py-2 hover:bg-violet-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
            >
              {link.icon}
              <span className="ml-2">{link.label}</span>
            </Link>
          ))}
          <button
            onClick={onThemeToggle}
            className="rounded-lg p-2 hover:bg-purple-400 dark:text-white"
          >
            {currentTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full p-2 hover:bg-white md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={link.action}
              className="flex w-full items-center rounded-lg px-4 py-2 text-sm hover:bg-violet-500 hover:text-white dark:text-white"
            >
              {link.icon}
              <span className="ml-2">{link.label}</span>
            </Link>
          ))}{" "}
          <button
            onClick={onThemeToggle}
            className="rounded-lg p-2 hover:bg-purple-400 dark:text-white"
          >
            {currentTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
