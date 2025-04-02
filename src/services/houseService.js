// services/houseService.js
import { API_ENDPOINTS } from "../constants";
import api from "./api";

// Get all houses (paginated)
export const getHouses = async (page = 1, filters = {}) => {
  try {
    let url = `${API_ENDPOINTS.HOUSES}?page=${page}`;
    if (filters.category) url += `&category=${filters.category}`;
    if (filters.minPrice) url += `&min_price=${filters.minPrice}`;
    if (filters.maxPrice) url += `&max_price=${filters.maxPrice}`;
    if (filters.location) url += `&location=${filters.location}`;
    if (filters.search) url += `&search=${filters.search}`;

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch houses" };
  }
};

// Get all houses (all pages)
export const getAllHouses = async (filters = {}) => {
  try {
    let url = `${API_ENDPOINTS.HOUSES}?page=all`;
    if (filters.category) url += `&category=${filters.category}`;
    if (filters.minPrice) url += `&min_price=${filters.minPrice}`;
    if (filters.maxPrice) url += `&max_price=${filters.maxPrice}`;
    if (filters.location) url += `&location=${filters.location}`;
    if (filters.search) url += `&search=${filters.search}`;

    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch houses" };
  }
};

// Get house details by ID
export const getHouseById = async (id) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.HOUSES}${id}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch house details" };
  }
};

// Create a new house listing
export const createHouse = async (houseData) => {
  try {
    const response = await api.post(API_ENDPOINTS.HOUSES, houseData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create house listing" };
  }
};

// Update a house listing
export const updateHouse = async (id, houseData) => {
  try {
    const response = await api.put(`${API_ENDPOINTS.HOUSES}${id}/`, houseData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update house listing" };
  }
};

// Submit house for approval
export const submitHouseForApproval = async (id) => {
  try {
    const response = await api.post(
      `${API_ENDPOINTS.HOUSES}${id}/submit_for_approval/`,
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || { message: "Failed to submit house for approval" }
    );
  }
};

// Approve house (admin only)
export const approveHouse = async (id) => {
  try {
    const response = await api.post(`${API_ENDPOINTS.HOUSES}${id}/approve/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to approve house" };
  }
};

// Get all categories
export const getCategories = async (page = 1) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.CATEGORIES}?page=${page}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch categories" };
  }
};

// Create a category (admin only)
export const createCategory = async (categoryData) => {
  try {
    const response = await api.post(API_ENDPOINTS.CATEGORIES, categoryData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create category" };
  }
};

// Add a review to a house
export const addReview = async (houseId, reviewData) => {
  try {
    const response = await api.post(
      `${API_ENDPOINTS.HOUSES}${houseId}/add_review/`,
      reviewData,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to add review" };
  }
};

// Update a review
export const updateReview = async (reviewId, reviewData) => {
  try {
    const response = await api.put(
      `${API_ENDPOINTS.REVIEWS}${reviewId}/`,
      reviewData,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update review" };
  }
};

// Delete a review
export const deleteReview = async (reviewId) => {
  try {
    const response = await api.delete(`${API_ENDPOINTS.REVIEWS}${reviewId}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to delete review" };
  }
};
