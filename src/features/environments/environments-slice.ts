import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Environment } from "./environments.types";
import enviromentsData from "./environments-data.json";

export interface EnvironmentState {
  environments: Environment[];
  selectedEnvironment?: Environment;
}

const initialState: EnvironmentState = {
  environments: enviromentsData as any,
  selectedEnvironment: undefined,
};

export const environmentsSlice = createSlice({
  name: "environments",
  initialState,
  reducers: {
    selectEnvironment: (state, action: PayloadAction<Environment>) => {
      state.selectedEnvironment = action.payload;
    },
  },
});

export const { selectEnvironment } = environmentsSlice.actions;
export const environmentsReducer = environmentsSlice.reducer;
