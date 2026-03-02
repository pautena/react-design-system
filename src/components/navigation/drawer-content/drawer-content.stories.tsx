import type { Meta, StoryObj } from "@storybook/react";
import { mockDrawerNavigation } from "@/components/navigation/drawer/drawer.mock";
import { DrawerProvider } from "@/components/navigation/drawer-context/drawer-provider";
import type {
  DrawerContentProps,
  DrawerSize,
  DrawerState,
} from "@/types/drawer.types";
import { DrawerContent } from "./drawer-content";

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

export const MiniClosed: Story = {
  args: {
    ...Default.args,
    initialState: "close",
  },
};
