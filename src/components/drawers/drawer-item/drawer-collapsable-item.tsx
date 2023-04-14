import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  useTheme,
  Popover,
} from "@mui/material";
import React, { ReactElement, useState, useRef } from "react";
import { DrawerNavigationItem, DrawerSize, getDrawerItemColors } from "../drawer.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerItem } from "../drawer-item/drawer-item";
import { useDrawer } from "../drawer-provider";

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
   * Items that are going to be displayed inside
   * the collapsable
   */
  items: DrawerNavigationItem[];

  level: number;
}

export const DrawerCollapsableItem = ({
  text,
  icon,
  selected,
  items,
  size = "medium",
  level,
}: DrawerCollapsableItemProps) => {
  const { state } = useDrawer();
  const anchorEl = useRef<HTMLDivElement | null>(null);
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const { color, fontWeight } = getDrawerItemColors(useTheme(), selected);

  const submenu = (
    <List component="div" disablePadding>
      {items.map((item) => (
        <DrawerItem key={item.id} level={level + 1} item={item} size={size} />
      ))}
    </List>
  );

  const collapsedButtonSx =
    state === "collapse" && level === 0
      ? {
          position: "absolute",
          right: 0,
        }
      : {};

  return (
    <>
      <ListItemButton
        ref={anchorEl}
        selected={selected}
        aria-label={text}
        onClick={() => setOpen((o) => !o)}
        dense={size === "small"}
        sx={{ backgroundColor: open ? palette.action.hover : undefined }}
      >
        {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
        <ListItemText disableTypography primary={text} sx={{ color, fontWeight }} />
        {open && state === "open" ? (
          <ExpandMoreIcon sx={[{ color, ml: 2 }, collapsedButtonSx]} />
        ) : (
          <ChevronRightIcon sx={[{ color, ml: 2 }, collapsedButtonSx]} />
        )}
      </ListItemButton>
      {state === "open" ? (
        <Collapse in={open} timeout="auto" unmountOnExit aria-label={`${text} collapse submenu`}>
          {submenu}
        </Collapse>
      ) : (
        <Popover
          open={open}
          PaperProps={{
            elevation: 0,
            variant: "outlined",
          }}
          aria-label={`${text} popover submenu`}
          anchorEl={anchorEl.current}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {submenu}
        </Popover>
      )}
    </>
  );
};
