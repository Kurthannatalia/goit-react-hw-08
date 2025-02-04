import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Встановлюємо базовий URL для axios
axios.defaults.baseURL = "https://connections-api.goit.global/";

// Операція для отримання всіх контактів
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data; // Повертаємо отримані дані
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // У випадку помилки повертаємо її
    }
  }
);

// Операція для додавання нового контакту
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number }); // Використовуємо правильні поля
      return response.data; // Повертаємо доданий контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // У випадку помилки повертаємо її
    }
  }
);

// Операція для видалення контакту
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data; // Повертаємо видалений контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // У випадку помилки повертаємо її
    }
  }
);

// Операція для зміни даних контакту
export const changeContact = createAsyncThunk(
  "contacts/changeContact",
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, { name, number });
      return response.data; // Повертаємо оновлений контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // У випадку помилки повертаємо її
    }
  }
);
