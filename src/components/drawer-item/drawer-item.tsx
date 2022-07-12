import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Bullet } from "../bullet";
import { Label } from "../label";
import { useDrawer } from "../drawer/drawer.context";
import { NavItem } from "../drawer/drawer.types";

export interface DrawerItemProps {
  item: NavItem;
}

export const DrawerItem = ({ item }: DrawerItemProps) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton>
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        {item.avatar && (
          <ListItemAvatar>
            <Avatar alt={item.avatar.alt} src={item.avatar.src} />
          </ListItemAvatar>
        )}
        <ListItemText primary={item.name} />
        {item.label && <Label text={item.label.text} variant={item.label.variant} />}
        {item.bullet && <Bullet variant={item.bullet.variant} />}
      </ListItemButton>
    </ListItem>
  );
};
