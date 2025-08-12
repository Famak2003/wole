import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import { apiSlice } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './slices/authSlice'; 


type NoopStorage = {
  getItem: (key: string) => Promise<null>;
  setItem: (key: string, value: string) => Promise<any>;
  removeItem: (key: string) => Promise<void>;
};

const rootReducer = combineReducers({
    auth: authReducer,
    // add other reducers here
});

const createNoopStorage = (): NoopStorage => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// define persist configuration
const persistConfig = {
  key: "root",
  version: 1,
//   blacklist: ['system', 'users', 'dashboard' ],  
  storage:
    typeof window === "undefined"
      ? createNoopStorage()
      : createWebStorage("local"),
};

const persistReducers = persistReducer(persistConfig, rootReducer)



const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// setup listeners for persisting redux state
setupListeners(store.dispatch);

// define types for root state and app dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
export default store;