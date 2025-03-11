import { useState } from "react"
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Footer from "./components/layout/Footer.jsx"
import Navbar from "./components/layout/Navbar.jsx"
import { ThemeProvider } from "./contexts/ThemeContext.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import HouseDetailPage from "./pages/HouseDetailPage.jsx"
import HousesPage from "./pages/HousesPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx"
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx"
import UserDashboard from "./pages/dashboard/UserDashboard.jsx"
import ChangePasswordPage from "./pages/profile/ChangePasswordPage.jsx"
import ProfileEditPage from "./pages/profile/ProfileEditPage.jsx"
import { isAdmin, isAuthenticated } from "./services/authService"

// Toast container for notifications
const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
          flex items-center p-4 mb-4 rounded-lg shadow border
          ${toast.type === "success" ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800" : ""}
          ${toast.type === "error" ? "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800" : ""}
          ${toast.type === "info" ? "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800" : ""}
          ${toast.type === "warning" ? "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800" : ""}
        `}
          role="alert"
        >
          <div className="text-sm font-normal text-gray-800 dark:text-gray-200">{toast.message}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-gray-500 hover:text-gray-700 rounded-lg p-1.5 inline-flex h-8 w-8 focus:outline-none"
            onClick={() => removeToast(toast.id)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}

// Protected Route component
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const authenticated = isAuthenticated()
  const admin = isAdmin()

  if (!authenticated) {
    return <Navigate to="/login" replace />
  }

  if (requireAdmin && !admin) {
    return <Navigate to="/" replace />
  }

  return children
}

const App = () => {
  const [toasts, setToasts] = useState([])

  // Add toast notification
  const addToast = (message, type = "info", duration = 3000) => {
    const id = Date.now()
    setToasts((prevToasts) => [...prevToasts, { id, message, type }])

    // Auto remove toast after duration
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  // Remove toast notification
  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  // Global toast context
  window.toast = {
    success: (message, duration) => addToast(message, "success", duration),
    error: (message, duration) => addToast(message, "error", duration),
    info: (message, duration) => addToast(message, "info", duration),
    warning: (message, duration) => addToast(message, "warning", duration),
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/houses" element={<HousesPage />} />
              <Route path="/houses/:id" element={<HouseDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password/:uidb64/:token" element={<ResetPasswordPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* User Dashboard */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Admin Dashboard */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Profile Routes */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile/edit"
                element={
                  <ProtectedRoute>
                    <ProfileEditPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/change-password"
                element={
                  <ProtectedRoute>
                    <ChangePasswordPage />
                  </ProtectedRoute>
                }
              />

              {/* Favorites Route */}
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Rent Requests Route */}
              <Route
                path="/rent-requests"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              {/* 404 Page */}
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </main>
          <Footer />

          {/* Toast Container */}
          <ToastContainer toasts={toasts} removeToast={removeToast} />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

