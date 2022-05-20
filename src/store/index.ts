import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authReducer, authSlice } from "../features";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
