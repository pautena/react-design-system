import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../storybook";
import Autocomplete from "./autocomplete";

const options: string[] = [...faker.definitions.vehicle.model];

export default {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  decorators: [withContainer({ width: 320 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Autocomplete>;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {
    label: "Car model",
    options,
  },
};

export const HelperText: Story = {
  args: {
    ...Default.args,
    helperText: "Search by partial model name",
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

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};
