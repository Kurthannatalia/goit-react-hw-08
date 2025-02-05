import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const getAuthHeader = () => {
  return axios.defaults.headers.common.Authorization
    ? { Authorization: axios.defaults.headers.common.Authorization }
    : {};
};

export const addContact = createAsyncThunk("contacts/add", async (contact, thunkAPI) => {
  const token = localStorage.getItem("token"); // Отримуємо токен з localStorage
  if (token) {
    setAuthHeader(token); // Якщо токен є, додаємо його в заголовки
  }

  try {
    const response = await axios.post("/contacts", contact, {
      headers: getAuthHeader(), // Передаємо заголовки із токеном
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchContacts = createAsyncThunk("contacts/fetch", async (_, thunkAPI) => {
  const token = localStorage.getItem("token"); // Отримуємо токен з localStorage
  if (token) {
    setAuthHeader(token); 
  }

  try {
    const response = await axios.get("/contacts", {
      headers: getAuthHeader(), 
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const deleteContact = createAsyncThunk("contacts/delete", async (contactId, thunkAPI) => {
  const token = localStorage.getItem("token"); 
  if (token) {
    setAuthHeader(token); 
  }

  try {
    const response = await axios.delete(`/contacts/${contactId}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const changeContact = createAsyncThunk("contacts/change", async ({ id, contact }, thunkAPI) => {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthHeader(token); 
  }

  try {
    const response = await axios.patch(`/contacts/${id}`, contact, {
      headers: getAuthHeader(), 
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
