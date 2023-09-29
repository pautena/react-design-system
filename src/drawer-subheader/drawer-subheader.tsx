import ListSubheader, { ListSubheaderProps } from "@mui/material/ListSubheader";
import { styled } from "@mui/material/styles";
import { DrawerSize } from "../drawer";

export interface DrawerSubheaderProps extends ListSubheaderProps {
  /**
   * Item size. default to medium
   */
  size?: DrawerSize;
}

export const DrawerSubheader = styled(ListSubheader, {
  shouldForwardProp: (prop) => prop !== "size",
})<DrawerSubheaderProps>(({ size, theme }) => ({
  lineHeight: size === "small" ? theme.typography.pxToRem(40) : undefined,
}));
