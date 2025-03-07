import { ReactElement } from "react";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import { Bullet } from "../../bullet";
import { Label } from "../../label";
import {
  DrawerItemAvatar,
  DrawerItemBullet,
  DrawerItemLabel,
  getDrawerItemColors,
} from "../drawer.types";
import { useDrawer } from "../drawer-context";

export interface DrawerItemLinkProps {
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
   * Deep level of this item inside the submenus
   */
  level: number;
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
}

const sxCollapsedIcon = {
  minWidth: 0,
  justifyContent: "center",
  marginRight: "auto",
};

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
  level,
  sx,
}: DrawerItemLinkProps) => {
  const { state, size } = useDrawer();
  const theme = useTheme();
  const { color, fontWeight } = getDrawerItemColors(theme, selected);
  const { LinkComponent } = useDrawer();

  return (
    <ListItemButton
      dense={size === "small"}
      LinkComponent={LinkComponent}
      aria-label={text}
      href={href}
      selected={selected}
      sx={{
        ...sx,
        px: 2.5,
        pl: state === "open" ? theme.spacing(2 + 1.5 * level) : undefined,
        ...(state === "collapse" && {
          paddingHorizontal: theme.spacing(2.5),
          justifyContent: "center",
        }),
      }}
    >
      {icon && (
        <ListItemIcon sx={{ color, ...(state === "collapse" && level === 0 && sxCollapsedIcon) }}>
          {icon}
        </ListItemIcon>
      )}
      {avatar && (
        <ListItemAvatar
          sx={{
            ...(state === "collapse" && level === 0 && sxCollapsedIcon),
          }}
        >
          <Avatar
            alt={avatar.alt}
            src={avatar.src}
            sx={{
              ...(size === "small" && { width: 24, height: 24 }),
              ...(state === "collapse" && { width: 30, height: 30 }),
            }}
          />
        </ListItemAvatar>
      )}
      <ListItemText
        disableTypography
        primary={text}
        sx={{ color, fontWeight, opacity: state === "collapse" && level === 0 ? 0 : undefined }}
      />
      {label && state === "open" && (
        <Label text={label.text} variant={label.variant} sx={{ ml: 2 }} />
      )}
      {bullet && state === "open" && <Bullet variant={bullet.variant} sx={{ ml: 2 }} />}
    </ListItemButton>
  );
};
