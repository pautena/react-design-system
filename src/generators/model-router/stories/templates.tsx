import { ModelRouter } from "..";
import { createTemplate } from "../../../storybook";
import { createModelInstance, mockModel } from "../../generators.mock";
import { IdleRequest } from "../model-router.types";

export const REQUEST_TIMEOUT = 2000;

export const item1 = createModelInstance(mockModel, 100);
export const data = [
  item1,
  createModelInstance(mockModel, 101),
  createModelInstance(mockModel, 102),
  createModelInstance(mockModel, 103),
  createModelInstance(mockModel, 104),
];

export const ModelRouterTemplate = createTemplate(ModelRouter);

export const baseArgs = {
  modelName: "Items",
  model: mockModel,
  // List
  requestList: () => null,
  listData: data,
  listRequest: IdleRequest,
  deleteRequest: IdleRequest,
  // delete
  onClickDeleteItem: () => null,

  //Add
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
