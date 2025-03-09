import { SxProps, Theme, styled, useTheme } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import { paperClasses } from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DrawerComponent, DrawerProps, DrawerState, DrawerVariant } from "../drawer.types";
import { useDrawer } from "../drawer-context/drawer-context";
import { closedMixin, openedMixin } from "../drawer-context/drawer-mixins";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const showCloseButton: Record<DrawerVariant, boolean> = {
  temporary: true,
  mini: true,
  persistent: true,
};

const muiDrawerVariant: Record<DrawerVariant, "permanent" | "persistent" | "temporary"> = {
  temporary: "temporary",
  mini: "permanent",
  persistent: "persistent",
};

type SxGenerator = (state: DrawerState, theme: Theme) => SxProps<Theme>;
const NoopSxGenerator = () => ({});
const variantsSx: Readonly<Record<DrawerVariant, SxGenerator>> = {
  mini: (_: DrawerState, theme: Theme) => ({
    boxSizing: "border-box",
    [`& .${paperClasses.root}`]: {
      zIndex: theme.zIndex.drawer - 1,
    },
  }),
  temporary: NoopSxGenerator,
  persistent: NoopSxGenerator,
};

/**
 * Drawer component that provides a customizable drawer interface.
 */
export const Drawer: DrawerComponent = ({ children, ...rest }: DrawerProps) => {
  const theme = useTheme();
  const { state, switchState, clipped, close, drawerWidth, variant } = useDrawer();

  const sx = {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    ...(state === "open" && {
      ...openedMixin(theme),
      [`& .${drawerClasses.paper}`]: openedMixin(theme),
    }),
    ...(state !== "open" && {
      ...closedMixin(theme),
      [`& .${drawerClasses.paper}`]: closedMixin(theme),
    }),
    ...variantsSx[variant](state, theme),
  };

  return (
    <MuiDrawer
      open={state === "open"}
      variant={muiDrawerVariant[variant]}
      role="menu"
      aria-hidden={state === "close"}
      onClose={close}
      sx={sx}
      {...rest}
    >
      <DrawerHeader>
        {!clipped && showCloseButton[variant] && (
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
