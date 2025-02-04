import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      email: "",
    },
    token: "",
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)

      // Log In
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token; 
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, handleRejected)

      // Log Out
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.token = "";
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)

      // Refresh User
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
