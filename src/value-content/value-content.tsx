import { SxProps, Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

export const getValueContentLabelId = (label: string): string =>
  `label-${label.replace(/ /g, "-")}`;

export interface ValueContentProps {
  /**
   * Name of the displayed value
   */
  label: string;

  /**
   * If true, the label will not be shown
   */
  hideLabel?: boolean;

  /**
   * If defined, a tooltip is going to be added arround the children;
   */
  tooltip?: string;

  /**
   * Timeout before the tooltip appears when the user hovers the value
   */
  tooltipEnterDelay?: number;

  /**
   * Component that's going to be renderd under the label
   */
  children: React.ReactElement<any, any>;

  /**
   * The value has to be displayed as compact or not.
   * False by default
   */
  dense?: boolean;

  /**
   * Custom styles for the root component
   */
  sx?: SxProps<Theme>;
}

/**
 * Displays a string value with a label
 */
export const ValueContent = ({
  label,
  hideLabel,
  tooltip,
  tooltipEnterDelay = 2000,
  children,
  dense,
  sx,
}: ValueContentProps) => {
  const { typography } = useTheme();
  const id = getValueContentLabelId(label);

  return (
    <Box width={1} lineHeight={dense ? 0 : undefined} sx={sx}>
      {!hideLabel && (
        <Typography
          variant={dense ? "caption" : "subtitle2"}
          role="label"
          id={id}
          lineHeight={dense ? typography.pxToRem(15) : undefined}
        >
          {label}
        </Typography>
      )}
      {tooltip ? (
        <Tooltip title={tooltip} placement="top" enterDelay={tooltipEnterDelay}>
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </Box>
  );
};
