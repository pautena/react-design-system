import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {Auth} from 'aws-amplify';
import { CognitoIdentityProvider } from '../../configs/aws';
import { Profile } from './auth.types';

export const signIn = createAsyncThunk(
  'auth/signInStatus',
  async ()=> {
    return await Auth.federatedSignIn({customProvider:CognitoIdentityProvider});
  }
);

export const signInCallback = createAsyncThunk(
  'auth/signInCallbackStatus',
  async ()=> {
    const userInfo = await Auth.currentUserInfo();
    return userInfo;
  }
)

export interface AuthState {
  isAuthenticated: boolean,
  profile: Profile|null,
}

const initialState: AuthState = {
  isAuthenticated: false,
  profile:null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder)=> {
    builder.addCase(signInCallback.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.isAuthenticated=true;
    })
  }
})

export const authReducer = authSlice.reducer;