import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from '.';
import reactotron from '../config/ReactotronConfig';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['HomeData']
};

// Bind redux persist to store data;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  }),
  enhancers: (__DEV__) ? [reactotron.createEnhancer()] : []
});

const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export { persistor, store };
