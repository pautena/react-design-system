import React, { ReactElement } from "react";
import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
  styled,
  useTheme,
} from "@mui/material";
import { Bullet, Label } from "../../data-display";
import {
  DrawerItemAvatar,
  DrawerItemBullet,
  DrawerItemLabel,
  DrawerSize,
  getDrawerItemColors,
} from "../drawer.types";
import { Link } from "../../navigation/link";
import { useDrawer } from "../drawer-provider";

export interface DrawerItemLinkProps {
  /**
   * Item size. default to medium
   */
  size?: DrawerSize;
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
  avatar?: DrawerItemAvatar;
  /**
   * Label with extra info displayed to the right
   */
  label?: DrawerItemLabel;
  /**
   * Bullet to attract the user attention displyed to the right
   */
  bullet?: DrawerItemBullet;
  /**
   * The item has to be marked as selected
   */
  selected?: boolean;
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;

  hideIfCollapsed?: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyledLink = styled(Link)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
  };
});

/**
 * Clicable item inside a drawer
 */
export const DrawerItemLink = ({
  text,
  icon,
  avatar,
  label,
  bullet,
  href,
  selected,
  size = "medium",
  hideIfCollapsed = true,
  sx,
}: DrawerItemLinkProps) => {
  const { state } = useDrawer();
  const theme = useTheme();
  const { color, fontWeight } = getDrawerItemColors(theme, selected);

  return (
    <ListItemButton
      LinkComponent={StyledLink}
      dense={size === "small"}
      aria-label={text}
      href={href}
      selected={selected}
      sx={sx}
    >
      {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
      {avatar && (
        <ListItemAvatar>
          <Avatar
            alt={avatar.alt}
            src={avatar.src}
            sx={size === "small" ? { width: 24, height: 24 } : undefined}
          />
        </ListItemAvatar>
      )}
      <ListItemText disableTypography primary={text} sx={{ color, fontWeight }} />
      {label && <Label text={label.text} variant={label.variant} sx={{ ml: 2 }} />}
      {bullet && <Bullet variant={bullet.variant} sx={{ ml: 2 }} />}
    </ListItemButton>
  );
};
