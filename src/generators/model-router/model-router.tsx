import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { BasicData, PlaceholderIconArgs } from "../../components";
import {
  ListLayoutProps,
  FormLayoutProps,
  DetailsLayout,
  DetailsLayoutProps,
} from "../../layouts";
import { Model } from "../generators.model";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { AddScreen, ListScreen, UpdateScreen } from "./screens";

const DummyTestComponent = ({ title }: { title: string }) => {
  return (
    <Box>
      <Typography>DummyTestComponent {title}</Typography>
      <ul>
        <li>
          <Link to="/">List</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/1">Detail</Link>
        </li>
        <li>
          <Link to="/1/update">Update</Link>
        </li>
      </ul>
    </Box>
  );
};

const getDetailsPropsFromModel = (
  { modelName, model, detail }: ModelRouterProps,
  id: string,
): DetailsLayoutProps => {
  return {
    loading: detail.request.loading,
    headerProps: {
      title: id,
      preset: "default",
      breadcrumbs: [
        {
          id: "list",
          text: modelName,
          link: "/",
        },
        {
          id: "detail",
          text: id,
          link: `/${id}`,
        },
      ],
    },
    objectDetailsProps: {
      model,
      instance: detail.instance,
    },
    notFoundPlaceholderProps: {
      title: "Not found",
      subtitle: "There is no item with that id",
      icon: ({ size, color }: PlaceholderIconArgs) => (
        <SentimentVeryDissatisfiedIcon color={color} sx={{ fontSize: size }} />
      ),
    },
  };
};

export interface RequestState {
  idle?: boolean;
  loading?: boolean;
  error?: string;
  success?: boolean;
}

export interface ModelRouterProps {
  modelName: string;
  model: Model;
  list: {
    loading?: boolean;
    data: any[];
    onClickRemoveItem: (item: any) => void;
    requestDelete: RequestState;
  };
  add: {
    onSubmit: (obj: object) => void;
    request: RequestState;
  };
  detail: {
    onScreenMount?: (id: string) => void;
    request: RequestState;
    instance?: any;
  };
  update: {
    onSubmit: (obj: object) => void;
    request: RequestState;
    requestInstance: RequestState;
    onRequestInstance: (id: string) => void;
    instance?: any;
  };
}

const DetailsScreen = (props: ModelRouterProps) => {
  const onScreenMount = props.detail.onScreenMount;
  const { id = "" } = useParams();

  useEffect(() => {
    onScreenMount && onScreenMount(id);
  }, [id]);

  return <DetailsLayout {...getDetailsPropsFromModel(props, id)} />;
};

export const ModelRouter = (props: ModelRouterProps) => {
  return (
    <Routes>
      <Route path="add" element={<AddScreen {...props} />} />
      <Route path=":id/update" element={<UpdateScreen {...props} />} />
      <Route path=":id" element={<DummyTestComponent title="detail" />} />
      <Route path="" element={<ListScreen {...props} />} />
    </Routes>
  );
};
