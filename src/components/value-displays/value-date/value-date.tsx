import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { format } from "date-fns";

export interface ValueDateProps {
  /**
   * Name of the displayed value
   */
  label: string;
  /**
   * Value displayed
   */
  value: Date;

  /**
   * Date format
   */
  format: string;
}

/**
 * Displays a formated date with a label
 */
export const ValueDate = ({ label, value, format: fmt }: ValueDateProps) => {
  const id = `label-${label.replace(/ /g, "-")}`;
  const formatedValue = format(value, fmt);

  return (
    <Box>
      <Typography variant="subtitle2" role="label" id={id}>
        {label}
      </Typography>
      <Tooltip title={formatedValue} placement="top" enterDelay={2000}>
        <Typography variant="h5" noWrap aria-labelledby={id}>
          {formatedValue}
        </Typography>
      </Tooltip>
    </Box>
  );
};
