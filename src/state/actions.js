export const MainActionTypes = {
  SET_LOADING: "SET_LOADING",
  SET_LANGUAGES: "SET_LANGUAGES",
  ADD_LANGUAGE: "ADD_LANGUAGE",
  REMOVE_LANGUAGE: "REMOVE_LANGUAGE",
  SET_FILES: "SET_FILES",
  ADD_FILE: "ADD_FILE",
  REMOVE_FILE: "REMOVE_FILE",
};

export const SetLoading = (loading) => (dispatch) =>
  dispatch({
    type: MainActionTypes.SET_LOADING,
    payload: loading,
  });
export const SetLanguages = (languages) => (dispatch) =>
  dispatch({
    type: MainActionTypes.SET_LANGUAGES,
    payload: languages,
  });
export const AddLanguage = (language) => (dispatch) =>
  dispatch({
    type: MainActionTypes.ADD_LANGUAGE,
    payload: language,
  });
export const RemoveLanguage = (language) => (dispatch) =>
  dispatch({
    type: MainActionTypes.REMOVE_LANGUAGE,
    payload: language,
  });
export const SetFiles = (files) => (dispatch) =>
  dispatch({
    type: MainActionTypes.SET_FILES,
    payload: files,
  });
export const AddFile = (file) => (dispatch) =>
  dispatch({
    type: MainActionTypes.ADD_FILE,
    payload: file,
  });
export const RemoveFile = (file) => (dispatch) =>
  dispatch({
    type: MainActionTypes.REMOVE_FILE,
    payload: file,
  });

export const AuthenticationActionTypes = {
  SET_IS_AUTHENTICATED: "SET_IS_AUTHENTICATED",
};

export const SetIsAuthenticated = (isAuthenticated) => (dispatch) =>
  dispatch({
    type: AuthenticationActionTypes.SET_IS_AUTHENTICATED,
    payload: isAuthenticated,
  });
