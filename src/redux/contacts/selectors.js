import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter((contact) => {
      const matchesName = contact.name.toLowerCase().includes(filter.toLowerCase());
      const matchesNumber = contact.number.includes(filter);
      return matchesName || matchesNumber;
    });
  }
);
