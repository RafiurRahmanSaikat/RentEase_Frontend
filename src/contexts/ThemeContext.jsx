import { createContext, useContext, useEffect, useState } from "react";

// Create the theme context
const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  // Load theme preference on initial mount
  useEffect(() => {
    // Check if window is available (for SSR handling)
    if (typeof window !== "undefined") {
      // Check if theme preference exists in localStorage
      const savedTheme = localStorage.getItem("darkMode");

      if (savedTheme !== null) {
        // If preference exists, use it
        setDarkMode(savedTheme === "true");
      } else {
        // Otherwise, check the system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(prefersDark);
      }
    }

    // End loading after preferences are loaded
    setLoading(false);
  }, []);

  // Update document class and localStorage when darkMode changes
  useEffect(() => {
    // Only set the theme if it's not in the loading state
    if (!loading) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // Save preference to localStorage
      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode, loading]);

  // Toggle function to change dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // If still loading, don't render anything
  if (loading) {
    return null; // Or a loading spinner if you prefer
  }

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

// Custom hook for using the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
