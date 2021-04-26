import { MainActionTypes } from "../actions";

const initialState = {
  loading: false,
  languages: [],
  files: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case MainActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case MainActionTypes.SET_LANGUAGES: {
      return {
        ...state,
        languages: action.payload,
      };
    }
    case MainActionTypes.ADD_LANGUAGE: {
      return {
        ...state,
        languages: [...state.languages, action.payload],
      };
    }
    case MainActionTypes.REMOVE_LANGUAGE: {
      const filteredLanguages = state.languages.filter(
        (l) => l === action.payload
      );

      return {
        ...state,
        languages: filteredLanguages,
      };
    }
    case MainActionTypes.SET_FILES: {
      return {
        ...state,
        files: action.payload,
      };
    }
    case MainActionTypes.ADD_FILE: {
      return {
        ...state,
        files: [...state.files, action.payload],
      };
    }
    case MainActionTypes.REMOVE_FILE: {
      const filteredFiles = state.files.filter((f) => f === action.payload);

      return {
        ...state,
        files: filteredFiles,
      };
    }
    default:
      return state;
  }
};
