import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import { DrawerNavigationItem } from "../drawer.types";

export const SectionItems: DrawerNavigationItem[] = [
  {
    id: "item1.1",
    text: "Item 1",
    icon: <DiamondIcon />,
    href: "/items/1-1",
  },
  {
    id: "item1.2",
    text: "Item 2",
    href: "/items/1-2",
    avatar: {
      src: "https://c.pxhere.com/images/f6/e0/022ab77c391925931fe227c97ab4-1447675.jpg!d",
      alt: "Avatar 1",
    },
  },
  {
    id: "item1.3",
    text: "Item 3",
    href: "/items/1-3",
    bullet: {
      variant: "secondary",
    },
  },
  {
    id: "item1.4",
    text: "Item 4",
    href: "/items/1-4",
    icon: <DiamondIcon />,
    label: {
      text: "new",
      variant: "error",
    },
  },
];
