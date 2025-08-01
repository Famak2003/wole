// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  Persistor,
} from "redux-persist";

import authReducer from './slices/authSlice'; // example slice

const rootReducer = combineReducers({
  auth: authReducer,
  // add other reducers here
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // only persist this reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


// export const persistor = persistStore(store);

export let persistor: Persistor;
if (typeof window !== 'undefined') {
  persistor = persistStore(store);
}


// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
