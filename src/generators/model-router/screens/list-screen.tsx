import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BasicData } from "../../../components";
import { ListLayout } from "../../../layouts";
import { RequestState } from "../model-router.types";
import { BaseScreenProps } from "./screens.types";

export interface ListScreenProps extends BaseScreenProps {
  requestList?: () => void;
  list: {
    data: any[];
    onClickRemoveItem: (item: any) => void;
    listRequest: RequestState;
    requestDelete: RequestState;
  };
}

export const ListScreen = ({
  model,
  modelName,
  list,
  requestList = () => null,
}: ListScreenProps) => {
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
      list.onClickRemoveItem(item);
    }
  };

  return (
    <ListLayout
      loading={list.listRequest.loading || list.requestDelete.loading}
      headerProps={{
        title: modelName,
        preset: "default",
        actions: [
          {
            id: "add",
            text: "Add",
            href: "/add",
          },
        ],
      }}
      emptyPlaceholderProps={{
        title: `There is no ${modelName}`,
        subtitle: `There is no item right now`,
      }}
      listProps={{
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
        onClick: handleClickListItem,
        options: [
          {
            id: "edit",
            label: "Edit",
            onClick: (item) => handleClickListOption("edit", item),
          },
          {
            id: "remove",
            label: "Remove",
            onClick: (item) => handleClickListOption("remove", item),
          },
        ],
      }}
    />
  );
};
