import { ComponentMeta } from "@storybook/react";
import { ModelRouter } from "../model-router";
import { withMemoryRouter, withNotificationCenter } from "../../../storybook";
import { LoadingRequest } from "../model-router.types";
import { ModelRouterTemplate, baseArgs } from "./templates";

export default {
  title: "Generators/ModelRouter/ListScreen",
  component: ModelRouter,
  decorators: [withMemoryRouter(), withNotificationCenter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ModelRouter>;

export const Loading = ModelRouterTemplate.bind({});
Loading.args = {
  ...baseArgs,
  listRequest: LoadingRequest,
};
