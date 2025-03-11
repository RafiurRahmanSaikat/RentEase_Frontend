import api from "./api"
import { API_ENDPOINTS } from "../constants"

// Register a new user
export const register = async (userData) => {
  try {
    const response = await api.post(API_ENDPOINTS.REGISTER, userData)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" }
  }
}

// Login user
export const login = async (credentials) => {
  try {
    const response = await api.post(API_ENDPOINTS.LOGIN, credentials)

    // Store tokens and user data
    localStorage.setItem("access_token", response.data.access)
    localStorage.setItem("refresh_token", response.data.refresh)

    // Get user profile
    const userProfile = await getUserProfile()
    localStorage.setItem("user", JSON.stringify(userProfile))

    return { tokens: response.data, user: userProfile }
  } catch (error) {
    throw error.response?.data || { message: "Login failed" }
  }
}

// Logout user
export const logout = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  localStorage.removeItem("user")
}

// Get user profile
export const getUserProfile = async () => {
  try {
    const response = await api.get(API_ENDPOINTS.PROFILE)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Failed to get user profile" }
  }
}

// Update user profile
export const updateUserProfile = async (userData) => {
  try {
    const response = await api.patch(API_ENDPOINTS.PROFILE, userData)

    // Update stored user data
    localStorage.setItem("user", JSON.stringify(response.data))

    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Failed to update profile" }
  }
}

// Change password
export const changePassword = async (passwordData) => {
  try {
    const response = await api.post(API_ENDPOINTS.CHANGE_PASSWORD, passwordData)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Failed to change password" }
  }
}

// Request password reset
export const requestPasswordReset = async (email) => {
  try {
    const response = await api.post(API_ENDPOINTS.RESET_PASSWORD, { email })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Failed to request password reset" }
  }
}

// Confirm password reset
export const confirmPasswordReset = async (uidb64, token, passwordData) => {
  try {
    const response = await api.post(`${API_ENDPOINTS.RESET_PASSWORD_CONFIRM}${uidb64}/${token}/`, passwordData)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Failed to reset password" }
  }
}

// Verify email
export const verifyEmail = async (token) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.EMAIL_VERIFY}?token=${token}`)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: "Failed to verify email" }
  }
}

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem("access_token")
}

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

// Check if user is admin
export const isAdmin = () => {
  const user = getCurrentUser()
  return user && user.role === "admin"
}

