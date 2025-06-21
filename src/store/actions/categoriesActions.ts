import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../service/verb';
import { CATEGORIES_URL } from '../../service/url';

const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (params: object) => {
    try {
      const response = await getRequest(CATEGORIES_URL, params);
      console.log('categories', response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export { getCategories };
