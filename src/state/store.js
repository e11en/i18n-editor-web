import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authenticationReducer } from "./reducers/authentication";
import { mainReducer } from "./reducers/main";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  main: mainReducer,
});

const persistConfig = {
  key: "i18n-editor",
  storage: storage,
  //blacklist: ["main"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store, null);
