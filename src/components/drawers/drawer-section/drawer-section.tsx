import { List, useTheme } from "@mui/material";
import React from "react";
import { DrawerNavigationItem, DrawerSize } from "../drawer.types";
import { DrawerSubheader } from "../drawer-subheader";
import { DrawerItem } from "../drawer-item/drawer-item";
import { useDrawer } from "../drawer";

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
  const { state } = useDrawer();
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
          <DrawerItem key={item.id} item={item} size={size} selectedItem={selectedItem} />
        ))}
      </List>
    </>
  );
};
