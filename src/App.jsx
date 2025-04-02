import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import router from "./routes/router";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
};

export default App;
