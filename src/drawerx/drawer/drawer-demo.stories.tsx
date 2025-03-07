import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider } from "../drawer-context";
import { mockDrawerNavigation } from "./drawer.mock";
import { DrawerState, DrawerVariant } from "../drawer.types";
import { DrawerAppBar } from "../drawer-app-bar";
import { DrawerMain } from "../drawer-main";
import { Drawer } from "./drawer";
import { ContentPlaceholder } from "../../content-placeholder";

interface DrawerDemoArgs {
  initialState: DrawerState;
  variant: DrawerVariant;
  selectedItemId?: string;
  clipped?: boolean;
}

export default {
  title: "Components/Drawers/Drawer demo",
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
        <ContentPlaceholder p={3} />
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
