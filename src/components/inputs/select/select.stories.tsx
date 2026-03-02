import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "@/storybook";
import { Select, type SelectOption } from "./select";

const options: SelectOption[] = faker.definitions.vehicle.model
  .slice(0, 12)
  .map((option) => ({ value: option, label: option }));

export default {
  title: "forms/Select",
  component: Select,
  decorators: [withContainer({ width: 260 })],
  parameters: {
    layout: "centered",
  },
  render: (args) => <Select {...args} />,
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Car model",
    value: options[0].value,
    options,
    fullWidth: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Fetching: Story = {
  args: {
    ...Default.args,
    fetching: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    helperText: "Select your vehicle model",
    error: "A model selection is required",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};
