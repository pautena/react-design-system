import React from "react";
import { DrawerCollapsableItem } from "./drawer-collapsable-item";
import { DrawerNavigationItem, DrawerSize } from "../drawer.types";
import { DrawerItemLink } from "./drawer-item-link";
import { useDrawer } from "../drawer/drawer.context";

export interface DrawerItemProps {
  item: DrawerNavigationItem;
  size?: DrawerSize;
  hideIfCollapsed?: boolean;
}

export const DrawerItem = ({ item, size = "medium", hideIfCollapsed = true }: DrawerItemProps) => {
  const { selectedItemId } = useDrawer();
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
        hideIfCollapsed={hideIfCollapsed}
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
        hideIfCollapsed={hideIfCollapsed}
      />
    );
  }
};
