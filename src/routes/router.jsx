import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { isAdmin, isAuthenticated } from "../services/authService";

import {
  AboutPage,
  ContactPage,
  ForgotPassword,
  HomePage,
  HouseDetailPage,
  HousesPage,
  Login,
  ProfileEditPage,
  Register,
  ResetPassword,
  RootLayout,
} from "../components";

// Admin Dashboard Components
import CategoriesManagement from "../components/dashboard/CategoriesManagement";
import HousesManagement from "../components/dashboard/HousesManagement";
import Overview from "../components/dashboard/Overview";
import RentRequestsManagement from "../components/dashboard/RentRequestsManagement";
import UsersManagement from "../components/dashboard/UsersManagement";
import AdminDashboard from "../pages/dashboard/AdminDashboard";

// User Dashboard Components
import UserDashboard from "../pages/dashboard/UserDashboard";
import ChangePasswordPage from "../pages/profile/ChangePasswordPage";

// Protected Route component
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const authenticated = isAuthenticated();
  const admin = isAdmin();

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !admin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Public Routes */}
      <Route index element={<HomePage />} />
      <Route path="houses" element={<HousesPage />} />
      <Route path="houses/:id" element={<HouseDetailPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:uidb64/:token" element={<ResetPassword />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />

      {/* User Dashboard Routes */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="profile/edit"
        element={
          <ProtectedRoute>
            <ProfileEditPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="change-password"
        element={
          <ProtectedRoute>
            <ChangePasswordPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="favorites"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="rent-requests"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="my-houses"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Dashboard Routes */}
      <Route
        path="admin"
        element={
          <ProtectedRoute requireAdmin={true}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Overview />} />
        <Route path="users" element={<UsersManagement />} />
        <Route path="houses" element={<HousesManagement />} />
        <Route path="rent-requests" element={<RentRequestsManagement />} />
        <Route path="categories" element={<CategoriesManagement />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Route>,
  ),
);

export default router;
