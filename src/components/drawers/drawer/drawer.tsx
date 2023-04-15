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
  paperClasses,
  listClasses,
  listItemClasses,
  svgIconClasses,
  listItemAvatarClasses,
  avatarClasses,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DrawerComponent, DrawerProps, DrawerState, DrawerVariant } from "../drawer.types";
import { useDrawer } from "../drawer-provider/drawer-context";
import { closedMixin, openedMixin } from "../drawer-provider/drawer-mixins";
import { labelClasses, bulletClasses } from "~/components/data-display";

const showCloseButton: Record<DrawerVariant, boolean> = {
  temporary: true,
  mini: true,
  persistent: true,
  clipped: false,
};

const muiDrawerVariant: Record<DrawerVariant, "permanent" | "persistent" | "temporary"> = {
  temporary: "temporary",
  mini: "permanent",
  clipped: "permanent",
  persistent: "persistent",
};

type SxGenerator = (state: DrawerState, theme: Theme) => SxProps<Theme>;
const NoopSxGenerator = () => ({});
const variantsSx: Readonly<Record<DrawerVariant, SxGenerator>> = {
  mini: (state: DrawerState, theme: Theme) => ({
    boxSizing: "border-box",
    [`& .${paperClasses.root}`]: {
      zIndex: theme.zIndex.drawer - 1,
    },
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
  clipped: NoopSxGenerator,
  persistent: NoopSxGenerator,
};

const statesSx: Readonly<Record<DrawerState, SxGenerator>> = {
  open: NoopSxGenerator,
  close: NoopSxGenerator,
  collapse: (_: DrawerState, theme: Theme) => ({
    [`& .${listItemIconClasses.root}`]: {
      minWidth: 0,
      justifyContent: "center",
      marginRight: "auto",
    },
    [`& .${listItemAvatarClasses.root}`]: {
      minWidth: 0,
      justifyContent: "center",
      marginRight: "auto",
      [`& .${avatarClasses.root}`]: {
        width:30,
        height:30,
      }
    },
    [`& .${listItemButtonClasses.root}`]: {
      paddingHorizontal: theme.spacing(2.5),
      justifyContent: "center",
    },
    [`& .${labelClasses.root}`]: {
      display: "none",
    },
    [`& .${bulletClasses.root}`]: {
      display: "none",
    },
    [`& .${listSubheaderClasses.root}`]: {
      display: "none",
    },
    [`& .${listItemTextClasses.root}`]: {
      opacity: 0,
    },
    [`& .${listClasses.root}`]: {
      paddingY: 0,
    },
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
  const { state, switchState, underAppBar, close, drawerWidth, variant } = useDrawer();
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
      onClose={close}
      sx={sx}
      {...rest}
    >
      <DrawerHeader>
        {!underAppBar && showCloseButton[variant] && (
          <IconButton onClick={switchState}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      {children}
    </MuiDrawer>
  );
};
