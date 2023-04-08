import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  useTheme,
  Popover,
} from "@mui/material";
import React, { ReactElement, useRef, useState } from "react";
import {
  DrawerNavigationItemLink,
  DrawerSize,
  DrawerSubmenuVariant,
  getDrawerItemColors,
} from "../drawer.types";
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
  const anchorEl = useRef<HTMLLIElement | null>(null);
  const [open, setOpen] = useState(false);
  const { color, fontWeight } = getDrawerItemColors(useTheme(), selected);

  const submenu = (
    <List component="div" disablePadding className={drawerCollapsableItemClasses.collapseContent}>
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
  );

  return (
    <>
      <ListItem ref={anchorEl} disablePadding dense={size === "small"} sx={{ display: "block" }}>
        <ListItemButton selected={selected} onClick={() => setOpen((o) => !o)}>
          {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
          <ListItemText disableTypography primary={text} sx={{ color, fontWeight }} />
          {open && submenuVariant === "collapse" ? (
            <ExpandMoreIcon className={drawerCollapsableItemClasses.collapseIcon} sx={{ color }} />
          ) : (
            <ChevronRightIcon
              className={drawerCollapsableItemClasses.collapseIcon}
              sx={{ color }}
            />
          )}
        </ListItemButton>
      </ListItem>
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
