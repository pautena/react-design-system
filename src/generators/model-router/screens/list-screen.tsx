import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Content, Header, HeaderAction, TableList, TableRowOption } from "~/components";
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
  listRequest,
  deleteRequest,
  deleteFeature = true,
  updateFeature = true,
  addFeature = true,
  onRequestList,
  onClickDeleteItem,
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

  const options: TableRowOption<T>[] = [];

  updateFeature &&
    options.push({
      id: "edit",
      label: "Edit",
      onClick: (item: T) => handleClickListOption("edit", item),
    });

  deleteFeature &&
    options.push({
      id: "remove",
      label: "Remove",
      onClick: (item: T) => handleClickListOption("remove", item),
    });

  const actions: HeaderAction[] = [];

  addFeature &&
    actions.push({
      id: "add",
      text: "Add",
      href: "/add",
    });

  return (
    <HeaderLayout loading={listRequest.loading || deleteRequest.loading}>
      <Header
        title={modelName}
        preset="default"
        actions={actions.length > 0 ? actions : undefined}
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
          options={options.length > 0 ? options : undefined}
        />
      </Content>
    </HeaderLayout>
  );
};
