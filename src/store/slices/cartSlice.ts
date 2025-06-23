import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../../models/data/cartState';
import { Product } from '../../models/data/productsState';

const initialState: CartState = {
  cart: [],
  pending: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const cartItem = state.cart.find(
        cartItem => cartItem.id === action.payload,
      );
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const cartItem = state.cart.find(
        cartItem => cartItem.id === action.payload,
      );
      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
        } else {
          // Remove item when quantity reaches 0
          state.cart = state.cart.filter(item => item.id !== action.payload);
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
