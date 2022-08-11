import React from "react";
import { Routes, Route } from "react-router-dom";
import { Model } from "../generators.model";
import { AddScreen, DetailsScreen, ListScreen, UpdateScreen } from "./screens";

export interface RequestState {
  idle?: boolean;
  loading?: boolean;
  error?: string;
  success?: boolean;
}

export interface ModelRouterProps {
  modelName: string;
  model: Model;
  //list screen
  requestList?: () => void;
  list: {
    data: any[];
    onClickRemoveItem: (item: any) => void;
    listRequest: RequestState;
    requestDelete: RequestState;
  };
  //add screen
  add: {
    onSubmit: (obj: object) => void;
    request: RequestState;
  };
  //detail screen
  detail: {
    onScreenMount?: (id: string) => void;
    request: RequestState;
    instance?: any;
  };
  //update screen
  update: {
    onSubmit: (obj: object) => void;
    request: RequestState;
    requestInstance: RequestState;
    onRequestInstance: (id: string) => void;
    instance?: any;
  };
}

export const ModelRouter = (props: ModelRouterProps) => {
  return (
    <Routes>
      <Route path="" element={<ListScreen {...props} />} />
      <Route path=":id" element={<DetailsScreen {...props} />} />
      <Route path="add" element={<AddScreen {...props} />} />
      <Route path=":id/update" element={<UpdateScreen {...props} />} />
    </Routes>
  );
};
