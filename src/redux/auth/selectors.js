export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectErrorAuth = (state) => state.auth.error;
export const selectToken = (state) => state.auth.accessToken;