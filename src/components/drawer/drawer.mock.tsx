import React from "react";
import { Nav } from "./drawer.types";
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const mockNav: Nav = {
  items: [
    {
      items: [
        {
          id: "item1.1",
          text: "Item 1.1",
          icon: <DiamondIcon />,
          href: "/items/1-1",
        },
        {
          id: "item1.2",
          text: "Item 1.2",
          href: "/items/1-2",
          icon: <DiamondIcon />,
        },
        {
          id: "item1.3",
          text: "Item 1.3",
          href: "/items/1-3",
          icon: <DiamondIcon />,
          bullet: {
            variant: "secondary",
          },
        },
        {
          id: "item1.4",
          text: "Item 1.4",
          href: "/items/1-4",
          icon: <DiamondIcon />,
          bullet: {
            variant: "error",
          },
        },
      ],
    },
    {
      title: "Section 2",
      items: [
        {
          id: "item2.1",
          text: "Item 2.1",
          href: "/items/2-1",
          icon: <DiamondIcon />,
          label: {
            text: "10",
            variant: "error",
          },
        },
        {
          id: "item2.2",
          text: "Item 2.2",
          href: "/items/2-2",
          icon: <MenuBookIcon />,
          label: {
            text: "new",
            variant: "info",
          },
        },
      ],
    },
    {
      title: "Section avatar",
      items: [
        {
          id: "item.a.1",
          text: "Avatar 1",
          href: "/items/a-1",
          avatar: {
            src: "https://c.pxhere.com/images/f6/e0/022ab77c391925931fe227c97ab4-1447675.jpg!d",
            alt: "Avatar 1",
          },
        },
        {
          id: "item.a.2",
          text: "Avatar 2",
          href: "/items/a-2",
          avatar: {
            src: "https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u-15354603894rE.jpg",
            alt: "Avatar 2",
          },
        },
      ],
    },
  ],
};
