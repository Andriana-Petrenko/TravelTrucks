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
import { favouritesReducer } from './favourites/slice';



const favouritesPersistConfig = {
  key: "favourites",
  storage,
  // whitelist: ['favourites'],
};

export const store = configureStore({
  reducer: {
    trucks:truckReducer,
    filters: filtersReducer,
    favourites:persistReducer(favouritesPersistConfig, favouritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);