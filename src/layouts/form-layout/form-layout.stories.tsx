import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { FormLayout } from "./form-layout";
import { mockModel, createModelInstance } from "../../generators/generators.mock";
import { withRouter } from "storybook-addon-react-router-v6";
import { action } from "@storybook/addon-actions";

const breadcrumbs = [
  {
    id: "list",
    text: "Items",
    link: "/items",
  },
  {
    id: "item",
    text: "Item 1",
    link: "/items/1",
  },
];

const args = {
  size: 100,
  dataSetType: "Commodity",
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions: [
      {
        id: "new",
        text: "Add",
      },
    ],
  },
  modelFormProps: {
    model: mockModel,
    onSubmit: action("submit model form"),
  },
};

export default {
  title: "Layouts/FormLayout",
  component: FormLayout,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FormLayout>;

const Template = createTemplate(FormLayout);

export const Add = Template.bind({});
Add.args = {
  ...args,
};

export const Update = Template.bind({});
Update.args = {
  ...args,
  modelFormProps: {
    ...args.modelFormProps,
    saveButtonText: "update",
    initialValues: createModelInstance(mockModel),
  },
};
