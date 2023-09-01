import { Meta } from "@storybook/react";
import { ObjectDetails } from "./ObjectDetails";
import { withPadding } from "../../Storybook";
import { createModelInstance, mockModel } from "../Generators.mock";

const instance = createModelInstance(mockModel);

export default {
  title: "Generators/ObjectDetails",
  component: ObjectDetails,
  decorators: [withPadding()],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ObjectDetails>;

export const Default = {
  args: {
    model: mockModel,
    instance: instance,
  },
};

export const Dense = {
  args: {
    model: mockModel,
    instance: instance,
    dense: true,
  },
};
