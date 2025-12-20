
export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  data: string;
}


export interface DecodeToken {
  id: string;
  name: string;
  email: string;
  rol: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}