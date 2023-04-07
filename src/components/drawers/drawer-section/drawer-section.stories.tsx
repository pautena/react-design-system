import { Meta, StoryObj } from "@storybook/react";
import { DrawerSection } from "./drawer-section";
import { withContainer } from "../../../storybook";
import { withMemoryRouter } from "~/storybook";
import { SectionItems } from "./drawer-section.mock";

export default {
  title: "Components/Drawers/DrawerSection",
  component: DrawerSection,
  decorators: [withMemoryRouter(), withContainer({ width: 250 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DrawerSection>;
type Story = StoryObj<typeof DrawerSection>;

export const Default: Story = {
  args: {
    title: "Lorem ipsum",
    items: SectionItems,
  },
};

export const WihtoutTitle = {
  args: {
    items: SectionItems,
  },
};
