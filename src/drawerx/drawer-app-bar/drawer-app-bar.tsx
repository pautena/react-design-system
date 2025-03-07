import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme, Theme, styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawer } from "../drawer-context";
import { AppBarProps as MuiAppBarProps } from "@mui/material";
import { DrawerState, DrawerVariant } from "../drawer.types";

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
  clipped: true,
};

const showMenuButton: Record<DrawerVariant, (state: DrawerState) => boolean> = {
  temporary: () => true,
  mini: (state) => state !== "open",
  persistent: () => true,
  clipped: () => false,
};

export interface DrawerAppBarProps extends MuiAppBarProps {
  title?: string;
}

export const DrawerAppBar = ({ title, sx, children, ...rest }: DrawerAppBarProps) => {
  const theme = useTheme();
  const { state, variant, switchState, drawerWidth, underAppBar } = useDrawer();

  const rootSx =
    (moveWithDrawer[variant] &&
      !underAppBar && {
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
      position={underAppBar ? "fixed" : undefined}
      {...rest}
      sx={{
        ...sx,
        ...rootSx,
        zIndex: (theme: Theme) => theme.zIndex.drawer + (underAppBar ? 1 : 0),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={switchState}
          edge="start"
          sx={{
            marginRight: state != "collapse" ? 5 : 0,
            display: showMenuButton[variant](state) ? undefined : "none",
          }}
        >
          <MenuIcon />
        </IconButton>
        {title && (
          <Typography variant="h6" component="h1" role="heading" aria-level={1} noWrap>
            {title}
          </Typography>
        )}
        {children}
      </Toolbar>
    </MyMuiAppBar>
  );
};
