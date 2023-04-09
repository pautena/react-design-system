import { Meta, StoryObj } from "@storybook/react";
import { DrawerSection } from "./drawer-section";
import { withContainer } from "../../../storybook";
import { withMemoryRouter } from "~/storybook";
import { mockCollapsableDrawerNavigationSection } from "../drawer.mock";

export default {
  title: "Components/Drawers/DrawerSection",
  component: DrawerSection,
  decorators: [withMemoryRouter(), withContainer({ width: 250 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DrawerSection>;
type Story = StoryObj<typeof DrawerSection>;

export const WihtoutTitle = {
  args: {
    items: mockCollapsableDrawerNavigationSection.items,
  },
};

export const Default: Story = {
  args: {
    ...WihtoutTitle.args,
    title: "Lorem ipsum",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};
