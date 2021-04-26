export const getMain = (state) => state.main;
export const getLanguages = (state) => state.main.languages;
export const getFiles = (state) => state.main.files;

export const getAuthentication = (state) => state.authentication;
export const getIsAuthenticated = (state) =>
  state.authentication.isAuthenticated;
