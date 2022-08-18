import { ComponentMeta } from "@storybook/react";
import { ModelRouter } from "../model-router";
import { withMemoryRouter, withNotificationCenter } from "../../../storybook";
import { ModelRouterTemplate, baseArgs, item1 } from "./templates";

export default {
  title: "Generators/ModelRouter/DetailScreen",
  component: ModelRouter,
  decorators: [withMemoryRouter([`/${item1.id}`]), withNotificationCenter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ModelRouter>;

export const Loading = ModelRouterTemplate.bind({});
Loading.args = {
  ...baseArgs,
  detail: {
    ...baseArgs.detail,
    request: { loading: true },
  },
};
