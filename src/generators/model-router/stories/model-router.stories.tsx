import React from "react";
import { ComponentMeta } from "@storybook/react";
import { withMemoryRouter, withNotificationCenter } from "../../../storybook";
import { ModelRouter } from "../model-router";
import { IdleRequest } from "../model-router.types";
import { MockInstance, mockModel } from "../../generators.mock";
import { action, HandlerFunction } from "@storybook/addon-actions";
import { useState } from "react";
import { data, REQUEST_TIMEOUT } from "./templates";

export default {
  title: "Generators/ModelRouter",
  component: ModelRouter,
  decorators: [withMemoryRouter(), withNotificationCenter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ModelRouter>;

const onRequestListAction = action("Request list data");
const onSubmitNewItemAction = action("Submit new item");
const onRequestItem = action("Details screen mount");
const onRequestUpdateInstanceAction = action("Request update instance");
const onSubmitUpdateAction = action("Submit update form");
const onRequestDeleteAction = action("click delete item option");

interface DummyModelRouterProps {
  requestTimeout: number;
  initialData: MockInstance[];
  onRequestListAction: HandlerFunction;
  onSubmitNewItemAction: HandlerFunction;
  onRequestItem: HandlerFunction;
  onRequestUpdateInstanceAction: HandlerFunction;
  onSubmitUpdateAction: HandlerFunction;
  onRequestDeleteAction: HandlerFunction;
}

export const DummyModelRouter = (args: DummyModelRouterProps) => {
  const {
    requestTimeout,
    initialData,
    onRequestListAction,
    onSubmitNewItemAction,
    onRequestItem,
    onRequestUpdateInstanceAction,
    onSubmitUpdateAction,
    onRequestDeleteAction,
  } = args;

  const [data, setData] = useState<MockInstance[]>([]);
  const [updateInstance, setUpdateInstance] = useState<MockInstance | undefined>(undefined);
  const [listRequestState, setListRequestState] = useState(IdleRequest);
  const [newItemRequestState, setNewItemRequestState] = useState(IdleRequest);
  const [updateRequestState, setUpdateRequestState] = useState(IdleRequest);
  const [removeRequestState, setRemoveRequestState] = useState(IdleRequest);
  const [detailRequestState, setDetailRequestState] = useState(IdleRequest);
  const [updateInstanceRequestState, setUpdateInstanceRequestState] = useState(IdleRequest);
  const [detailInstance, setDetailInstance] = useState<MockInstance | undefined>(undefined);

  const handleRequestList = () => {
    onRequestListAction();
    setListRequestState({ idle: false, loading: true });
    setTimeout(() => {
      setData(initialData);
      setListRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  const handleClickDeleteItem = (item) => {
    setRemoveRequestState({ idle: false, loading: true });
    onRequestDeleteAction(item);

    setTimeout(() => {
      setData((d) => [...d.filter((d) => d !== item)]);
      setRemoveRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  const handleSubmitNewItem = (obj: MockInstance) => {
    setNewItemRequestState({ idle: false, loading: true });
    onSubmitNewItemAction(obj);

    setTimeout(() => {
      setData((d) => [...d, obj]);
      setNewItemRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  const handleRequestItem = (id: string) => {
    setDetailInstance(undefined);
    setDetailRequestState({ idle: false, loading: true });
    onRequestItem(id);

    setTimeout(() => {
      setDetailInstance(data?.find((d) => d.id === id));
      setDetailRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  const handleRequestUpdateInstance = (id: string) => {
    setUpdateInstanceRequestState({ idle: false, loading: true });
    onRequestUpdateInstanceAction(id);

    setTimeout(() => {
      setUpdateInstance(data?.find((d) => d.id === id));
      setUpdateInstanceRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  const handleUpdateSubmit = (obj: any) => {
    setUpdateRequestState({ idle: false, loading: true });
    onSubmitUpdateAction(obj);

    setTimeout(() => {
      setData((d) => [
        ...(d || []).map((item) => {
          if (item === obj) {
            return obj;
          }
          return item;
        }),
      ]);
      setUpdateRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  return (
    <ModelRouter
      {...args}
      modelName="Items"
      model={mockModel}
      requestList={handleRequestList}
      listData={data}
      listRequest={listRequestState}
      deleteRequest={removeRequestState}
      onClickDeleteItem={handleClickDeleteItem}
      itemRequest={detailRequestState}
      detailsItem={detailInstance}
      requestItem={handleRequestItem}
      newItemRequest={newItemRequestState}
      onSubmitNewItem={handleSubmitNewItem}
      update={{
        request: updateRequestState,
        requestInstance: updateInstanceRequestState,
        instance: updateInstance,
        onRequestInstance: handleRequestUpdateInstance,
        onSubmit: handleUpdateSubmit,
      }}
    />
  );
};

const args: DummyModelRouterProps = {
  requestTimeout: REQUEST_TIMEOUT,
  initialData: data,
  onRequestListAction,
  onSubmitNewItemAction,
  onRequestItem,
  onRequestUpdateInstanceAction,
  onSubmitUpdateAction,
  onRequestDeleteAction,
};

DummyModelRouter.args = args;
