import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "./breadcrumbs";

const items = [
  { id: "items", text: "Items", link: "/items" },
  { id: "item-1", text: "Item 1", link: "/items/1" },
  { id: "details", text: "Details", link: "/items/1/details" },
];

export default {
  title: "Data Display/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items,
  },
};

export const CustomSeparator: Story = {
  args: {
    items,
    separator: "/",
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ id: "details", text: "Details", link: "/items/1/details" }],
  },
};
