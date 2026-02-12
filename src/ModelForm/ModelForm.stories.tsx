import type { Meta, StoryObj } from "@storybook/react";
import { createModelInstance, mockModel } from "../Generators/Generators.mock";
import { withLocalizationProvider, withPadding } from "../storybook";
import { ModelForm } from "./ModelForm";

const initialValues = createModelInstance(mockModel);

export default {
  title: "Generators/ModelForm",
  component: ModelForm,
  decorators: [withPadding(2), withLocalizationProvider],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ModelForm>;
type Story = StoryObj<typeof ModelForm>;

export const AddForm: Story = {
  args: {
    model: mockModel,
    saveButtonText: "add",
  },
};

export const UpdateForm: Story = {
  args: {
    model: mockModel,
    initialValues,
    saveButtonText: "update",
  },
};

export const UpdateFormDense: Story = {
  args: {
    model: mockModel,
    dense: true,
    initialValues,
    saveButtonText: "update",
  },
};
