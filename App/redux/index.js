import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import user from './user';
import cart from './cart';
import list from './list';

const persistConfig = {
  // key: 'root',
  version: 100,
  storage: AsyncStorage,
  key: 'root',
  // storage: AsyncStorage,
  // Reducer keys that you do NOT want stored to persistence here.
  // whitelist: ['blacklist'],
  blacklist: ['user', 'cart', 'list'],
};

const reducer = combineReducers({
  // here we will be adding reducers
  user,
  cart,
  list,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export default store;
