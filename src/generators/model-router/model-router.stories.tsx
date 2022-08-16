import React from "react";
import { ComponentMeta } from "@storybook/react";
import { withBrowserRouter } from "../../storybook";
import { ModelRouter, ModelRouterProps } from "./model-router";
import { RequestState } from "./model-router.types";
import { mockModel, createModelInstance } from "../generators.mock";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { NotificationCenterProvider } from "../../providers";

const REQUEST_TIMEOUT = 2000;

const data = [
  createModelInstance(mockModel, 100),
  createModelInstance(mockModel, 101),
  createModelInstance(mockModel, 102),
  createModelInstance(mockModel, 103),
  createModelInstance(mockModel, 104),
];

export default {
  title: "Generators/ModelRouter",
  component: ModelRouter,
  decorators: [withBrowserRouter()],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ModelRouter>;

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

  return (
    <NotificationCenterProvider>
      <ModelRouter
        {...args}
        requestList={() => {
          requestListAction();
          setListRequestState({ idle: false, loading: true });
          setTimeout(() => {
            setData(initialData);
            setListRequestState({ idle: true, loading: false, success: true });
          }, requestTimeout);
        }}
        list={{
          data,
          listRequest: listRequestState,
          requestDelete: removeRequestState,
          onClickRemoveItem: (item) => {
            setRemoveRequestState({ idle: false, loading: true });
            onRequestDeleteAction(item);

            setTimeout(() => {
              setData((d) => [...d.filter((d) => d !== item)]);
              setRemoveRequestState({ idle: true, loading: false, success: true });
            }, requestTimeout);
          },
        }}
        add={{
          request: addRequestState,
          onSubmit: (obj: any) => {
            setAddRequestState({ idle: false, loading: true });
            onSubmitAddAction(obj);

            setTimeout(() => {
              setData((d) => [...d, obj]);
              setAddRequestState({ idle: true, loading: false, success: true });
            }, requestTimeout);
          },
        }}
        detail={{
          request: detailRequestState,
          instance: detailInstance,
          onScreenMount: (id: string) => {
            setDetailInstance(undefined);
            setDetailRequestState({ idle: false, loading: true });
            onDetailsScreenMount(id);

            setTimeout(() => {
              setDetailInstance(data?.find((d) => d.id === id));
              setDetailRequestState({ idle: true, loading: false, success: true });
            }, requestTimeout);
          },
        }}
        update={{
          request: updateRequestState,
          requestInstance: updateInstanceRequestState,
          instance: updateInstance,
          onRequestInstance: (id: string) => {
            setUpdateInstanceRequestState({ idle: false, loading: true });
            onRequestUpdateInstanceAction(id);

            setTimeout(() => {
              setUpdateInstance(data?.find((d) => d.id === id));
              setUpdateInstanceRequestState({ idle: true, loading: false, success: true });
            }, requestTimeout);
          },
          onSubmit: (obj: any) => {
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
          },
        }}
      />
    </NotificationCenterProvider>
  );
};

DummyModelRouter.args = {
  modelName: "Items",
  model: mockModel,
  requestTimeout: REQUEST_TIMEOUT,
  initialData: data,
  requestListAction,
  onSubmitAddAction,
  onDetailsScreenMount,
  onRequestUpdateInstanceAction,
  onSubmitUpdateAction,
  onRequestDeleteAction,
};
