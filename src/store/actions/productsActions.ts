import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../service/verb';
import { PRODUCTS_URL } from '../../service/url';

const transformProductData = (data: any) => {
  return {
    ...data,
    priceDiscount: data.price * 1.2,
    images: data.images.map((img: string) => img.replace(/\[|\]/g, '')),
  };
};

const getProducts = createAsyncThunk(
  'products/getProducts',
  async (params: object) => {
    try {
      const response = await getRequest(PRODUCTS_URL, params);
      return response.data.map(transformProductData);
    } catch (error: any) {
      return {
        error: true,
        message: error?.message,
        status: error?.response?.status,
      };
    }
  },
);

const getProductsFilterCategory = createAsyncThunk(
  'products/getProductsFilterCategory',
  async (params: object) => {
    try {
      const response = await getRequest(PRODUCTS_URL, params);
      return response.data.map(transformProductData);
    } catch (error: any) {
      return {
        error: true,
        message: error?.message,
        status: error?.response?.status,
      };
    }
  },
);

const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (productId: number) => {
    try {
      const url = `${PRODUCTS_URL}/${productId}`;
      const response = await getRequest(url, {});
      return transformProductData(response.data);
    } catch (error: any) {
      return {
        error: true,
        message: error?.message,
        status: error?.response?.status,
      };
    }
  },
);

export { getProducts, getProductsFilterCategory, getSingleProduct };
