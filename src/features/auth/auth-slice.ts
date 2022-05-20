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
);

export const signOut = createAsyncThunk(
  'auth/signOutStatus',
  async ()=> {
    return await Auth.signOut();
  }
)

export interface AuthState {
  signInInProgress: boolean;
  signOutInProgress: boolean;
  isAuthenticated: boolean;
  profile: Profile|null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  signInInProgress:false,
  signOutInProgress:false,
  profile:null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOutCallback: (state)=>{
      state.profile = null;
      state.isAuthenticated = false;
      state.signOutInProgress =false;
    }
  },
  extraReducers: (builder)=> {
    builder.addCase(signIn.pending, (state) => {
      state.signInInProgress=true;
    }).addCase(signInCallback.fulfilled, (state, action) => {
      const {id,username,attributes} = action.payload;
      state.profile = {
        id,
        username,
        email:attributes.email
      };
      state.isAuthenticated=true;
      state.signInInProgress=false;
    }).addCase(signOut.pending, (state) => {
      state.signOutInProgress=true;
    })
  }
})

export const {signOutCallback} = authSlice.actions;
export const authReducer = authSlice.reducer;