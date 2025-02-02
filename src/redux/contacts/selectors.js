import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, selectNameFilter) => {
    return contacts.filter((contact) => {
      const matchesName = contact.name.toLowerCase().includes(selectNameFilter);
      const matchesNumber = contact.phoneNumber.includes(selectNameFilter);
      return matchesName || matchesNumber;
    });
  }
);