import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { truckReducer } from './truck/slice';
import { filtersReducer } from './filters/slice';


const authPersistConfig = {
  key: "auth",
  storage,
//   whitelist: ['accessToken', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
     trucks:truckReducer,
     filters: filtersReducer,
    // auth:persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);