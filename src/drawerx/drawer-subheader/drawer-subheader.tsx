import ListSubheader, { ListSubheaderProps } from "@mui/material/ListSubheader";
import { useDrawer } from "../drawer-context";
import { useTheme } from "@mui/material";

export type DrawerSubheaderProps = ListSubheaderProps;

export const DrawerSubheader = ({ sx, ...rest }: DrawerSubheaderProps) => {
  const { size } = useDrawer();
  const { typography } = useTheme();

  return (
    <ListSubheader
      {...rest}
      sx={{
        lineHeight: size === "small" ? typography.pxToRem(40) : undefined,
        ...sx,
      }}
    />
  );
};
