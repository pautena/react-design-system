import type { Meta } from "@storybook/react";
import { createModelInstance, mockModel } from "../generators/generators.mock";
import { withPadding } from "../storybook";
import { ObjectDetails } from "./object-details";

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
