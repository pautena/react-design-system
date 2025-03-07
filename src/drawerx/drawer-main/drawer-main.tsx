import { styled, useTheme } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { useDrawer } from "../drawer-context/drawer-context";
import { DrawerVariant } from "../drawer.types";
import { DrawerHeader } from "../drawer/drawer";

const drawerSpace: Record<DrawerVariant, boolean> = {
  temporary: false,
  mini: true,
  clipped: true,
  persistent: true,
};

const StyledDiv = styled("div")(({ theme }) => {
  const { spacing } = useTheme();
  const { drawerWidth, state, variant } = useDrawer();

  const marginLeft = drawerSpace[variant]
    ? state === "open"
      ? drawerWidth
      : state === "collapse"
        ? spacing(8)
        : 0
    : 0;

  return {
    marginLeft,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  };
});

export type DrawerMainProps = PropsWithChildren;

export const DrawerMain = ({ children }: DrawerMainProps) => (
  <StyledDiv>
    <DrawerHeader />
    {children}
  </StyledDiv>
);
