import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";

export const getValueContentLabelId = (label: string): string =>
  `label-${label.replace(/ /g, "-")}`;

export interface ValueContentProps {
  /**
   * Name of the displayed value
   */
  label: string;

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
}

/**
 * Displays a string value with a label
 */
export const ValueContent = ({
  label,
  tooltip,
  tooltipEnterDelay = 2000,
  children,
}: ValueContentProps) => {
  const id = getValueContentLabelId(label);

  return (
    <Box width={1}>
      <Typography variant="subtitle2" role="label" id={id}>
        {label}
      </Typography>
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
