import axios from "axios";
import { config } from "../config";
import authService from "./auth.service";


const API_URL = config.API_URL //http://localhost:5500

export const axiosInstance = axios.create({
  baseURL: API_URL,
})

// configuracion de errores 400
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      authService.logout();
    }
    return Promise.reject(error);
  }
);