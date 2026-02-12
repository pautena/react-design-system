import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import type { AppBarProps as MuiAppBarProps } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled, type Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { DrawerState, DrawerVariant } from "../Drawer.types";
import { useDrawer } from "../DrawerContext";

const MyMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
}));

const moveWithDrawer: Record<DrawerVariant, boolean> = {
  temporary: false,
  mini: true,
  persistent: true,
};

const showMenuButton: Record<DrawerVariant, (state: DrawerState) => boolean> = {
  temporary: () => true,
  mini: (state) => state !== "open",
  persistent: () => true,
};

export interface DrawerAppBarProps extends MuiAppBarProps {
  /**
   * Title to display in the AppBar.
   */
  title?: string;
}

/**
 * DrawerAppBar component that renders an AppBar adapted to work inside a Drawer context.
 */
export default function DrawerAppBar({
  title,
  sx,
  children,
  ...rest
}: DrawerAppBarProps) {
  const theme = useTheme();
  const { state, variant, switchState, drawerWidth, clipped } = useDrawer();

  const rootSx =
    (moveWithDrawer[variant] &&
      !clipped && {
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(state === "open" && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }) ||
    {};

  return (
    <MyMuiAppBar
      position={clipped ? "fixed" : undefined}
      {...rest}
      sx={{
        ...sx,
        ...rootSx,
        zIndex: (theme: Theme) => theme.zIndex.drawer + (clipped ? 1 : 0),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={switchState}
          edge="start"
          sx={{
            marginRight: theme.spacing(2),
            display:
              clipped || showMenuButton[variant](state) ? undefined : "none",
          }}
        >
          {state === "open" ? (
            variant === "mini" ? (
              <MenuOpenIcon />
            ) : (
              <ChevronLeftIcon />
            )
          ) : (
            <MenuIcon />
          )}
        </IconButton>
        {title && (
          <Typography
            variant="h6"
            component="h1"
            role="heading"
            aria-level={1}
            noWrap
          >
            {title}
          </Typography>
        )}
        {children}
      </Toolbar>
    </MyMuiAppBar>
  );
}
