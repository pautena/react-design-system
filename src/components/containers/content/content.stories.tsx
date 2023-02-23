import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { Content } from "./content";
import { SkeletonGrid } from "~/components/placeholders";

export default {
  title: "Components/Containers/Content",
  component: Content,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Content>;

const Template = createTemplate(() => {
  return (
    <Content>
      <SkeletonGrid />
    </Content>
  );
});

export const Default = Template.bind({});
