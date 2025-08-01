// redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface infoType {
    id: string, 
    email: string,
    accountVerified: boolean,
    isAdmin: boolean,
    emailVerified: boolean | string,
    twoFA: boolean 
}

interface AuthState {
  access_token: string;
  info: infoType;
  loggedIn: boolean;
}

// {token: string, info: }

const initialState: AuthState = {
  access_token: '',
  info: {
    id: '', 
    email: "",
    accountVerified: true,
    isAdmin: false,
    emailVerified: "",
    twoFA: true
  },
  loggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthState>) {
        document.cookie = `auth_token=${action.payload.access_token}; path=/; max-age=${60 * 60 * 48}; samesite=lax`;
        state.access_token = action.payload.access_token;
        state.info = action.payload.info;
        state.loggedIn = true;
    },
    logout(state) {
      state.access_token = '';
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
