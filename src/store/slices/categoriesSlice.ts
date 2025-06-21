import { createSlice } from '@reduxjs/toolkit';
import { CategoriesState } from '../../models/data/categoriesState';
import { getCategories } from '../actions/categoriesActions';

const initialState: CategoriesState = {
  categories: [
    {
      id: 0,
      name: 'All',
      slug: 'all',
      image: 'https://pravatar.cc/',
      creationAt: '2025-06-16T21:00:27.000Z',
      updatedAt: '2025-06-16T21:00:27.000Z',
    },
  ],
  selectedCategory: 'all',
  pending: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCategories.pending, state => {
      state.pending = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      const newCategories = action.payload.filter(
        (cat: any) =>
          !state.categories.some(existing => existing.id === cat.id),
      );
      state.categories = [...state.categories, ...newCategories];
      state.pending = false;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    });
  },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
