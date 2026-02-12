import type { Meta, StoryObj } from "@storybook/react";
import { withContainer, withLocalizationProvider } from "../storybook";
import { SearchInput } from "./SearchInput";

export default {
  title: "Components/Inputs/SearchInput",
  component: SearchInput,
  decorators: [withLocalizationProvider],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SearchInput>;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: "Lorem ipsum",
    fullWidth: true,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
  },
};

export const HelperText: Story = {
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    helperText: "this is a helper text",
  },
};

export const Small: Story = {
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    size: "small",
  },
};

export const WithFilters: Story = {
  args: {
    placeholder: "Lorem ipsum",
    fullWidth: true,
    filters: [
      { id: "subject", type: "text", label: "Subject" },
      { id: "amount", type: "number", label: "Amount" },
      { id: "hasSomething", type: "boolean", label: "Has something" },
      { id: "createdBefore", type: "datetime", label: "Created before" },
    ],
  },
  decorators: [withContainer({ width: 400, height: 400, padding: 5 })],
};
