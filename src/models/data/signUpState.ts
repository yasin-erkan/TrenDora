export interface SignupParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string;
  user: any;
}

export interface SignupResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: number;
    name: string;
    email: string;
    avatar: string;
    role: string;
    creationAt: string;
    updatedAt: string;
  };
}
