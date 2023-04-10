import React from "react";
import {
  SxProps,
  Theme,
  drawerClasses,
  listItemButtonClasses,
  listItemIconClasses,
  listItemTextClasses,
  listSubheaderClasses,
  styled,
} from "@mui/material";
import { Drawer as MuiDrawer, Divider, IconButton, useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DrawerComponent, DrawerProps, DrawerState, DrawerVariant } from "../drawer.types";
import { useDrawer } from "./drawer.context";
import { closedMixin, openedMixin } from "./drawer.mixins";
import { labelClasses, bulletClasses } from "~/components/data-display";

const muiDrawerVariant: Record<DrawerVariant, "permanent" | "persistent" | "temporary"> = {
  temporary: "temporary",
  mini: "permanent",
  permanent: "permanent",
  "permanent-under": "permanent",
  persistent: "persistent",
};

const closeState: Record<DrawerVariant, DrawerState> = {
  temporary: "close",
  mini: "collapse",
  permanent: "close",
  "permanent-under": "close",
  persistent: "close",
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const Drawer: DrawerComponent = ({ children, ...rest }: DrawerProps) => {
  const theme = useTheme();
  const { state, setState, drawerWidth, variant } = useDrawer();
  const isOpen = state === "open";

  const sx: SxProps<Theme> = {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(isOpen && {
      ...openedMixin(theme),
      [`& .${drawerClasses.paper}`]: openedMixin(theme),
    }),
    ...(!isOpen && {
      ...closedMixin(theme),
      [`& .${drawerClasses.paper}`]: closedMixin(theme),
    }),
  };

  const hideIfClosed = !isOpen && {
    display: "none",
  };

  const collapseSx =
    state === "collapse"
      ? {
          // [`& .${listItemIconClasses.root}`]: {
          //   minWidth: 0,
          //   justifyContent: "center",
          //   ...(isOpen
          //     ? {
          //         marginRight: theme.spacing(3),
          //       }
          //     : {
          //         marginRight: "auto",
          //       }),
          // },
          // [`& .${listItemButtonClasses.root}`]: {
          //   paddingHorizontal: theme.spacing(2.5),
          //   ...(isOpen
          //     ? {
          //         justifyContent: "initial",
          //       }
          //     : {
          //         justifyContent: "center",
          //       }),
          // },
          [`& .${labelClasses.root}`]: hideIfClosed,
          [`& .${bulletClasses.root}`]: hideIfClosed,
          // [`& .${listSubheaderClasses.root}`]: hideIfClosed,
          // [`& .${listItemTextClasses.root}`]: {
          //   opacity: isOpen ? 1 : 0,
          // },
          // ...(isOpen && {
          //   ...openedMixin(theme),
          //   "& .MuiDrawer-paper": openedMixin(theme),
          // }),
          // ...(!isOpen && {
          //   ...closedMixin(theme),
          //   "& .MuiDrawer-paper": closedMixin(theme),
          // }),
        }
      : {};

  return (
    <MuiDrawer
      open={isOpen}
      variant={muiDrawerVariant[variant]}
      role="menu"
      aria-hidden={!isOpen}
      sx={{ ...sx, ...collapseSx }}
      {...rest}
    >
      <DrawerHeader>
        <IconButton onClick={() => setState(closeState[variant])}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {children}
    </MuiDrawer>
  );
};
