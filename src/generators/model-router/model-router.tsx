import React from "react";
import { Routes, Route } from "react-router-dom";
import { BasicData } from "~/components";
import {
  AddScreen,
  AddScreenProps,
  DetailsScreen,
  DetailsScreenProps,
  ListScreen,
  ListScreenProps,
  UpdateScreen,
  UpdateScreenProps,
} from "./screens";

export type ModelRouterProps<T extends BasicData> = DetailsScreenProps<T> &
  ListScreenProps<T> &
  AddScreenProps &
  UpdateScreenProps;

export const ModelRouter = <T extends BasicData>(props: ModelRouterProps<T>) => {
  return (
    <Routes>
      <Route path="" element={<ListScreen {...props} />} />
      <Route path=":id" element={<DetailsScreen {...props} />} />
      <Route path="add" element={<AddScreen {...props} />} />
      <Route path=":id/update" element={<UpdateScreen {...props} />} />
    </Routes>
  );
};
