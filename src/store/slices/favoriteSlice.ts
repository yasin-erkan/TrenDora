import { createSlice } from '@reduxjs/toolkit';
import { FavoriteState } from '../../models/data/favoriteState';

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const existingProduct = state.favorites.find(
        item => item.id === action.payload.id,
      );
      if (!existingProduct) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
