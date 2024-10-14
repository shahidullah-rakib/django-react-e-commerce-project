import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage to persist
import { combineReducers } from 'redux';
import categoryReducer from './slices/categorySlice'; // Your category slice
import productReducer from './slices/productSlice'; // Your product slice
import userReducer from './slices/userSlice'; // If you have authentication

// Configuring persist for the reducers you want to persist
const persistConfig = {
  key: 'root', // The key for root level persistence
  storage, // Choose the storage engine (localStorage in this case)
  whitelist: ['products', 'categories', 'user'], // Reducers you want to persist
};

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  user: userReducer, // Example of another slice you may want to persist
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with persistedReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check for redux-persist
    }),
});

export const persistor = persistStore(store);

export default store;
