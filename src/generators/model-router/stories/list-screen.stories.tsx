import { ComponentMeta } from "@storybook/react";
import { withActionRouter, withNotificationCenter } from "../../../storybook";
import { IdleRequest, LoadingRequest } from "../model-router.types";
import { data } from "./templates";
import { createTemplate } from "../../../storybook";
import { ListScreen } from "../screens";
import { mockModel } from "../../generators.mock";

export default {
  title: "Generators/ModelRouter/ListScreen",
  component: ListScreen,
  decorators: [withActionRouter(), withNotificationCenter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ListScreen>;

const Template = createTemplate(ListScreen);

export const ListLoading = Template.bind({});
ListLoading.args = {
  modelName: "Items",
  model: mockModel,
  listData: data,
  listRequest: LoadingRequest,
  deleteRequest: IdleRequest,
};

export const DeleteLoading = Template.bind({});
DeleteLoading.args = {
  modelName: "Items",
  model: mockModel,
  listData: data,
  listRequest: IdleRequest,
  deleteRequest: LoadingRequest,
};

export const List = Template.bind({});
List.args = {
  modelName: "Items",
  model: mockModel,
  listData: data,
  listRequest: IdleRequest,
  deleteRequest: IdleRequest,
};
