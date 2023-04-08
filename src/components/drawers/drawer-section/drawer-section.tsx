import { List, ListSubheader } from "@mui/material";
import React from "react";
import { DrawerCollapsableItem } from "../drawer-collapsable-item";
import { DrawerItem } from "../drawer-item";
import { DrawerNavigationItem, DrawerSize } from "../drawer.types";

export interface DrawerSectionProps {
  /**
   * Item size. default to medium
   */
  size?: DrawerSize;
  /**
   * Section title
   */
  title?: string;
  /**
   * List of items of that section
   */
  items: DrawerNavigationItem[];

  /**
   * Id of the item that has to be marked as selected
   */
  selectedItem?: string;
}

/**
 * Render a group of items inside the drawer
 * with an optional title
 */
export const DrawerSection = ({
  title,
  items,
  selectedItem,
  size = "medium",
}: DrawerSectionProps) => {
  return (
    <>
      {title && <ListSubheader role="heading">{title}</ListSubheader>}
      <List>
        {items.map((item) => {
          if ("items" in item) {
            const { id, text, icon, items } = item;
            const childrenSelected = items.some((item) => item.id === selectedItem);
            return (
              <DrawerCollapsableItem
                key={id}
                size={size}
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
              <DrawerItem
                key={id}
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
        })}
      </List>
    </>
  );
};
