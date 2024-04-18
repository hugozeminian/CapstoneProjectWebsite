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
  return handleRequest(axiosGeneral.post("/login", { email, password }));
};

export const logout = async () => {
  await handleRequest(axiosClient.post("/logout"));
  localStorage.removeItem('ACCESS_TOKEN');
};

/*
######################################################
User API      
######################################################
*/

export const fetchGeneralCards = async (page) => {
  const url = page ? `/generalcards?page=${page}` : '/generalcards';
  return handleRequest(axiosGeneral.get(url), "fetchGeneralCards");
};

export const updateGeneralCards = async (reference, updatedData) => {
  await handleRequest(axiosClient.post(`/generalcard/${reference}`, updatedData), "updateGeneralCards");
};

export const deleteGeneralCards = async (reference) => {
  await handleRequest(axiosClient.delete(`/generalcard/${reference}`), "deleteGeneralCards");
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
  return handleRequest(axiosGeneral.get("/settings"), "getSettings");
};

export const updateSettings = async (settingsData) => {
  await handleRequest(axiosClient.post("/settings", settingsData), "updateSettings");
};

export const sendEmailFormRequest = async (data) => {
  return handleRequest(axiosGeneral.post("/send-email-form-request", data), "sendEmailFormRequest");
};

export const sendEmailReachOut = async (data) => {
  await handleRequest(axiosGeneral.post("/send-email-reachout-request", data), "sendEmailReachOut");
};

