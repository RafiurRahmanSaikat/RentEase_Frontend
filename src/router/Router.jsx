import { createBrowserRouter } from "react-router-dom";
import {
  AuthComponent,
  Dashboard,
  DashboardLayout,
  ErrorPage,
  Favorites,
  Home,
  HouseDetails,
  Private,
  Profile,
  RentRequest,
  RootLayout,
} from "../components";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <AuthComponent /> },
      { path: "signup", element: <AuthComponent /> },
      { path: "advertise/:advertiseId", element: <HouseDetails /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <DashboardLayout />
      </Private>
    ),

    errorElement: <ErrorPage message={"404 Not Found"} />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "rent_request_list",
        element: <RentRequest />,
      },
    ],
  },
]);

export { Router };
