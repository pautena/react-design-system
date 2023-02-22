import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { format } from "date-fns";
import { BaseValueProps, DefaultPlaceholder } from "../value-displays.types";
import { getValueContentLabelId, ValueContent } from "../value-content";

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
  const id = getValueContentLabelId(label);
  const value = (valueProp && format(valueProp, fmt)) || placeholder;

  return (
    <ValueContent label={label} tooltip={value}>
      <Typography variant="h5" noWrap aria-labelledby={id}>
        {value}
      </Typography>
    </ValueContent>
  );
};
