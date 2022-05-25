import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../projects.types";
import projectsData from "./projects-data.json";

export interface ProjectsState {
  projects: Project[];
  selectedProject?: Project;
}

const initialState: ProjectsState = {
  projects: projectsData as any,
  selectedProject: undefined,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    selectProject: (state, action: PayloadAction<Project>) => {
      state.selectedProject = action.payload;
    },
  },
});

export const { selectProject } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
