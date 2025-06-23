import { createSlice } from '@reduxjs/toolkit';
import { signupUser } from '../actions/signUpActions';
import { SignupState } from '../../models/data/signUpState';

const initialState: SignupState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: '',
  user: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetSignupState: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.errorMessage = '';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      });
  },
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;
