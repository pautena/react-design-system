import { List, ListSubheader } from "@mui/material";
import React from "react";
import { DrawerCollapsableItem } from "../drawer-collapsable-item";
import { DrawerItem } from "../drawer-item";
import { NavItem } from "../drawer.types";

export interface DrawerSectionProps {
  /**
   * Section title
   */
  title?: string;
  /**
   * List of items of that section
   */
  items: NavItem[];

  /**
   * Id of the item that has to be marked as selected
   */
  selectedItem?: string;
}

/**
 * Render a group of items inside the drawer
 * with an optional title
 */
export const DrawerSection = ({ title, items, selectedItem }: DrawerSectionProps) => {
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
