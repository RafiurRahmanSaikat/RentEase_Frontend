import {
  Clock,
  Heart,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import { getCurrentUser, logout } from "../../services/authService";
import { Button, ThemeToggler } from "../ui";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const user = getCurrentUser();

  // console.log(user);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsUserMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/houses?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  const handleUserMenuItemClick = (path) => {
    navigate(path);
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-zinc-200/60 shadow-md backdrop-blur-xl dark:bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <img className="h-8 w-8" src="/logo.png" alt="" />

              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                RentEase
              </span>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="mx-4 hidden max-w-md flex-1 items-center md:flex">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search houses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-zinc-800 dark:text-gray-100"
                />
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-4 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                {link.name}
              </Link>
            ))}

            {user && (
              <Link
                to={user.role == "admin" ? "/admin" : "/dashboard"}
                className="rounded-md px-3 py-2 text-sm font-medium hover:text-purple-500 dark:hover:text-purple-500"
              >
                Dashboard
              </Link>
            )}

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <img
                    src={
                      user?.image || "https://i.ibb.co/qMWG0D1/user-avatar.png"
                    }
                    alt="User"
                    className="h-8 w-8 rounded-full border-2 border-purple-500 object-cover"
                  />
                  <span className="font-medium">{user?.username}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-56 rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-700">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Signed in as
                      </p>
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {user?.email}
                      </p>
                    </div>

                    <button
                      onClick={() => handleUserMenuItemClick("/profile")}
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      <Settings size={16} className="mr-2" />
                      Profile Settings
                    </button>

                    <button
                      onClick={() => handleUserMenuItemClick("/favorites")}
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      <Heart size={16} className="mr-2" />
                      My Favorites
                    </button>

                    <div className="my-1 border-t border-gray-200 dark:border-gray-700"></div>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Register</Button>
                </Link>
              </div>
            )}
            <ThemeToggler />
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggler className="mr-2" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-white shadow-lg dark:bg-gray-900 md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search houses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
            </form>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {user ? (
              <>
                <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div className="flex items-center px-3 py-2">
                    <img
                      src={
                        user?.image ||
                        "https://i.ibb.co/qMWG0D1/user-avatar.png"
                      }
                      alt="User"
                      className="h-8 w-8 rounded-full border-2 border-purple-500 object-cover"
                    />
                    <span className="ml-3 font-medium text-gray-700 dark:text-gray-300">
                      {user?.username}
                    </span>
                  </div>

                  <Link
                    to="/dashboard"
                    className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={18} className="mr-2" />
                    Dashboard
                  </Link>

                  <Link
                    to="/profile"
                    className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings size={18} className="mr-2" />
                    Profile Settings
                  </Link>

                  <Link
                    to="/favorites"
                    className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart size={18} className="mr-2" />
                    My Favorites
                  </Link>

                  <Link
                    to="/rent-requests"
                    className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Clock size={18} className="mr-2" />
                    My Rent Requests
                  </Link>

                  {user.role == "admin" && (
                    <Link
                      to="/admin"
                      className="flex items-center rounded-md px-3 py-2 text-base font-medium text-purple-600 hover:bg-gray-100 dark:text-purple-400 dark:hover:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings size={18} className="mr-2" />
                      Admin Dashboard
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-800"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-4 flex flex-col space-y-2 border-t border-gray-200 px-3 pt-4 dark:border-gray-700">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" fullWidth>
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button fullWidth>Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
