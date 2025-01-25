export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.status;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
