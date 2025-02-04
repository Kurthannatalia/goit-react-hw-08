import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://validation-5dsv.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", credentials);
      const { token } = response.data.data;

      if (!token) {
        throw new Error("Token not returned");
      }

      setAuthHeader(token);
      console.log("Register successful:", response.data);
      return response.data;
    } catch (error) {
      console.error("Register error:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", credentials);
      const { token } = response.data.data;

      if (!token) {
        throw new Error("Token not returned");
      }

      setAuthHeader(token);
      console.log("Login successful:", response.data);
      return response.data;
    } catch (error) {
      console.error("Login error:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
    console.log("Logout successful");
  } catch (error) {
    console.error("Logout error:", error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      console.warn("No persisted token found. Skipping refresh.");
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.post("/auth/current", {});
      const { token } = response.data.data;

      if (!token) {
        throw new Error("Token not returned on refresh");
      }

      setAuthHeader(token);
      console.log("User refreshed successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Refresh user error:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
