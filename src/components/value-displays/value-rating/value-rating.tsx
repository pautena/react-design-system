import { Rating, Typography } from "@mui/material";
import React from "react";
import { BaseValueProps, DefaultPlaceholder } from "../value-base/value-displays.types";
import { getValueContentLabelId, ValueContent } from "../value-content";

export type ValueRatingProps = BaseValueProps<number> & {
  maxRating?: number;
};

/**
 * Displays a number using stars
 */
export const ValueRating = ({ label, value = 0, maxRating = 5 }: ValueRatingProps) => {
  const id = getValueContentLabelId(label);

  return (
    <ValueContent label={label} tooltip={value.toString()}>
      <Rating aria-labelledby={id} readOnly max={maxRating} value={value} />
    </ValueContent>
  );
};
