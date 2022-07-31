import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { BasicData } from "../../components";
import { ListLayout, ListLayoutProps, FormLayout, FormLayoutProps } from "../../layouts";
import { useNotificationCenter } from "../../providers/notification-center/notification-center.context";
import { Model } from "../generators.model";

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
  onClickListItem?: (d: T) => void,
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
  };
  add: {
    onSubmit: (obj: object) => void;
    request: RequestState;
  };
  loading?: { list?: boolean };
}

export const ModelRouter = (props: ModelRouterProps) => {
  const navigate = useNavigate();
  const { show } = useNotificationCenter();

  const handleClickListItem = (item: any) => {
    navigate(`/${item.id}`);
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
        element={<ListLayout {...getListPropsFromModel(props, handleClickListItem)} />}
      />
      <Route path="/add" element={<FormLayout {...getAddPropsFromModel(props)} />} />
      <Route path="/:id" element={<DummyTestComponent title="detail" />} />
      <Route path="/:id/update" element={<DummyTestComponent title="update" />} />
    </Routes>
  );
};
