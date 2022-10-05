import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//import thunk from 'redux-thunk';

import authReducer from "../auth/authslice";
import loginReducer from "../auth/loginslice";

const reducers = combineReducers({
  auth: authReducer,
  login: loginReducer,
});

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk]
});

export default store;
