import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { format } from "date-fns";
import { BaseValueProps, DefaultPlaceholder } from "../value-displays.types";

export interface ValueDatetimeProps extends BaseValueProps<Date> {
  /**
   * Datetime format
   */
  format: string;
}

/**
 * Displays a formated datetime with a label
 */
export const ValueDatetime = ({
  label,
  value: valueProp,
  format: fmt,
  placeholder = DefaultPlaceholder,
}: ValueDatetimeProps) => {
  const id = `label-${label.replace(/ /g, "-")}`;
  const value = (valueProp && format(valueProp, fmt)) || placeholder;

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
