/* reducers y los accions para autenticacion */
import authService from "../services/auth.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LoginRequest, User, AuthState } from "../interfaces/auth.inteface";


const initialState: AuthState = {
  user: authService.getCurrentUser(),
  token: authService.getToken(),
  isAuthenticated: authService.isAuthenticated(),
  loading: false,
  error: null
}

export const logOut = createAsyncThunk(
  "auth/logout",
  async () => {
    try {
      await authService.logout()
    } catch (error) {
      console.log(error)
    }
  }
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: LoginRequest, { rejectWithValue }: any) => {
    try {
      const response = await authService.login(credentials)
      console.log(response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false
      state.isAuthenticated = false
      state.error = action.payload as string
    })
  },
})

export default authSlice.reducer