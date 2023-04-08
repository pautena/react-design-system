import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  useTheme,
} from "@mui/material";
import React, { ReactElement, useState } from "react";
import { DrawerNavigationItemLink, DrawerSize, getDrawerItemColors } from "../drawer.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerItem } from "../drawer-item";

export interface DrawerCollapsableItemProps {
  /**
   * Item size. default to medium
   */
  size?: DrawerSize;
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
  items: DrawerNavigationItemLink[];
}

export const DrawerCollapsableItem = ({
  text,
  icon,
  selected,
  selectedItem,
  items,
  size = "medium",
}: DrawerCollapsableItemProps) => {
  const [open, setOpen] = useState(false);
  const { color, fontWeight } = getDrawerItemColors(useTheme(), selected);

  return (
    <>
      <ListItem disablePadding dense={size === "small"} sx={{ display: "block" }}>
        <ListItemButton selected={selected} onClick={() => setOpen((o) => !o)}>
          {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
          <ListItemText disableTypography primary={text} sx={{ color, fontWeight }} />
          {open ? <ExpandMoreIcon sx={{ color }} /> : <ChevronRightIcon sx={{ color }} />}
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
              size={size}
              sx={{ pl: 4 }}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};
