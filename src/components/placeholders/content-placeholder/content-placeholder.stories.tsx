import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { ContentPlaceholder } from "./content-placeholder";

export default {
  title: "Components/Placeholders/ContentPlaceholder",
  component: ContentPlaceholder,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ContentPlaceholder>;

const Template = createTemplate(ContentPlaceholder);

export const Default = Template.bind({});
