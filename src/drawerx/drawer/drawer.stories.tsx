import type { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider } from "../drawer-context";
import type { DrawerState } from "../drawer.types";
import { Drawer } from "./drawer";
import { mockDrawerNavigation } from "./drawer.mock";

interface DrawerDemoArgs {
  initialState: DrawerState;
  selectedItemId?: string;
}

export default {
  title: "Components/Navigation/Drawer",
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
