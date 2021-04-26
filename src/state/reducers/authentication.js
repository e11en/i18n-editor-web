import { AuthenticationActionTypes } from "../actions";

const initialState = {
  isAuthenticated: false,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthenticationActionTypes.SET_IS_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    }
    default:
      return state;
  }
};
