import type { Meta, StoryObj } from "@storybook/react";
import { mockDrawerNavigation } from "@/components/navigation/drawer/drawer.mock";
import { DrawerContent } from "@/components/navigation/drawer-content/drawer-content";
import { DrawerProvider } from "@/components/navigation/drawer-context/drawer-provider";
import type { DrawerState } from "@/types/drawer.types";
import { Drawer } from "./drawer";

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
    <DrawerProvider initialState={initialState} selectedItemId={selectedItemId}>
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
