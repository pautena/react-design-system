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
  return (
    <Box>
      <Typography variant="subtitle2" role="label">
        {label}
      </Typography>
      <Tooltip title={value} placement="top" enterDelay={2000}>
        <Typography variant="h5" noWrap>
          {value}
        </Typography>
      </Tooltip>
    </Box>
  );
};
