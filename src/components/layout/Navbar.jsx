
import { Clock, Heart, Home, LogOut, Menu, Search, Settings, User, X } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NAV_LINKS } from "../../constants/index.jsx"
import { getCurrentUser, isAdmin, isAuthenticated, logout } from "../../services/authService"
import Button from "../ui/Button.jsx"
import ThemeToggler from "../ui/ThemeToggler.jsx"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const user = getCurrentUser()
  const authenticated = isAuthenticated()
  const admin = isAdmin()



  const handleLogout = () => {
    logout()
    navigate("/login")
    setIsUserMenuOpen(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/houses?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setIsOpen(false)
    }
  }

  const handleUserMenuItemClick = (path) => {
    navigate(path)
    setIsUserMenuOpen(false)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Home className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">RentEase</span>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search houses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggler />

            {authenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  <img
                    src={user?.image || "https://i.ibb.co/qMWG0D1/user-avatar.png"}
                    alt="User"
                    className="h-8 w-8 rounded-full object-cover border-2 border-purple-500"
                  />
                  <span className="font-medium">{user?.username}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user?.email}</p>
                    </div>

                    <button
                      onClick={() => handleUserMenuItemClick("/dashboard")}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <User size={16} className="mr-2" />
                      Dashboard
                    </button>

                    <button
                      onClick={() => handleUserMenuItemClick("/profile")}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Settings size={16} className="mr-2" />
                      Profile Settings
                    </button>

                    <button
                      onClick={() => handleUserMenuItemClick("/favorites")}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Heart size={16} className="mr-2" />
                      My Favorites
                    </button>

                    <button
                      onClick={() => handleUserMenuItemClick("/rent-requests")}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Clock size={16} className="mr-2" />
                      My Rent Requests
                    </button>

                    {admin && (
                      <>
                        <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                        <button
                          onClick={() => handleUserMenuItemClick("/admin")}
                          className="flex items-center w-full px-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Settings size={16} className="mr-2" />
                          Admin Dashboard
                        </button>
                      </>
                    )}

                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>

                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
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
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggler className="mr-2" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search houses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </form>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {authenticated ? (
              <>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <div className="flex items-center px-3 py-2">
                    <img
                      src={user?.image || "https://i.ibb.co/qMWG0D1/user-avatar.png"}
                      alt="User"
                      className="h-8 w-8 rounded-full object-cover border-2 border-purple-500"
                    />
                    <span className="ml-3 font-medium text-gray-700 dark:text-gray-300">{user?.username}</span>
                  </div>

                  <Link
                    to="/dashboard"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={18} className="mr-2" />
                    Dashboard
                  </Link>

                  <Link
                    to="/profile"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings size={18} className="mr-2" />
                    Profile Settings
                  </Link>

                  <Link
                    to="/favorites"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart size={18} className="mr-2" />
                    My Favorites
                  </Link>

                  <Link
                    to="/rent-requests"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <Clock size={18} className="mr-2" />
                    My Rent Requests
                  </Link>

                  {admin && (
                    <Link
                      to="/admin"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings size={18} className="mr-2" />
                      Admin Dashboard
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 flex flex-col space-y-2 px-3">
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
  )
}

export default Navbar

