import axios from "axios";
import { config } from "../config";
import authService from "./auth.service";



const API_URL = config.API_URL //http://localhost:5500

export const axiosInstance = axios.create({
  baseURL: API_URL,
})

// interceptor para agregar el token a las peticiones
axiosInstance.interceptors.request.use(
  (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// interceptor para configurar los errores 400
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      authService.logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);