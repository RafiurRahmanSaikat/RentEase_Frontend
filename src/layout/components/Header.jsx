import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Header({ toggleSidebar, toggleTheme, isDark }) {
  const [MenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700 lg:px-6">
        <button
          id="hamburger-menu"
          onClick={toggleSidebar}
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="ml-auto flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
