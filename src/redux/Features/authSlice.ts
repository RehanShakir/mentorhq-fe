"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface AuthState {
  name: string;
  email: string;
  token: string;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  name: "",
  email: "",
  token: "",
  error: "",
  loading: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state) => {
//       state;
//     },
//   },
// });
