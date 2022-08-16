import React from "react";
import { Routes, Route } from "react-router-dom";
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

export type ModelRouterProps = DetailsScreenProps &
  ListScreenProps &
  AddScreenProps &
  UpdateScreenProps;

export const ModelRouter = ({
  model,
  modelName,
  detail,
  add,
  update,
  list,
  requestList,
}: ModelRouterProps) => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <ListScreen model={model} modelName={modelName} list={list} requestList={requestList} />
        }
      />
      <Route
        path=":id"
        element={<DetailsScreen model={model} modelName={modelName} detail={detail} />}
      />
      <Route path="add" element={<AddScreen model={model} modelName={modelName} add={add} />} />
      <Route
        path=":id/update"
        element={<UpdateScreen model={model} modelName={modelName} update={update} />}
      />
    </Routes>
  );
};
