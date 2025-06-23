import { createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest } from '../../service/verb';
import { LOGIN_URL } from '../../service/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SignupParams } from '../../models/data/signUpState';

const signupUser = createAsyncThunk(
  'signup/signupUser',
  async (params: SignupParams, { rejectWithValue }) => {
    try {
      console.log('SignUp attempt with params:', params);

      //delete old data
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('isLogin');
      console.log('Old data cleared');

      const signupData = {
        name: params.name,
        email: params.email,
        password: params.password,
        avatar: 'https://picsum.photos/800',
      };

      const response = await postRequest(
        'https://api.escuelajs.co/api/v1/users/',
        signupData,
      );
      console.log('SignUp response:', response.data);
      console.log('New user created:', response.data.name, response.data.email);

      //login after signup
      const loginResponse = await postRequest(LOGIN_URL, {
        email: params.email,
        password: params.password,
      });
      console.log('Login response after signup:', loginResponse.data);

      await AsyncStorage.setItem(
        'accessToken',
        loginResponse.data.access_token,
      );
      await AsyncStorage.setItem(
        'refreshToken',
        loginResponse.data.refresh_token,
      );

      await AsyncStorage.setItem('user', JSON.stringify(response.data));
      console.log('New user data saved to AsyncStorage:', response.data.name);

      await AsyncStorage.setItem('isLogin', 'true');

      console.log('SignUp successful, auto-login completed with new user data');
      return {
        ...loginResponse.data,
        user: response.data,
      };
    } catch (error: any) {
      console.log('SignUp error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export { signupUser };
