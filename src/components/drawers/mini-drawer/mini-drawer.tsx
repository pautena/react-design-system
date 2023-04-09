import { Drawer } from "../drawer-provider/drawer";
import { styled } from "@mui/material/styles";
import { drawerWidth, openedMixin, closedMixin } from "../drawer-provider/drawer.mixins";
import { useDrawer } from "../drawer-provider/drawer.context";
import {
  listItemButtonClasses,
  listItemIconClasses,
  listItemTextClasses,
  listSubheaderClasses,
} from "@mui/material";
import { labelClasses, bulletClasses } from "../../data-display";
import { drawerCollapsableItemClasses } from "../drawer-item";
import { DrawerSubmenuVariantProp } from "../drawer.types";

export const miniDrawerSubmenuVariant: DrawerSubmenuVariantProp = {
  open: "collapse",
  closed: "popover",
};

export const MiniDrawer = styled(Drawer)(({ theme }) => {
  const { state } = useDrawer();

  const isOpen = state === "open";
  const hideIfClosed = !isOpen && {
    display: "none",
  };

  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    [`& .${listItemIconClasses.root}`]: {
      minWidth: 0,
      justifyContent: "center",
      ...(isOpen
        ? {
            marginRight: theme.spacing(3),
          }
        : {
            marginRight: "auto",
          }),
    },
    [`& .${listItemButtonClasses.root}`]: {
      paddingHorizontal: theme.spacing(2.5),
      ...(isOpen
        ? {
            justifyContent: "initial",
          }
        : {
            justifyContent: "center",
          }),
    },
    [`& .${labelClasses.root}`]: hideIfClosed,
    [`& .${bulletClasses.root}`]: hideIfClosed,
    [`& .${listSubheaderClasses.root}`]: hideIfClosed,
    [`& .${drawerCollapsableItemClasses.collapseIcon}`]: hideIfClosed,
    [`& .${listItemTextClasses.root}`]: {
      opacity: isOpen ? 1 : 0,
    },
    ...(isOpen && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!isOpen && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  };
});

MiniDrawer.defaultProps = {
  variant: "permanent",
};
