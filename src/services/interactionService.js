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

// Add a house to favorites
export const addToFavorites = async (houseId) => {
  try {
    const response = await api.post(
      `${API_ENDPOINTS.FAVORITES}${houseId}/add/`,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to add to favorites" };
  }
};

// Remove a house from favorites
export const removeFromFavorites = async (houseId) => {
  try {
    const response = await api.delete(
      `${API_ENDPOINTS.FAVORITES}${houseId}/remove/`,
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || { message: "Failed to remove from favorites" }
    );
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

// // Accept a rent request (owner or admin)
// export const acceptRentRequest = async (requestId) => {
//   try {
//     const response = await api.post(`${API_ENDPOINTS.RENT_REQUESTS}${requestId}/accept/`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { message: "Failed to accept rent request" }
//   }
// }

// // Reject a rent request (owner or admin)
// export const rejectRentRequest = async (requestId) => {
//   try {
//     const response = await api.post(`${API_ENDPOINTS.RENT_REQUESTS}${requestId}/reject/`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { message: "Failed to reject rent request" }
//   }
// }

// // Process payment for a rent request
// export const processPayment = async (requestId, paymentData) => {
//   try {
//     const response = await api.post(`${API_ENDPOINTS.RENT_REQUESTS}${requestId}/pay/`, paymentData)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { message: "Failed to process payment" }
//   }
// }

// // Get all favorites for the current user
// export const getFavorites = async (page = 1) => {
//   try {
//     const response = await api.get(`${API_ENDPOINTS.FAVORITES}?page=${page}`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { message: "Failed to fetch favorites" }
//   }
// }

// // Add a house to favorites
// export const addToFavorites = async (houseId) => {
//   try {
//     const response = await api.post(`${API_ENDPOINTS.FAVORITES}${houseId}/add/`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { message: "Failed to add to favorites" }
//   }
// }

// // Remove a house from favorites
// export const removeFromFavorites = async (houseId) => {
//   try {
//     const response = await api.delete(`${API_ENDPOINTS.FAVORITES}${houseId}/remove/`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { message: "Failed to remove from favorites" }
//   }
// }
