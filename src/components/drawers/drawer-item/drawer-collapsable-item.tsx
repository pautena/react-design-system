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
   * Id of the item that has to be marked as selected;
   */
  selectedItem?: string;
  /**
   * Items that are going to be displayed inside
   * the collapsable
   */
  items: DrawerNavigationItem[];
  /**
   * Hide or not the elements if the drawer is collapsed
   */
  hideIfCollapsed?: boolean;
}

export const DrawerCollapsableItem = ({
  text,
  icon,
  selected,
  selectedItem,
  items,
  size = "medium",
  hideIfCollapsed = true,
}: DrawerCollapsableItemProps) => {
  const { state } = useDrawer();
  const anchorEl = useRef<HTMLDivElement | null>(null);
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const { color, fontWeight } = getDrawerItemColors(useTheme(), selected);
  const hideElements = hideIfCollapsed && state === "collapse";

  const submenu = (
    <List component="div" disablePadding>
      {items.map((item) => (
        <DrawerItem
          key={item.id}
          hideIfCollapsed={false}
          item={item}
          selectedItem={selectedItem}
          size={size}
        />
      ))}
    </List>
  );

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
        {!hideElements && (
          <ListItemText disableTypography primary={text} sx={{ color, fontWeight }} />
        )}
        {open && !hideElements && <ExpandMoreIcon sx={{ color, ml: 2 }} />}
        {!open && !hideElements && <ChevronRightIcon sx={{ color, ml: 2 }} />}
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
