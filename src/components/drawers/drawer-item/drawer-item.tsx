import React, { ReactElement } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  SxProps,
  Theme,
} from "@mui/material";
import { Bullet, Label } from "../../data-display";
import { NavItemAvatar, NavItemBullet, NavItemLabel } from "../drawer/drawer.types";
import { Link } from "../../navigation/link";

export interface DrawerItemProps {
  /**
   * Text displayed inside the item
   */
  text: string;
  /**
   * Url where the user is going to be redirected
   * if the item is clicked
   */
  href: string;
  /**
   * Icon displayed to the left
   */
  icon?: ReactElement;
  /**
   * Avatar displayed to the left
   */
  avatar?: NavItemAvatar;
  /**
   * Label with extra info displayed to the right
   */
  label?: NavItemLabel;
  /**
   * Bullet to attract the user attention displyed to the right
   */
  bullet?: NavItemBullet;
  /**
   * The item has to be marked as selected
   */
  selected?: boolean;
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const DrawerItemLink = styled(Link)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
  };
});

/**
 * Clicable item inside a drawer
 */
export const DrawerItem = ({
  text,
  icon,
  avatar,
  label,
  bullet,
  href,
  selected,
  sx,
}: DrawerItemProps) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }} component={DrawerItemLink} href={href}>
      <ListItemButton selected={selected} sx={sx}>
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
