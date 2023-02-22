import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { BaseValueProps } from "../value-displays.types";

export interface ValueImageProps extends BaseValueProps<string> {
  /**
   * Image size
   */
  size?: number;
}

const DefaultSize = 100;

/**
 * Displays a image value with a label
 */
export const ValueImage = ({ label, value, size = DefaultSize }: ValueImageProps) => {
  const id = `label-${label.replace(/ /g, "-")}`;

  return (
    <Box>
      <Typography variant="subtitle2" role="label" id={id} mb={1}>
        {label}
      </Typography>
      <Box component="img" src={value} alt={label} sx={{ width: size, height: size }} />
    </Box>
  );
};
