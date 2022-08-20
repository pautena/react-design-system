import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Content, Header, TableList } from "~/components";
import { BasicModelInstance } from "~/generators";
import { HeaderLayout } from "../../../layouts";
import { RequestState } from "../model-router.types";
import { BaseScreenProps } from "./screens.types";

export interface ListScreenProps<T extends BasicModelInstance> extends BaseScreenProps {
  /**
   * Callback executed each time the list screen
   * requests for a data update
   */
  onRequestList: () => void;

  /**
   * List of items to be displayed in the list screen
   */
  listData: T[];

  /**
   * Callback executed when the user clicks an option
   * to delete an item
   */
  onClickDeleteItem: (item: T) => void;

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

export const ListScreen = <T extends BasicModelInstance>({
  model,
  modelName,
  listData,
  onRequestList,
  onClickDeleteItem,
  listRequest,
  deleteRequest,
}: ListScreenProps<T>) => {
  const navigate = useNavigate();

  useEffect(() => {
    onRequestList();
  }, []);

  const handleClickListItem = (item: T) => {
    navigate(`/${item.id}`);
  };

  const handleClickListOption = (optionId: "edit" | "remove", item: T) => {
    if (optionId === "edit") {
      navigate(`/${item.id}/update`);
    } else {
      onClickDeleteItem(item);
    }
  };

  return (
    <HeaderLayout loading={listRequest.loading || deleteRequest.loading}>
      <Header
        title={modelName}
        preset="default"
        actions={[
          {
            id: "add",
            text: "Add",
            href: "/add",
          },
        ]}
      />
      <Content>
        <TableList
          columns={model.fields
            .filter(({ listable }) => listable)
            .map(({ id, name, type }) => ({
              disablePadding: false,
              id,
              label: name,
              numeric: type === "number",
              sort: false,
            }))}
          data={listData}
          defaultSort={model.fields[0].id}
          onClick={handleClickListItem}
          options={[
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
          ]}
        />
      </Content>
    </HeaderLayout>
  );
};
