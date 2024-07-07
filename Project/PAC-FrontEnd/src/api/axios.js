import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Adjust the base URL as needed
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
