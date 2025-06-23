import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthState from '../../models/data/authState';
import { checkUser, loginUser, logoutUser } from '../actions/authActions';

const initialState: AuthState = {
  isLogin: false,
  pending: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, state => {
      state.isLogin = true;
      state.pending = false;
    });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.pending = false;
      state.error = action.payload?.message || 'Login failed';
    });
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.isLogin = action.payload.isLogin;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isLogin = action.payload.isLogin;
    });
  },
});

export default authSlice.reducer;
