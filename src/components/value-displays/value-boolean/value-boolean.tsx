import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export interface ValueBooleanProps {
  /**
   * Name of the displayed value
   */
  label: string;
  /**
   * Value displayed
   */
  value: boolean;
}

/**
 * Displays a boolean value with a label
 */
export const ValueBoolean = ({ label, value }: ValueBooleanProps) => {
  const { typography } = useTheme();

  const iconSx = { fontSize: typography.h5.fontSize };

  return (
    <Box>
      <Typography variant="subtitle2" role="label">
        {label}
      </Typography>
      {value ? <CheckIcon color="success" sx={iconSx} /> : <CloseIcon color="error" sx={iconSx} />}
    </Box>
  );
};
