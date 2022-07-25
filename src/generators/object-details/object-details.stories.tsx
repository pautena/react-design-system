import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ObjectDetails } from "./object-details";
import { withPadding } from "../../storybook";
import { createModelInstance, mockModel } from "../generators.mock";

const instance = createModelInstance(mockModel);

export default {
  title: "Generators/ObjectDetails",
  component: ObjectDetails,
  decorators: [withPadding()],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ObjectDetails>;

export const Default = () => {
  return <ObjectDetails model={mockModel} instance={instance} />;
};
