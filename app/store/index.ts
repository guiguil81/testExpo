import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { api } from '../services/api';
import { apiCDN } from '../services/apiCDN';
import * as modules from '../services/modules';
import i18n from './i18n';
import tickets from './tickets';
import user from './user';

const reducers = combineReducers({
  user,
  tickets,
  i18n,
  ...Object.values(modules).reduce(
    (acc, module) => ({
      ...acc,
      [module.reducerPath]: module.reducer,
    }),
    {}
  ),
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'tickets'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(api.middleware)
      .concat(apiCDN.middleware);
  },
});
const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
