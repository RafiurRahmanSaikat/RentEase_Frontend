import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { ThemeProvider } from "../contexts/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
        <Navbar />
        <main className="flex-grow">
          <Outlet /> {/* This is where child routes will be rendered */}
        </main>
        <Footer />

        {/* Sonner Toast */}
        <Toaster
          position="bottom-right"
          richColors
          className="toaster group"
          toastOptions={{
            classNames: {
              toast:
                "group toast group-[.toaster]:bg-white group-[.toaster]:text-zinc-950 group-[.toaster]:border-zinc-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-zinc-950 dark:group-[.toaster]:text-zinc-50 dark:group-[.toaster]:border-zinc-800",
              description:
                "group-[.toast]:text-zinc-500 dark:group-[.toast]:text-zinc-400",
              actionButton:
                "group-[.toast]:bg-zinc-900 group-[.toast]:text-zinc-50 dark:group-[.toast]:bg-zinc-50 dark:group-[.toast]:text-zinc-900",
              cancelButton:
                "group-[.toast]:bg-zinc-100 group-[.toast]:text-zinc-500 dark:group-[.toast]:bg-zinc-800 dark:group-[.toast]:text-zinc-400",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
