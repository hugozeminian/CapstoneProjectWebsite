import axiosClient from "./axios-client.js";
import axiosGeneral from "./axios-client.js";

const handleRequest = async (requestPromise) => {
  try {
    const response = await requestPromise;
    console.log("🚀 ~ handleRequest ~ response:", response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

/*
######################################################
Authentication API         
######################################################
*/

export const login = async (email, password) => {
  return handleRequest(axiosClient.post("/login", { email, password }));
};

export const logout = async () => {
  await handleRequest(axiosClient.post("/logout"));
};

/*
######################################################
User API      
######################################################
*/

export const testConnection = async () => {
  return handleRequest(axiosClient.get("/testconnection"));
};

export const fetchGeneralCards = async (page) => {
  return handleRequest(axiosGeneral.get(`/generalcards?page=${page}`));
};

export const updateGeneralCards = async (reference, updatedData) => {
  return handleRequest(axiosGeneral.post(`/generalcard/${reference}`, updatedData));
};

export const fetchUserData = async () => {
  return handleRequest(axiosClient.get("/user"));
};

export const getUsers = async () => {
  const response = await handleRequest(axiosClient.get("/users"));
  return response.data;
};

export const getUserById = async (id) => {
  return handleRequest(axiosClient.get(`/users/${id}`));
};

export const createUser = async (userData) => {
  await handleRequest(axiosClient.post("/users", userData));
};

export const signupUser = async (payload) => {
  return handleRequest(axiosClient.post("/signup", payload));
};

export const updateUser = async (id, userData) => {
  await handleRequest(axiosClient.put(`/users/${id}`, userData));
};

export const deleteUser = async (userId) => {
  await handleRequest(axiosClient.delete(`/users/${userId}`));
};



/*
######################################################
Image API     
######################################################
*/

export const uploadImage = async (imageId, imageFile) => {
  await handleRequest(axiosClient.post(`/images/${imageId}`, imageFile));
};


export const uploadGeneralCard = async (generalCardId, imageFile) => {
  await handleRequest(axiosClient.post(`/generalcard/${generalCardId}`, imageFile));
};