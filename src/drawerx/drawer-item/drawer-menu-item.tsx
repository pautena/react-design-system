import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import Popover from "@mui/material/Popover";
import { SxProps, useTheme, Theme } from "@mui/material/styles";
import { ReactElement, useState, useRef, useEffect } from "react";
import { DrawerNavigationItem, getDrawerItemColors } from "../drawer.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerItem } from "./drawer-item";
import { useDrawer } from "../drawer-context";

export interface DrawerMenuItemProps {
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
  /**
   * Deep level of this item inside the submenus
   */
  level: number;
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
}

export const DrawerMenuItem = ({
  text,
  icon,
  selected,
  items,
  level,
  sx = {},
}: DrawerMenuItemProps) => {
  const { state, size } = useDrawer();
  const anchorEl = useRef<HTMLDivElement | null>(null);
  const { palette, spacing, transitions } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { color, fontWeight } = getDrawerItemColors(useTheme(), selected);
  const [canOpenCollapsed, setCanOpenCollapsed] = useState(true);

  useEffect(() => {
    if (menuOpen && state === "collapse") {
      setCanOpenCollapsed(false);
      setTimeout(() => {
        setCanOpenCollapsed(true);
      }, transitions.duration.leavingScreen);
    }
  }, [state]);

  const submenu = (
    <List component="div" disablePadding>
      {items.map((item) => (
        <DrawerItem key={item.id} level={level + 1} item={item} />
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
        onClick={() => setMenuOpen((o) => !o)}
        dense={size === "small"}
        sx={{
          ...sx,
          pl: state === "open" ? spacing(2 + 1.5 * level) : undefined,
          backgroundColor: menuOpen ? palette.action.hover : undefined,
        }}
      >
        {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
        <ListItemText
          disableTypography
          primary={text}
          sx={{ color, fontWeight, opacity: state === "collapse" && level === 0 ? 0 : undefined }}
        />
        {menuOpen && state === "open" ? (
          <ExpandMoreIcon sx={[{ color, ml: 2 }, collapsedButtonSx]} />
        ) : (
          <ChevronRightIcon sx={[{ color, ml: 2 }, collapsedButtonSx]} />
        )}
      </ListItemButton>
      {state === "open" ? (
        <Collapse
          in={menuOpen}
          timeout="auto"
          unmountOnExit
          aria-label={`${text} collapse submenu`}
        >
          {submenu}
        </Collapse>
      ) : (
        canOpenCollapsed && (
          <Popover
            open={menuOpen}
            slotProps={{
              paper: {
                elevation: 0,
                variant: "outlined",
              },
            }}
            aria-label={`${text} popover submenu`}
            anchorEl={anchorEl.current}
            onClose={() => setMenuOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {submenu}
          </Popover>
        )
      )}
    </>
  );
};
