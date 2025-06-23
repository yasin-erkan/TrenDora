import axios from 'axios';
import { BASE_URL } from './url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;
axiosClient.defaults.headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  Accept: 'application/json',
};

axiosClient.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;
