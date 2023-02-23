import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DatatablePlaceholder } from "./datatable-placeholder";

export default {
  title: "Components/Placeholders/DatatablePlaceholder",
  component: DatatablePlaceholder,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DatatablePlaceholder>;

const Template = createTemplate(DatatablePlaceholder);

export const Default = Template.bind({});
