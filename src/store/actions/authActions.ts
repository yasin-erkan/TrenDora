import { createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest } from '../../service/verb';
import { LOGIN_URL } from '../../service/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (params: object, { rejectWithValue }) => {
    try {
      console.log('Login attempt with params:', params);
      const response = await postRequest(LOGIN_URL, params);
      console.log('Login response:', response.data);

      await AsyncStorage.setItem('accessToken', response.data.access_token);
      await AsyncStorage.setItem('refreshToken', response.data.refresh_token);

      // Only save user if it exists in response
      if (response.data.user) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      }

      await AsyncStorage.setItem('isLogin', 'true');

      console.log('Login successful, tokens saved');
      return response.data;
    } catch (error: any) {
      console.log('Login error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

const checkUser = createAsyncThunk('auth/checkUser', async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    console.log('token', token);
    if (token) {
      return { isLogin: true };
    } else {
      return { isLogin: false };
    }
  } catch (error) {
    console.log('error', error);
    return { isLogin: false };
  }
});

const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (params: boolean, { rejectWithValue }) => {
    try {
      console.log('Logout attempt');
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('isLogin');

      console.log('Logout successful, all tokens removed');
      return { isLogin: false };
    } catch (error: any) {
      console.log('Logout error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export { loginUser, checkUser, logoutUser };
