import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
import { CognitoIdentityProvider } from "../../../configs/aws";
import { Profile } from "../auth.types";

export const NonValidSignInGoogleResponse = (code?: string): Error => {
  return {
    name: "NonValidSignInGoogle",
    message: `Non valid response. code: ${code},`,
  };
};

export const signIn = createAsyncThunk("auth/signInStatus", async (_, { rejectWithValue }) => {
  try {
    return await Auth.federatedSignIn({ customProvider: CognitoIdentityProvider });
  } catch (e) {
    rejectWithValue(e as Error);
  }
});

export const signInCallback = createAsyncThunk(
  "auth/signInCallbackStatus",
  async (_, { rejectWithValue }) => {
    try {
      return await Auth.currentUserInfo();
    } catch (e) {
      rejectWithValue(e as Error);
    }
  },
);

export const signOut = createAsyncThunk("auth/signOutStatus", async () => {
  return await Auth.signOut();
});

export interface AuthState {
  signInInProgress: boolean;
  signOutInProgress: boolean;
  isAuthenticated: boolean;
  profile?: Profile;
  isGoogleAuthenticated: boolean;
  googleAccessToken?: string;
  signInGoogleError?: Error;
}

const initialState: AuthState = {
  isAuthenticated: false,
  signInInProgress: false,
  signOutInProgress: false,
  isGoogleAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutCallback: (state) => {
      state.profile = undefined;
      state.isAuthenticated = false;
      state.signOutInProgress = false;
    },
    setGoogleAccessToken: (state, { payload }: PayloadAction<string>) => {
      state.isGoogleAuthenticated = true;
      state.googleAccessToken = payload;
      state.signInGoogleError = undefined;
    },
    setSignInGoogleError: (state, { payload }: PayloadAction<Error>) => {
      state.signInGoogleError = payload;
      state.isGoogleAuthenticated = false;
      state.googleAccessToken = undefined;
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(signIn.pending, (state) => {
        state.signInInProgress = true;
        state.isAuthenticated = false;
        state.profile = undefined;
      })
      .addCase(signInCallback.fulfilled, (state, { payload: { id, username, attributes } }) => {
        state.profile = {
          id,
          username,
          email: attributes.email,
        };
        state.isAuthenticated = true;
        state.signInInProgress = false;
      })
      .addCase(signOut.pending, (state) => {
        state.signOutInProgress = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.signOutInProgress = false;
      });
  },
});

export const { signOutCallback, setGoogleAccessToken, setSignInGoogleError } = authSlice.actions;
export const authReducer = authSlice.reducer;
