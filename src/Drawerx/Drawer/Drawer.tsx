import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { paperClasses } from "@mui/material/Paper";
import {
  type SxProps,
  styled,
  type Theme,
  useTheme,
} from "@mui/material/styles";
import type { DrawerProps, DrawerState, DrawerVariant } from "../Drawer.types";
import { useDrawer } from "../DrawerContext/DrawerContext";
import { closedMixin, openedMixin } from "../DrawerContext/DrawerMixins";

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

const muiDrawerVariant: Record<
  DrawerVariant,
  "permanent" | "persistent" | "temporary"
> = {
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
export default function Drawer({ children, ...rest }: DrawerProps) {
  const theme = useTheme();
  const { state, switchState, clipped, close, drawerWidth, variant } =
    useDrawer();

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
}
