import { useTheme } from "@mui/material";
import ListSubheader, {
  type ListSubheaderProps,
} from "@mui/material/ListSubheader";
import { useDrawer } from "../DrawerContext";

export type DrawerSubheaderProps = ListSubheaderProps;

/**
 * A functional component that renders a `ListSubheader` with custom styles.
 */
export default function DrawerSubheader({ sx, ...rest }: DrawerSubheaderProps) {
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
}
