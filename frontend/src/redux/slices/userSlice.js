// src/redux/slices/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../utils/api';

const initialState = {
  token: null,
  user: null,
  roles: [],
  isAuthenticated: false,
  loading: false,
  error: null,
  successMessage: null, // Adding successMessage
};

// Async actions for login and registration
export const login = createAsyncThunk('user/login', async (credentials) => {
  const response = await loginUser(credentials);
  return response;
});

export const register = createAsyncThunk('user/register', async (userData) => {
  const response = await registerUser(userData);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.roles = [];
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null; // Action to clear success message
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access;
        state.roles = action.payload.roles;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload.access);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = 'Registration successful!'; // Set success message on registration
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, clearSuccessMessage } = userSlice.actions; // Export the clearSuccessMessage action
export default userSlice.reducer;
