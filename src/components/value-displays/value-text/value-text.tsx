import { Typography } from "@mui/material";
import React from "react";
import { BaseValueProps, DefaultPlaceholder } from "../value-displays.types";
import { getValueContentLabelId, ValueContent } from "../value-content";

export type ValueTextProps = BaseValueProps<string>;

/**
 * Displays a string value with a label
 */
export const ValueText = ({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
}: ValueTextProps) => {
  const id = getValueContentLabelId(label);
  const value = valueProp || placeholder;

  return (
    <ValueContent label={label} tooltip={value}>
      <Typography variant="h5" noWrap aria-labelledby={id}>
        {value}
      </Typography>
    </ValueContent>
  );
};
