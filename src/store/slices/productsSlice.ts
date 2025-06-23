import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../models/data/productsState';
import {
  getProducts,
  getProductsFilterCategory,
  getSingleProduct,
} from '../actions/productsActions';

const initialState: ProductsState = {
  products: [],
  productsFilterCategory: [],
  productDetailData: null,
  pending: false,
  pendingDetail: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.pending = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.pending = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message ?? 'Something went wrong';
    });

    builder.addCase(getProductsFilterCategory.pending, state => {
      state.pending = true;
    });
    builder.addCase(getProductsFilterCategory.fulfilled, (state, action) => {
      state.productsFilterCategory = action.payload;
      state.products = action.payload;
      state.pending = false;
    });
    builder.addCase(getProductsFilterCategory.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error.message ?? 'Something went wrong';
    });

    builder.addCase(getSingleProduct.pending, state => {
      state.pendingDetail = true;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.productDetailData = action.payload;
      state.pendingDetail = false;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.pendingDetail = false;
      state.error = action.error.message ?? 'Something went wrong';
    });
  },
});

export default productsSlice.reducer;
