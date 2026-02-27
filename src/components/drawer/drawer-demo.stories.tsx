import type { Meta, StoryObj } from "@storybook/react";
import Content from "@/components/content";
import { DrawerContent } from "@/components/drawer-content";
import { DrawerProvider, useDrawer } from "@/components/drawer-context";
import { DrawerMain } from "@/components/drawer-main";
import { mockDrawerNavigation } from "@/components/drawerx/drawer.mock";
import type { DrawerState } from "@/components/drawerx/drawer.types";
import SkeletonGrid from "@/components/skeleton-grid";
import { Button } from "@/components/ui/button";
import Drawer from "./drawer";

interface DrawerDemoArgs {
  initialState: DrawerState;
  selectedItemId?: string;
}

function DrawerToggleButton() {
  const { state, switchState } = useDrawer();

  return (
    <Button type="button" variant="outline" size="sm" onClick={switchState}>
      {state === "open" ? "Collapse drawer" : "Expand drawer"}
    </Button>
  );
}

export default {
  title: "Navigation/Drawer demo",
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, selectedItemId }) => (
    <DrawerProvider initialState={initialState} selectedItemId={selectedItemId}>
      <Drawer>
        <DrawerContent navigation={mockDrawerNavigation} />
      </Drawer>
      <DrawerMain>
        <Content className="space-y-3 p-3">
          <DrawerToggleButton />
          <SkeletonGrid />
        </Content>
      </DrawerMain>
    </DrawerProvider>
  ),
} satisfies Meta<DrawerDemoArgs>;

type Story = StoryObj<DrawerDemoArgs>;

export const OpenByDefault: Story = {
  args: {
    initialState: "open",
    selectedItemId: "item2.3.2",
  },
};

export const ClosedByDefault: Story = {
  args: {
    initialState: "close",
    selectedItemId: "item2.3.2",
  },
};
