import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { Bullet } from "../bullet";
import { Label } from "../label";
import { NavItem } from "../drawer/drawer.types";
import { Link } from "../link";

export type DrawerItemProps = Omit<NavItem, "id">;

const DrawerItemLink = styled(Link)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
  };
});

/**
 *
 */
export const DrawerItem = ({ text, icon, avatar, label, bullet, href }: DrawerItemProps) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }} component={DrawerItemLink} href={href}>
      <ListItemButton>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        {avatar && (
          <ListItemAvatar>
            <Avatar alt={avatar.alt} src={avatar.src} />
          </ListItemAvatar>
        )}
        <ListItemText primary={text} />
        {label && <Label text={label.text} variant={label.variant} />}
        {bullet && <Bullet variant={bullet.variant} />}
      </ListItemButton>
    </ListItem>
  );
};
