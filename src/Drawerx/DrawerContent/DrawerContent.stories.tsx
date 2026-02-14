import type { Meta, StoryObj } from "@storybook/react";
import { mockDrawerNavigation } from "../Drawer/Drawer.mock";
import type {
  DrawerContentProps,
  DrawerSize,
  DrawerState,
} from "../Drawer.types";
import { DrawerProvider } from "../DrawerContext";
import DrawerContent from "./DrawerContent";

type DrawerContentArgs = DrawerContentProps & {
  initialState?: DrawerState;
  selectedItemId?: string;
  size?: DrawerSize;
};

export default {
  title: "Navigation/DrawerContent",
  component: DrawerContent,
  render: ({
    initialState = "open",
    size = "medium",
    selectedItemId,
    ...args
  }) => (
    <DrawerProvider
      initialState={initialState}
      selectedItemId={selectedItemId}
      size={size}
    >
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
