import React from "react";
import { DrawerCollapsableItem } from "./drawer-collapsable-item";
import { DrawerNavigationItem, DrawerSize } from "../drawer.types";
import { DrawerItemLink } from "./drawer-item-link";
import { useDrawer } from "../drawer-provider/drawer-context";
import { useTheme } from "@mui/material";

export interface DrawerItemProps {
  item: DrawerNavigationItem;
  size?: DrawerSize;
  level?: number;
}

export const DrawerItem = ({ item, size = "medium", level = 0 }: DrawerItemProps) => {
  const {spacing} = useTheme();
  const { selectedItemId,state } = useDrawer();
  const itemSx = state === "open" ? {pl:spacing(2 + 1.5 * level)}:undefined;
  if ("items" in item) {
    const { id, text, icon, items } = item;
    const childrenSelected = items.some((item) => item.id === selectedItemId);
    return (
      <DrawerCollapsableItem
        size={size}
        selected={id === selectedItemId || childrenSelected}
        text={text}
        icon={icon}
        items={items}
        level={level}
        sx={itemSx}
      />
    );
  } else {
    const { id, text, icon, avatar, label, bullet, href } = item;
    return (
      <DrawerItemLink
        selected={id === selectedItemId}
        size={size}
        text={text}
        icon={icon}
        avatar={avatar}
        label={label}
        bullet={bullet}
        href={href}
        sx={itemSx}
      />
    );
  }
};
