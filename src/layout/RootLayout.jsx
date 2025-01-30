import { Outlet } from "react-router-dom";
import { Footer, Navbar, NoisyGridPattern } from "../components";
import { useTheme } from "../theme/useTheme";

export default function RootLayout() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <section className="flex flex-col bg-slate-50 text-black dark:bg-gray-900 dark:text-white">
      <NoisyGridPattern />
      <Navbar onThemeToggle={toggleTheme} currentTheme={isDark} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
