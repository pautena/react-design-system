import React from "react";
import { ComponentMeta } from "@storybook/react";
import { MiniDrawer } from ".";
import { mockNav } from "../drawer.mock";
import { DrawerContent } from "../../drawer-content";
import { DrawerProvider } from "../drawer.provider";
import { Nav } from "../../drawer.types";
import { withMemoryRouter } from "../../../../storybook";

export default {
  title: "Components/Drawers/MiniDrawer",
  component: MiniDrawer,
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MiniDrawer>;

interface Props {
  open: boolean;
  nav: Nav;
}

export const Default = ({ nav, open }: Props) => (
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
