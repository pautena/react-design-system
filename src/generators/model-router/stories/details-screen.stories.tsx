import { ComponentMeta } from "@storybook/react";
import { withNotificationCenter, createTemplate, withActionRouter } from "../../../storybook";
import { item1 } from "./templates";
import { DetailsScreen } from "../screens";
import { mockModel } from "../../generators.mock";
import { IdleRequest, LoadingRequest } from "../model-router.types";

export default {
  title: "Generators/ModelRouter/DetailsScreen",
  component: DetailsScreen,
  decorators: [
    withActionRouter({
      location: `/${item1.id}`,
      path: "/:id",
    }),
    withNotificationCenter,
  ],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DetailsScreen>;

const Template = createTemplate(DetailsScreen);

export const Loading = Template.bind({});
Loading.args = {
  modelName: "Items",
  model: mockModel,
  itemRequest: LoadingRequest,
};

export const Details = Template.bind({});
Details.args = {
  modelName: "Items",
  model: mockModel,
  itemRequest: IdleRequest,
  detailsItem: item1,
};
