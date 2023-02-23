import { Box } from "@mui/material";
import React from "react";
import { ValueContent } from "../value-content";
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
  return (
    <ValueContent label={label}>
      <Box component="img" src={value} alt={label} sx={{ width: size, height: size }} />
    </ValueContent>
  );
};
