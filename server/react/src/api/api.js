import axiosClient from "./axios-client.js";
import axios from "axios";

export const login = (email, password) => {
  return axiosClient.post("/login", { email, password });
};

export const logout = () => {
  return axiosClient.post("/logout");
};

export const fetchUserData = () => {
  return axiosClient.get("/user");
};


export const getUsers = async () => {
  try {
    const response = await axiosClient.get('/users');
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axiosClient.delete(`/users/${userId}`);
  } catch (error) {
    throw error;
  }
};

export const signupUser = async (payload) => {
  try {
    const response = await axiosClient.post('/signup', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axiosClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    await axiosClient.put(`/users/${id}`, userData);
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    await axiosClient.post('/users', userData);
  } catch (error) {
    throw error;
  }
};

export const uploadImage  = async (imageId, imageFile) => {
  try {
    await axiosClient.post(`/images/${imageId}`, imageFile);
  } catch (error) {
    throw error;
  }
};
