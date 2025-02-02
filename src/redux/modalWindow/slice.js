import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    contactIdToDelete: null,
    editContact: null,
    isEditModalOpen: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.contactIdToDelete = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.contactIdToDelete = null;
      state.isEditModalOpen = false;
      state.editContact = null;
    },
    editModal: (state, action) => {
      state.isEditModalOpen = true;
      state.editContact = action.payload;
    },
  },
});

export const { openModal, closeModal, editModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;