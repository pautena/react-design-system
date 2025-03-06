import { Meta, StoryObj } from "@storybook/react";
import { DrawerSection, DrawerSectionProps } from "./drawer-section";
import { mockMenuDrawerNavigationSection } from "src/drawerx/drawer/drawer.mock";
import { DrawerProvider } from "src/drawer-provider";
import { DrawerState } from "src/drawerx/drawer";

type DrawerSectionArgs = DrawerSectionProps & {
  initialState?: DrawerState;
  selectedItemId?: string;
};

export default {
  title: "Components/Drawers/DrawerSection",
  component: DrawerSection,
  parameters: {
    layout: "centered",
  },
  render: ({ initialState = "open", selectedItemId, ...args }) => (
    <DrawerProvider initialState={initialState} selectedItemId={selectedItemId}>
      <DrawerSection {...args} />{" "}
    </DrawerProvider>
  ),
} satisfies Meta<DrawerSectionArgs>;
type Story = StoryObj<DrawerSectionArgs>;

export const WihtoutTitle = {
  args: {
    items: mockMenuDrawerNavigationSection.items,
    selectedItemId: "item2.3.2",
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

export const Collapsed: Story = {
  args: {
    ...Default.args,
    initialState: "collapse",
  },
};
