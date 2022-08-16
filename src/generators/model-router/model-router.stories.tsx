import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate, withMemoryRouter, withNotificationCenter } from "../../storybook";
import { ModelRouter } from "./model-router";
import { RequestState, IdleRequest } from "./model-router.types";
import { mockModel, createModelInstance } from "../generators.mock";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

const REQUEST_TIMEOUT = 2000;

const item1 = createModelInstance(mockModel, 100);
const data = [
  item1,
  createModelInstance(mockModel, 101),
  createModelInstance(mockModel, 102),
  createModelInstance(mockModel, 103),
  createModelInstance(mockModel, 104),
];

export default {
  title: "Generators/ModelRouter",
  component: ModelRouter,
  decorators: [withMemoryRouter, withNotificationCenter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ModelRouter>;

const ModelRouterTemplate = createTemplate(ModelRouter);

export const ListScreenLoading = ModelRouterTemplate.bind({});
ListScreenLoading.args = {
  modelName: "Items",
  model: mockModel,
  requestList: () => null,
  list: {
    data,
    listRequest: IdleRequest,
    requestDelete: IdleRequest,
    onClickRemoveItem: () => null,
  },
  add: {
    request: IdleRequest,
    onSubmit: () => null,
  },
  detail: {
    request: IdleRequest,
    instance: item1,
    onScreenMount: () => null,
  },
  update: {
    request: IdleRequest,
    requestInstance: item1,
    instance: item1,
    onRequestInstance: () => null,
    onSubmit: () => null,
  },
};

const requestListAction = action("Request list data");
const onSubmitAddAction = action("Submit add form");
const onDetailsScreenMount = action("Details screen mount");
const onRequestUpdateInstanceAction = action("Request update instance");
const onSubmitUpdateAction = action("Submit update form");
const onRequestDeleteAction = action("click delete item option");

export const DummyModelRouter = (args: any) => {
  const {
    requestTimeout,
    initialData,
    requestListAction,
    onSubmitAddAction,
    onDetailsScreenMount,
    onRequestUpdateInstanceAction,
    onSubmitUpdateAction,
    onRequestDeleteAction,
  } = args;

  const [data, setData] = useState<any[]>([]);
  const [updateInstance, setUpdateInstance] = useState<any>(undefined);
  const [listRequestState, setListRequestState] = useState<RequestState>({ idle: true });
  const [addRequestState, setAddRequestState] = useState<RequestState>({ idle: true });
  const [updateRequestState, setUpdateRequestState] = useState<RequestState>({ idle: true });
  const [updateInstanceRequestState, setUpdateInstanceRequestState] = useState<RequestState>({
    idle: true,
  });
  const [removeRequestState, setRemoveRequestState] = useState<RequestState>({ idle: true });
  const [detailRequestState, setDetailRequestState] = useState<RequestState>({ idle: true });
  const [detailInstance, setDetailInstance] = useState(undefined);

  const handleRequestList = () => {
    requestListAction();
    setListRequestState({ idle: false, loading: true });
    setTimeout(() => {
      setData(initialData);
      setListRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  const handleClickRemoveItem = (item) => {
    setRemoveRequestState({ idle: false, loading: true });
    onRequestDeleteAction(item);

    setTimeout(() => {
      setData((d) => [...d.filter((d) => d !== item)]);
      setRemoveRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  const handleAddSubmit = (obj: any) => {
    setAddRequestState({ idle: false, loading: true });
    onSubmitAddAction(obj);

    setTimeout(() => {
      setData((d) => [...d, obj]);
      setAddRequestState({ idle: true, loading: false, success: true });
    }, requestTimeout);
  };

  const handleDetailScreenMount = (id: string) => {
    setDetailInstance(undefined);
    setDetailRequestState({ idle: false, loading: true });
    onDetailsScreenMount(id);

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
      list={{
        data,
        listRequest: listRequestState,
        requestDelete: removeRequestState,
        onClickRemoveItem: handleClickRemoveItem,
      }}
      add={{
        request: addRequestState,
        onSubmit: handleAddSubmit,
      }}
      detail={{
        request: detailRequestState,
        instance: detailInstance,
        onScreenMount: handleDetailScreenMount,
      }}
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

DummyModelRouter.args = {
  requestTimeout: REQUEST_TIMEOUT,
  initialData: data,
  requestListAction,
  onSubmitAddAction,
  onDetailsScreenMount,
  onRequestUpdateInstanceAction,
  onSubmitUpdateAction,
  onRequestDeleteAction,
};
