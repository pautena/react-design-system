import { grey } from "@mui/material/colors";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { withContainer, withLocalizationProvider } from "~/storybook";
import { SearchInput } from "./search-input";

export default {
  title: "Components/Inputs/SearchInput",
  component: SearchInput,
  decorators: [
    withLocalizationProvider,
    withContainer({ width: 400, height: 400, backgroundColor: grey[100], padding: 5 }),
  ],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const Label = Template.bind({});
Label.args = {
  label: "Lorem ipsum",
  fullWidth: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Lorem ipsum",
  fullWidth: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  placeholder: "Lorem ipsum",
  fullWidth: true,
  helperText: "this is a helper text",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Lorem ipsum",
  fullWidth: true,
  size: "small",
};

export const WithFilters = Template.bind({});
WithFilters.args = {
  placeholder: "Lorem ipsum",
  fullWidth: true,
  filters: [
    { id: "subject", type: "text", label: "Subject" },
    { id: "amount", type: "number", label: "Amount" },
    { id: "hasSomething", type: "boolean", label: "Has something" },
    { id: "createdBefore", type: "datetime", label: "Created before" },
  ],
};
