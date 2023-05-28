"use client";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/authSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
