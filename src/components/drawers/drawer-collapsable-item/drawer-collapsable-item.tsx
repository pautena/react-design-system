import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import React, { ReactElement, useState } from "react";
import { NavItem, NavItemLink } from "../drawer/drawer.types";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { DrawerItem } from "../drawer-item";

export interface DrawerCollapsableItemProps {
  /**
   * Text displayed inside the item
   */
  text: string;
  /**
   * Icon displayed to the left
   */
  icon?: ReactElement;
  /**
   * The item has to be marked as selected
   */
  selected?: boolean;
  /**
   * Id of the item that has to be marked as selected;
   */
  selectedItem?: string;
  /**
   * Items that are going to be displayed inside
   * the collapsable
   */
  items: NavItemLink[];
}

export const DrawerCollapsableItem = ({
  text,
  icon,
  selected,
  selectedItem,
  items,
}: DrawerCollapsableItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton selected={selected} onClick={() => setOpen((o) => !o)}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText primary={text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map(({ id, text, icon, avatar, label, bullet, href }) => (
            <DrawerItem
              key={id}
              selected={id === selectedItem}
              text={text}
              icon={icon}
              avatar={avatar}
              label={label}
              bullet={bullet}
              href={href}
              sx={{ pl: 4 }}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};
