import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { withRouter } from "storybook-addon-react-router-v6";
import { MiniDrawer } from "../mini-drawer";
import { mockNav } from "../drawer.mock";
import { DrawerContent } from "../../drawer-content";
import { DrawerProvider } from "../drawer.provider";

export default {
  title: "Drawers/MiniDrawer",
  component: MiniDrawer,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MiniDrawer>;

export const Default = ({ nav, open }) => (
  <DrawerProvider initialOpen={open}>
    <MiniDrawer>
      <DrawerContent nav={nav} />
    </MiniDrawer>
  </DrawerProvider>
);
Default.args = {
  nav: mockNav,
  open: true,
};
