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
import {
  DrawerNavigationItem,
  DrawerSize,
  DrawerSubmenuVariant,
  getDrawerItemColors,
} from "../drawer.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerItem } from "../drawer-item/drawer-item";

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
   * How the submenu has to be shown. collapsable by default
   */
  submenuVariant?: DrawerSubmenuVariant;
}

export const drawerCollapsableItemClasses = {
  collapseIcon: "DraweCollapsableItem-collapseIcon",
  collapseRoot: "DraweCollapsableItem-collapseRoot",
  collapseContent: "DraweCollapsableItem-collapseContent",
};

export const DrawerCollapsableItem = ({
  text,
  icon,
  selected,
  selectedItem,
  items,
  size = "medium",
  submenuVariant = "collapse",
}: DrawerCollapsableItemProps) => {
  const anchorEl = useRef<HTMLDivElement | null>(null);
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const { color, fontWeight } = getDrawerItemColors(useTheme(), selected);

  const submenu = (
    <List component="div" disablePadding className={drawerCollapsableItemClasses.collapseContent}>
      {items.map((item) => (
        <DrawerItem
          key={item.id}
          item={item}
          selectedItem={selectedItem}
          size={size}
          submenuVariant={submenuVariant}
        />
      ))}
    </List>
  );

  return (
    <>
      <ListItemButton
        ref={anchorEl}
        selected={selected}
        onClick={() => setOpen((o) => !o)}
        dense={size === "small"}
        sx={{ backgroundColor: open ? palette.action.hover : undefined }}
      >
        {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
        <ListItemText disableTypography primary={text} sx={{ color, fontWeight }} />
        {open && submenuVariant === "collapse" ? (
          <ExpandMoreIcon className={drawerCollapsableItemClasses.collapseIcon} sx={{ color }} />
        ) : (
          <ChevronRightIcon className={drawerCollapsableItemClasses.collapseIcon} sx={{ color }} />
        )}
      </ListItemButton>
      {submenuVariant === "collapse" ? (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          aria-label={`${text} collapse submenu`}
          className={drawerCollapsableItemClasses.collapseRoot}
        >
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
