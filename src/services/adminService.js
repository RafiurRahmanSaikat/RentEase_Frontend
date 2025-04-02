// services/adminService.js
import { API_ENDPOINTS } from "../constants";
import api from "./api";

// Get all users (admin only)
export const getUsers = async (page = 1) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.ADMIN_USERS}?page=${page}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch users" };
  }
};

// Create a user (admin only)
export const createUser = async (userData) => {
  try {
    const response = await api.post(API_ENDPOINTS.ADMIN_USERS, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to create user" };
  }
};

// Update a user (admin only)
export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(
      `${API_ENDPOINTS.ADMIN_USERS}${userId}/`,
      userData,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update user" };
  }
};

// Delete a user (admin only)
export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`${API_ENDPOINTS.ADMIN_USERS}${userId}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to delete user" };
  }
};

// Get all houses (admin sees all, including unapproved)
export const getAllHouses = async (page = 1) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.HOUSES}?page=${page}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch houses" };
  }
};

// Get all rent requests (admin sees all)
export const getAllRentRequests = async (page = 1) => {
  try {
    const response = await api.get(
      `${API_ENDPOINTS.RENT_REQUESTS}?page=${page}`,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch rent requests" };
  }
};
