import React from "react";
import { ComponentMeta } from "@storybook/react";
import { CenterContainer, CenterContainerProps } from "./center-container";
import { Label } from "../../data-display/label";
import { createTemplate, withContainer } from "../../../storybook";

export default {
  title: "Components/Containers/CenterContainer",
  component: CenterContainer,
  decorators: [withContainer({ height: 500, bordered: true })],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CenterContainer>;

const Template = createTemplate((args: CenterContainerProps) => {
  return (
    <CenterContainer {...args}>
      <Label text="Lorem ipsum" />
    </CenterContainer>
  );
});

export const Default = Template.bind({});
Default.args = {
  centerVertical: true,
  centerHorizontal: true,
};

export const VerticalCentered = Template.bind({});
VerticalCentered.args = {
  centerVertical: true,
  centerHorizontal: false,
};

export const HorizontallyCentered = Template.bind({});
HorizontallyCentered.args = {
  centerVertical: false,
  centerHorizontal: true,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  centerVertical: false,
  centerHorizontal: false,
  sx: {
    px: 3,
    py: 2,
  },
};
