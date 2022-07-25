import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { ModelRouter } from "./model-router";
import { withRouter } from "storybook-addon-react-router-v6";

const args = {
  basePath: "",
};

export default {
  title: "Generators/ModelRouter",
  component: ModelRouter,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ModelRouter>;

const Template = createTemplate(ModelRouter);

export const Default = Template.bind({});
Default.args = {
  ...args,
};
