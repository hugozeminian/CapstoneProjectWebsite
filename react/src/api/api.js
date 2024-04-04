import axiosClient from "./axios-client.js";
import axiosGeneral from "./axios-client.js";

const handleRequest = async (requestPromise, requestName) => {
  try {
    const response = await requestPromise;
    console.log(`🚀 ~ handleRequest ~ ${requestName} response:`, response)
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
  return handleRequest(axiosClient.get("/testconnection"), "testConnection");
};

export const fetchGeneralCards = async (page) => {
  return handleRequest(axiosGeneral.get(`/generalcards?page=${page}`), "fetchGeneralCards");
};

export const updateGeneralCards = async (reference, updatedData) => {
  return handleRequest(axiosGeneral.post(`/generalcard/${reference}`, updatedData), "updateGeneralCards");
};

export const fetchUserData = async () => {
  return handleRequest(axiosClient.get("/user"), "fetchUserData");
};

export const getUsers = async () => {
  const response = await handleRequest(axiosClient.get("/users"), "getUsers");
  return response.data;
};

export const getUserById = async (id) => {
  return handleRequest(axiosClient.get(`/users/${id}`), "getUserById");
};

export const createUser = async (userData) => {
  await handleRequest(axiosClient.post("/users", userData), "createUser");
};

export const signupUser = async (payload) => {
  return handleRequest(axiosClient.post("/signup", payload), "signupUser");
};

export const updateUser = async (id, userData) => {
  await handleRequest(axiosClient.put(`/users/${id}`, userData), "updateUser");
};

export const deleteUser = async (userId) => {
  await handleRequest(axiosClient.delete(`/users/${userId}`), "deleteUser");
};

export const getSettings = async () => {
  return handleRequest(axiosClient.get("/settings"), "getSettings");
};

export const updateSettings = async (settingsData) => {
  await handleRequest(axiosClient.post("/settings", settingsData), "updateSettings");
};


/*
######################################################
Image API     
######################################################
*/

export const uploadImage =  async (generalCardRef, imageFile) => {
  await handleRequest(axiosGeneral.post(`/generalcard/${generalCardRef}`, imageFile), "uploadGeneralCardLeandroTEST");
};


export const uploadGeneralCard = async (generalCardId, imageFile) => {
  await handleRequest(axiosClient.post(`/generalcard/${generalCardId}`, imageFile), "uploadGeneralCard");
};
