'use client';

import { createSlice } from '@reduxjs/toolkit';

// Create initial state without localStorage
const initialState = {
  token: '',
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
      // Only run localStorage in browser environment
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', action.payload);
      }
    },
    clearToken: (state) => {
      state.token = '';
      state.isAuthenticated = false;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    },
    initializeAuth: (state) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        state.token = token || '';
        state.isAuthenticated = !!token;
      }
    }
  }
});

export const { setToken, clearToken, initializeAuth } = authSlice.actions;
export default authSlice.reducer;