import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BasicData } from "../../../components";
import { ListLayoutProps, ListLayout } from "../../../layouts";
import type { ModelRouterProps } from "../model-router";

const getListPropsFromModel = <T extends BasicData>(
  { model, modelName, list }: ModelRouterProps,
  onClickListItem: (d: T) => void,
  onClickListOption: (optionId: "edit" | "remove", item: T) => void,
): ListLayoutProps<T> => {
  return {
    loading: list.listRequest.loading,
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

export const ListScreen = (props: ModelRouterProps) => {
  const { requestList = () => null } = props;
  const navigate = useNavigate();

  useEffect(() => {
    requestList();
  }, []);

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

  return (
    <ListLayout {...getListPropsFromModel(props, handleClickListItem, handleClickListOption)} />
  );
};
