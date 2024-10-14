// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/users/'; // Update with your backend API URL

// Set up axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Attach token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}admin/register/`, userData);
    return response.data; // Return the response data on success
  } catch (error) {
    console.error('Error during registration:', error.response.data);
    throw error; // Re-throw the error for handling in the slice
  }
};

// Login user
export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('login/', credentials);
  console.log('Login API Response:', response.data);
  return response.data;
};

// Fetch user data (protected route)
export const fetchUserData = async () => {
  const response = await axiosInstance.get('profile/');
  return response.data;
};
