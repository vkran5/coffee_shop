import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducer';

const persisConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persisConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
