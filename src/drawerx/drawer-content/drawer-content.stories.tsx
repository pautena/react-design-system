import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { mockDrawerNavigation } from "../drawer/drawer.mock";
import { DrawerProvider } from "../drawer-context";
import { DrawerContentProps, DrawerState } from "../drawer.types";

type DrawerContentArgs = DrawerContentProps & {
  initialState?: DrawerState;
  selectedItemId?: string;
};

export default {
  title: "Components/Drawers/DrawerContent",
  component: DrawerContent,
  render: ({ initialState = "open", selectedItemId, ...args }) => (
    <DrawerProvider initialState={initialState} selectedItemId={selectedItemId}>
      <DrawerContent {...args} />
    </DrawerProvider>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<DrawerContentArgs>;
type Story = StoryObj<DrawerContentArgs>;

export const Default: Story = {
  args: {
    selectedItemId: "item2.3.2",
    navigation: mockDrawerNavigation,
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
