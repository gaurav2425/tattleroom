import axios from "axios";

const API_BASE_URL = "http://172.16.0.115:5500/api"; // Replace with your actual API URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const authApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (Attach Token if Available)

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Modify based on storage (AsyncStorage for React Native)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// // Response Interceptor (Handle Errors)
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error:", error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

export default api;
