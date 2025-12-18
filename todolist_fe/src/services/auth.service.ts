import type { LoginRequest, LoginResponse } from "../interfaces/auth.inteface";
import { axiosInstance } from "./axios.config";
import { jwtDecode } from "jwt-decode";
import type { DecodeToken } from "../interfaces/auth.inteface";
import type { User } from "../interfaces/auth.inteface";

/*
Login
LogOut
createUser
updateUser
deleteUser */

const authService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post("/user/login", credentials)
    if (response.status === 200) {
      localStorage.setItem("token", response.data.data)
      try {
        const decodedToken: any = jwtDecode(response.data.data)
        const user: DecodeToken = {
          id: decodedToken.sub || decodedToken.id,
          name: decodedToken.name || decodedToken.name,
          email: decodedToken.email || decodedToken.email,
          rol: decodedToken.rol || decodedToken.rol,
        }
        localStorage.setItem("user", JSON.stringify(user))
      } catch (error) {
        console.error("error de decodificacion", error)
      }
    }
    return response.data
  },
  logout: async () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  getToken: (): string | null => {
    return localStorage.getItem('token');
  },

  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      // Simple check, in real app verify signature/expiration properly
      const decoded: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch (e) {
      return false;
    }
  },
  createUser: async () => {

  },
  updateUser: async () => {

  },
  deleteUser: async () => {

  },
}


export default authService