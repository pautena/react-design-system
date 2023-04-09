import React from "react";
import { DrawerCollapsableItem } from "./drawer-collapsable-item";
import { DrawerNavigationItem, DrawerSize, DrawerSubmenuVariant } from "../drawer.types";
import { DrawerItemLink } from "./drawer-item-link";

export interface DrawerItemProps {
  item: DrawerNavigationItem;
  selectedItem?: string;
  size?: DrawerSize;
  submenuVariant?: DrawerSubmenuVariant;
}

export const DrawerItem = ({
  selectedItem,
  item,
  size = "medium",
  submenuVariant = "collapse",
}: DrawerItemProps) => {
  if ("items" in item) {
    const { id, text, icon, items } = item;
    const childrenSelected = items.some((item) => item.id === selectedItem);
    return (
      <DrawerCollapsableItem
        size={size}
        submenuVariant={submenuVariant}
        selectedItem={selectedItem}
        selected={id === selectedItem || childrenSelected}
        text={text}
        icon={icon}
        items={items}
      />
    );
  } else {
    const { id, text, icon, avatar, label, bullet, href } = item;
    return (
      <DrawerItemLink
        selected={id === selectedItem}
        size={size}
        text={text}
        icon={icon}
        avatar={avatar}
        label={label}
        bullet={bullet}
        href={href}
      />
    );
  }
};
