import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BasicData } from "../../../components";
import { ListLayout } from "../../../layouts";
import { RequestState } from "../model-router.types";
import { BaseScreenProps } from "./screens.types";

export interface ListScreenProps<T extends BasicData> extends BaseScreenProps {
  /**
   * Callback executed each time the list screen
   * requests for a data update
   */
  requestList: () => void;

  /**
   * List of items to be displayed in the list screen
   */
  listData: T[];

  /**
   * Callback executed when the user clicks an option
   * to delete an item
   */
  onClickDeleteItem: (item: any) => void;

  /**
   * Current status of the request to retrieve
   * the list items
   */
  listRequest: RequestState;

  /**
   * Current status of the request to delete
   * an item
   */
  deleteRequest: RequestState;
}

export const ListScreen = <T extends BasicData>({
  model,
  modelName,
  listData,
  requestList,
  onClickDeleteItem,
  listRequest,
  deleteRequest,
}: ListScreenProps<T>) => {
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
      onClickDeleteItem(item);
    }
  };

  return (
    <ListLayout
      loading={listRequest.loading || deleteRequest.loading}
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
        data: listData,
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
