import type { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "@/components/drawer-content";
import { DrawerProvider } from "@/components/drawer-context";
import { mockDrawerNavigation } from "@/components/drawerx/drawer.mock";
import type { DrawerState } from "@/components/drawerx/drawer.types";
import Drawer from "./drawer";

interface DrawerDemoArgs {
  initialState: DrawerState;
  selectedItemId?: string;
}

export default {
  title: "Navigation/Drawer",
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, selectedItemId }) => (
    <DrawerProvider
      initialState={initialState}
      variant="mini"
      selectedItemId={selectedItemId}
    >
      <Drawer>
        <DrawerContent navigation={mockDrawerNavigation} />
      </Drawer>
    </DrawerProvider>
  ),
} satisfies Meta<DrawerDemoArgs>;

type Story = StoryObj<DrawerDemoArgs>;

export const Default: Story = {
  args: {
    selectedItemId: "item2.3.2",
    initialState: "open",
  },
};
