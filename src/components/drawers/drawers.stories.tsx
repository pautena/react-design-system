import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { withMemoryRouter } from "~/storybook";
import { Drawer, DrawerProvider } from "./drawer-provider";
import { mockDrawerNavigation } from "./drawer.mock";
import { ContentPlaceholder } from "../placeholders";
import { DrawerState, DrawerVariant } from "./drawer.types";
import { DrawerAppBar } from "./drawer-app-bar";

interface DrawerDemoArgs {
  initialState: DrawerState;
  variant: DrawerVariant;
  selectedItemId?: string;
}

export default {
  title: "Components/Drawers/Drawer demo",
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, variant, selectedItemId }) => (
    <DrawerProvider initialState={initialState} variant={variant} selectedItemId={selectedItemId}>
      <DrawerAppBar title="Drawer demo" />
      <Drawer>
        <DrawerContent nav={mockDrawerNavigation} />
      </Drawer>
      <ContentPlaceholder p={3} />
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

export const Permanent: Story = {
  args: {
    ...Temporary.args,
    variant: "permanent",
  },
};

export const PermanentUnder: Story = {
  args: {
    ...Temporary.args,
    variant: "permanent-under",
  },
};

export const MiniDrawer: Story = {
  args: {
    ...Temporary.args,
    variant: "mini",
  },
};
