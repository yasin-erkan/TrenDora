import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../models/data/productsState';
import {
  getProducts,
  getProductsFilterCategory,
  getSingleProduct,
} from '../actions/productsActions';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  priceDiscount: number;
  images: string[];
  category: string;
}

interface ProductsState {
  products: Product[];
  productsFilterCategory: Product[];
  productDetailData: Product | null;
  pending: boolean;
  pendingDetail: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  productsFilterCategory: [],
  pending: false,
  productSingleData: {},
  pendingDetail: false,
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
      state.error = action.error.message;
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
      state.error = action.error.message;
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
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
