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
  Drawer as MuiDrawer,
  Divider,
  IconButton,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DrawerComponent, DrawerProps, DrawerState, DrawerVariant } from "../drawer.types";
import { useDrawer } from "../drawer-provider/drawer-context";
import { closedMixin, openedMixin } from "../drawer-provider/drawer-mixins";
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

const hideIfClosed = (state: DrawerState) =>
  state !== "open" && {
    display: "none",
  };

type SxGenerator = (state: DrawerState, theme: Theme) => SxProps<Theme>;
const NoopSxGenerator = () => ({});
const variantsSx: Readonly<Record<DrawerVariant, SxGenerator>> = {
  mini: (state: DrawerState, theme: Theme) => ({
    boxSizing: "border-box",
    ...(state === "open" && {
      ...openedMixin(theme),
      [`& .${drawerClasses.paper}`]: openedMixin(theme),
    }),
    ...(state !== "open" && {
      ...closedMixin(theme),
      [`& .${drawerClasses.paper}`]: closedMixin(theme),
    }),
  }),
  temporary: NoopSxGenerator,
  permanent: NoopSxGenerator,
  "permanent-under": NoopSxGenerator,
  persistent: NoopSxGenerator,
};

const statesSx: Readonly<Record<DrawerState, SxGenerator>> = {
  open: NoopSxGenerator,
  close: NoopSxGenerator,
  collapse: (state: DrawerState, theme: Theme) => ({
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
    [`& .${labelClasses.root}`]: hideIfClosed(state),
    [`& .${bulletClasses.root}`]: hideIfClosed(state),
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
  }),
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

  const sx: any = {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    ...statesSx[state](state, theme),
    ...variantsSx[variant](state, theme),
  };

  return (
    <MuiDrawer
      open={isOpen}
      variant={muiDrawerVariant[variant]}
      role="menu"
      aria-hidden={!isOpen}
      sx={sx}
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
