import Box from "@mui/material/Box";
import Grid, { type GridProps } from "@mui/material/Grid";
import type { ResponsiveStyleValue } from "@mui/system";
import type { FunctionComponent, ReactElement } from "react";
import { useGetDefaultThemeColor } from "../utils";

/**
 * Props for the ValueItem component
 */
export interface ValueItemProps extends Omit<GridProps, "item" | "container"> {
  /**
   * Whether to display a border
   */
  bordered?: ResponsiveStyleValue<boolean>;
  /**
   * Content to display
   */
  children?: React.ReactNode;
  /**
   * Grid size configuration (MUI v7 style, will be converted to v6)
   */
  size?:
    | boolean
    | "auto"
    | number
    | {
        xs?: boolean | "auto" | number;
        sm?: boolean | "auto" | number;
        md?: boolean | "auto" | number;
        lg?: boolean | "auto" | number;
        xl?: boolean | "auto" | number;
      };
}

/**
 * ValueItem component type
 */
export type ValueItemComponent = FunctionComponent<ValueItemProps>;

/**
 * ValueItem element type
 */
export type ValueItemElement = ReactElement<ValueItemProps, ValueItemComponent>;

export const valueItemClasses = {
  root: "RdsValueItem-root",
  content: "RdsValueItem-content",
};

const resolveBorderStyle = (
  bordered: ResponsiveStyleValue<boolean>,
  color: string,
) => {
  const borderStyle = `solid ${color} 1px`;
  const noBorder = "none";

  if (!bordered) {
    return undefined;
  }

  if (Array.isArray(bordered)) {
    return bordered.map((b) => (b ? borderStyle : noBorder));
  }

  if (typeof bordered === "object") {
    const style: Record<string, string | undefined> = {};
    Object.entries(bordered).forEach(([key, value]) => {
      style[key] = value ? borderStyle : noBorder;
    });
    return style;
  }

  return borderStyle;
};

/**
 * `ValueItem` is a component to wrap your value components
 */
const ValueItem: ValueItemComponent = ({
  children,
  bordered = true,
  size,
  ...rest
}: ValueItemProps) => {
  const defaultColor = useGetDefaultThemeColor({
    lightWeight: 200,
    darkWeight: 800,
  });
  const borderLeft = resolveBorderStyle(bordered, defaultColor);

  // Convert size prop to MUI v6 Grid props (xs, sm, md, lg, xl)
  const gridSizeProps =
    typeof size === "object" && size !== null
      ? size
      : size !== undefined
        ? { xs: size }
        : {};

  return (
    <Grid className={valueItemClasses.root} {...gridSizeProps} {...rest}>
      <Box className={valueItemClasses.content} px={1} borderLeft={borderLeft}>
        {children}
      </Box>
    </Grid>
  );
};

export default ValueItem;
