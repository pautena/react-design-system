import { List, useTheme } from "@mui/material";
import React from "react";
import { DrawerNavigationItem, DrawerSize, DrawerSubmenuVariant } from "../drawer.types";
import { DrawerSubheader } from "../drawer-subheader";
import { DrawerItem } from "../drawer-item/drawer-item";

export interface DrawerSectionProps {
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
  /**
   * Item size. default to medium
   */
  size?: DrawerSize;
  /**
   * How the submenu has to be shown. collapsable by default
   */
  submenuVariant?: DrawerSubmenuVariant;
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
  submenuVariant = "collapse",
}: DrawerSectionProps) => {
  const { spacing } = useTheme();
  return (
    <>
      {title && (
        <DrawerSubheader size={size} role="heading">
          {title}
        </DrawerSubheader>
      )}
      <List sx={{ paddingTop: size === "small" ? spacing(0) : undefined }}>
        {items.map((item) => (
          <DrawerItem
            key={item.id}
            item={item}
            size={size}
            submenuVariant={submenuVariant}
            selectedItem={selectedItem}
          />
        ))}
      </List>
    </>
  );
};
