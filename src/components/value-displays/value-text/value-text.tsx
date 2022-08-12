import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";

export interface ValueTextProps {
  /**
   * Name of the displayed value
   */
  label: string;
  /**
   * Value displayed
   */
  value: string;
}

/**
 * Displays a string value with a label
 */
export const ValueText = ({ label, value }: ValueTextProps) => {
  const id = `label-${label.replace(/ /g, "-")}`;
  return (
    <Box>
      <Typography variant="subtitle2" role="label" id={id}>
        {label}
      </Typography>
      <Tooltip title={value} placement="top" enterDelay={2000}>
        <Typography variant="h5" noWrap aria-labelledby={id}>
          {value}
        </Typography>
      </Tooltip>
    </Box>
  );
};
