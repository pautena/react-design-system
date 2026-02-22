import type { Meta, StoryObj } from "@storybook/react";
import Content from "@/components/content";
import { DrawerAppBar } from "@/components/drawer-app-bar";
import { DrawerContent } from "@/components/drawer-content";
import { DrawerProvider } from "@/components/drawer-context";
import { DrawerMain } from "@/components/drawer-main";
import { mockDrawerNavigation } from "@/components/drawerx/drawer.mock";
import type {
  DrawerState,
  DrawerVariant,
} from "@/components/drawerx/drawer.types";
import SkeletonGrid from "@/components/skeleton-grid";
import Drawer from "./drawer";

interface DrawerDemoArgs {
  initialState: DrawerState;
  variant: DrawerVariant;
  selectedItemId?: string;
  clipped?: boolean;
}

export default {
  title: "Navigation/Drawer demo",
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, variant, selectedItemId, clipped }) => (
    <DrawerProvider
      initialState={initialState}
      variant={variant}
      selectedItemId={selectedItemId}
      clipped={clipped}
    >
      <DrawerAppBar title="Drawer demo" />
      <Drawer>
        <DrawerContent navigation={mockDrawerNavigation} />
      </Drawer>
      <DrawerMain>
        <Content className="p-3">
          <SkeletonGrid />
        </Content>
      </DrawerMain>
    </DrawerProvider>
  ),
} satisfies Meta<DrawerDemoArgs>;

type Story = StoryObj<DrawerDemoArgs>;

export const Temporary: Story = {
  args: {
    variant: "temporary",
    selectedItemId: "item2.3.2",
  },
};

export const TemporaryClipped: Story = {
  args: {
    ...Temporary.args,
    variant: "temporary",
    clipped: true,
  },
};

export const Persistent: Story = {
  args: {
    ...Temporary.args,
    variant: "persistent",
  },
};

export const PersistentClipped: Story = {
  args: {
    ...Temporary.args,
    variant: "persistent",
    clipped: true,
  },
};

export const MiniDrawer: Story = {
  args: {
    ...Temporary.args,
    variant: "mini",
  },
};
