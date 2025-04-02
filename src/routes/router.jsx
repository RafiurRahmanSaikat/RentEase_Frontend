import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { isAdmin, isAuthenticated } from "../services/authService";

import {
  AboutPage,
  AdminDashboard,
  ChangePasswordPage,
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
  UserDashboard,
} from "../components";

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

      {/* Protected Routes */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="admin"
        element={
          <ProtectedRoute requireAdmin={true}>
            <AdminDashboard />
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

      {/* 404 Page */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Route>,
  ),
);

export default router;
