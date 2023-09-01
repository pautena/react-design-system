import { Meta, StoryObj } from "@storybook/react";
import { withActionRouter, withNotificationCenter } from "../../../Storybook";
import { IdleRequest, LoadingRequest } from "../ModelRouter.types";
import { data } from "./Templates";
import { ListScreen } from "../Screens";
import { mockModel } from "../../Generators.mock";

export default {
  title: "Generators/ModelRouter/ListScreen",
  component: ListScreen,
  decorators: [withActionRouter(), withNotificationCenter],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ListScreen>;
type Story = StoryObj<typeof ListScreen>;

export const ListLoading: Story = {
  args: {
    modelName: "Items",
    model: mockModel,
    listData: data,
    listRequest: LoadingRequest,
    deleteRequest: IdleRequest,
  },
};

export const DeleteLoading: Story = {
  args: {
    modelName: "Items",
    model: mockModel,
    listData: data,
    listRequest: IdleRequest,
    deleteRequest: LoadingRequest,
  },
};

export const List: Story = {
  args: {
    modelName: "Items",
    model: mockModel,
    listData: data,
    listRequest: IdleRequest,
    deleteRequest: IdleRequest,
  },
};

export const WithoutDeleteFeature: Story = {
  args: {
    modelName: "Items",
    model: mockModel,
    listData: data,
    listRequest: IdleRequest,
    deleteRequest: IdleRequest,
    deleteFeature: false,
  },
};

export const WithoutUpdateFeature: Story = {
  args: {
    modelName: "Items",
    model: mockModel,
    listData: data,
    listRequest: IdleRequest,
    deleteRequest: IdleRequest,
    updateFeature: false,
  },
};

export const WithoutDeleteAndUpdateFeature: Story = {
  args: {
    modelName: "Items",
    model: mockModel,
    listData: data,
    listRequest: IdleRequest,
    deleteRequest: IdleRequest,
    deleteFeature: false,
    updateFeature: false,
  },
};

export const WithoutAddFeature: Story = {
  args: {
    modelName: "Items",
    model: mockModel,
    listData: data,
    listRequest: IdleRequest,
    deleteRequest: IdleRequest,
    addFeature: false,
  },
};

export const WithoutDetailsFeature: Story = {
  args: {
    modelName: "Items",
    model: mockModel,
    listData: data,
    listRequest: IdleRequest,
    deleteRequest: IdleRequest,
    detailsFeature: false,
  },
};
