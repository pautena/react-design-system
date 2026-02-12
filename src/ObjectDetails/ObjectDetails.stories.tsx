import type { Meta } from "@storybook/react";
import { createModelInstance, mockModel } from "../Generators/Generators.mock";
import { withPadding } from "../storybook";
import { ObjectDetails } from "./ObjectDetails";

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
