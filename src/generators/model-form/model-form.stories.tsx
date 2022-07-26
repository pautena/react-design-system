import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ModelForm } from "./model-form";
import { createTemplate, withPadding } from "../../storybook";
import { createModelInstance, mockModel } from "../generators.mock";

const initialValues = createModelInstance(mockModel);

export default {
  title: "Generators/ModelForm",
  component: ModelForm,
  decorators: [withPadding(2)],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ModelForm>;

const Template = createTemplate(ModelForm);

export const AddForm = Template.bind({});
AddForm.args = {
  model: mockModel,
  saveButtonText: "add",
};

export const UpdateForm = Template.bind({});
UpdateForm.args = {
  model: mockModel,
  initialValues,
  saveButtonText: "update",
};
