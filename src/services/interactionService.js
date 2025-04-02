// services/interactionService.js
import { API_ENDPOINTS } from "../constants";
import api from "./api";

// Get all favorites for the current user
export const getFavorites = async (page = 1) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.FAVORITES}?page=${page}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch favorites" };
  }
};

// Add a house to favorites - with error handling
export const addToFavorites = async (houseId) => {
  try {
    const response = await api.post(
      `${API_ENDPOINTS.FAVORITES}${houseId}/add/`,
    );
    return response.data;
  } catch (error) {
    // If favorite already exists, return success instead of throwing error
    if (error.response?.data?.detail === "Favorite already exists.") {
      return { success: true, message: "Already in favorites" };
    }
    throw error.response?.data || { message: "Failed to add to favorites" };
  }
};

// Remove a house from favorites - with error handling
export const removeFromFavorites = async (houseId) => {
  try {
    const response = await api.delete(
      `${API_ENDPOINTS.FAVORITES}${houseId}/remove/`,
    );
    return response.data;
  } catch (error) {
    // If favorite not found, return success instead of throwing error
    if (error.response?.data?.detail === "Favorite not found.") {
      return { success: true, message: "Already removed from favorites" };
    }
    throw (
      error.response?.data || { message: "Failed to remove from favorites" }
    );
  }
};

// Toggle favorite (add if not in favorites, remove if in favorites)
export const toggleFavorite = async (houseId, isFavorite) => {
  if (isFavorite) {
    return removeFromFavorites(houseId);
  } else {
    return addToFavorites(houseId);
  }
};

// import api from "./api"
// import { API_ENDPOINTS } from "../constants"

// // Get all rent requests for the current user
export const getRentRequests = async (page = 1) => {
  try {
    const response = await api.get(
      `${API_ENDPOINTS.RENT_REQUESTS}?page=${page}`,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch rent requests" };
  }
};

// // Create a rent request
export const createRentRequest = async (rentRequestData) => {
  try {
    const response = await api.post(
      API_ENDPOINTS.RENT_REQUESTS,
      rentRequestData,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create rent request" };
  }
};
