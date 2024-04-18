import axios from "axios";
const baseURL = `${import.meta.env.VITE_API_BASE_URL}/api`

// Create an axios instance with base URL set from environment variables
export const axiosGeneral = axios.create({
  baseURL: baseURL
})

const axiosClient = axios.create({
  baseURL: baseURL
})

// Request interceptor to add authorization token to every request
axiosClient.interceptors.request.use(async (config) => {

  const token = await localStorage.getItem('ACCESS_TOKEN');  // Get the access token from local storage
  config.headers.Authorization = `Bearer ${token}`  // Add authorization header to the request

  return config;
})

// Response interceptor to handle common error cases
axiosClient.interceptors.response.use((response) => {

  return response

}, (error) => {
  const { response } = error;
  if (response.status === 401) {

    localStorage.removeItem('ACCESS_TOKEN');     // If unauthorized, remove access token from local storage
    // window.location.reload();     // To refresh the page to force a login

  } else if (response.status === 404) {
    console.error("Resource not found:", error.response.config.url); // Handle 404 Not Found error here
    window.location.href = "/not-found";     // Redirect the user to a not found page
    // alert("The requested resource was not found.");     // Display a message to the user if required
  }

  throw error;
})


export default axiosClient;
