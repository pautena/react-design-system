import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../storybook";
import { ContentPlaceholder } from "./components";

export default {
  title: "Test/ContentPlaceholder",
  component: ContentPlaceholder,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ContentPlaceholder>;

const Template = createTemplate(ContentPlaceholder);

export const Default = Template.bind({});
Default.args = {};
