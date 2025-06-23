import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import categoriesReducer from './slices/categoriesSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import favoriteReducer from './slices/favoriteSlice';
import signupReducer from './slices/signupSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer,
    auth: authReducer,
    favorite: favoriteReducer,
    signup: signupReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
