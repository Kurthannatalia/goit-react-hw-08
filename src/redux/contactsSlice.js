import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectNameFilter } from "./selectors";

const handlePending = (state) => {
  state.loading = true;
};

const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleError)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleError);
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, selectNameFilter) => {
    return contacts.filter((contact) => {
      if ("id" in contact && "name" in contact && "number" in contact) {
        if (
          typeof contact.id === "string" &&
          typeof contact.name === "string" &&
          typeof contact.number === "string"
        ) {
          return contact.name
            .toLowerCase()
            .includes(selectNameFilter.toLowerCase());
        }
      }
      return false;
    });
  }
);

export const contactReducer = contactsSlice.reducer;