import { Home, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ menuItems, isOpen, setIsOpen }) {
  const location = useLocation();

  return (
    <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-50 w-64 transform overflow-y-auto bg-white transition-all duration-300 dark:bg-gray-800 lg:relative lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <Home className="h-5 w-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-lg font-bold text-transparent">
            RentEase
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="space-y-1 p-4">
        {menuItems.map(({ icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`group flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors ${
              location.pathname === path
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            {icon}
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
