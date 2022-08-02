import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { BasicData, PlaceholderIconArgs, TableRowOption } from "../../components";
import {
  ListLayout,
  ListLayoutProps,
  FormLayout,
  FormLayoutProps,
  DetailsLayout,
  DetailsLayoutProps,
} from "../../layouts";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { BasicData } from "../../components";
import { ListLayout, ListLayoutProps, FormLayout, FormLayoutProps } from "../../layouts";
import { useNotificationCenter } from "../../providers/notification-center/notification-center.context";
import { Model } from "../generators.model";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { UpdateScreen } from "./screens";

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

const getAddPropsFromModel = ({ model, modelName, add }: ModelRouterProps): FormLayoutProps => {
  return {
    loading: add.request.loading,
    headerProps: {
      title: `Add ${modelName}`,
      preset: "default",
      breadcrumbs: [
        {
          id: "list",
          text: modelName,
          link: "/",
        },
        {
          id: "add",
          text: `Add new ${modelName}`,
          link: "/add",
        },
      ],
    },
    modelFormProps: {
      model,
      saveButtonText: "Save",
      onSubmit: add.onSubmit,
    },
  };
};

const getListPropsFromModel = <T extends BasicData>(
  { model, modelName, list }: ModelRouterProps,
  onClickListItem: (d: T) => void,
  onClickListOption: (optionId: "edit" | "remove", item: T) => void,
): ListLayoutProps<T> => {
  return {
    loading: list.loading,
    headerProps: {
      title: modelName,
      preset: "default",
      actions: [
        {
          id: "add",
          text: "Add",
          href: "/add",
        },
      ],
    },
    emptyPlaceholderProps: {
      title: `There is no ${modelName}`,
      subtitle: `There is no item right now`,
    },
    listProps: {
      columns: model.fields
        .filter(({ listable }) => listable)
        .map(({ id, name, type }) => ({
          disablePadding: false,
          id,
          label: name,
          numeric: type === "number",
          sort: false,
        })),
      data: list.data,
      defaultSort: model.fields[0].id,
      onClick: onClickListItem,
      options: [
        {
          id: "edit",
          label: "Edit",
          onClick: (item) => onClickListOption("edit", item),
        },
        {
          id: "remove",
          label: "Remove",
          onClick: (item) => onClickListOption("remove", item),
        },
      ],
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
  const navigate = useNavigate();
  const { show } = useNotificationCenter();

  const handleClickListItem = (item: any) => {
    navigate(`/${item.id}`);
  };

  const handleClickListOption = (optionId: "edit" | "remove", item: BasicData) => {
    if (optionId === "edit") {
      navigate(`/${item.id}/update`);
    } else {
      props.list.onClickRemoveItem(item);
    }
  };

  useEffect(() => {
    if (props.add.request.success) {
      show({ message: "Item added successfully", severity: "success" });
      navigate("/");
    }
  }, [props.add.request.success]);

  useEffect(() => {
    if (props.add.request.error) {
      show({ title: "We had an error", message: props.add.request.error, severity: "error" });
    }
  }, [props.add.request.error]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ListLayout
            {...getListPropsFromModel(props, handleClickListItem, handleClickListOption)}
          />
        }
      />
      <Route path="/add" element={<FormLayout {...getAddPropsFromModel(props)} />} />
      <Route path="/:id" element={<DetailsScreen {...props} />} />
      <Route path="/:id/update" element={<UpdateScreen {...props} />} />
    </Routes>
  );
};
