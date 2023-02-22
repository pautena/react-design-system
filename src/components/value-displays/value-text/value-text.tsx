import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { BaseValueProps, DefaultPlaceholder } from "../value-displays.types";

export type ValueTextProps = BaseValueProps<string>;

/**
 * Displays a string value with a label
 */
export const ValueText = ({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
}: ValueTextProps) => {
  const id = `label-${label.replace(/ /g, "-")}`;
  const value = valueProp || placeholder;

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
