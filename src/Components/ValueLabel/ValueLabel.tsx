import React from "react";
import { BaseValueProps, DefaultPlaceholder } from "../ValueBase";
import { getValueContentLabelId, ValueContent } from "../ValueContent";
import { Grid } from "@mui/material";
import { Label, LabelVariant } from "../Label";

export type ValueLabelProps = BaseValueProps<string | number | string[] | number[]> & {
  variant: LabelVariant | LabelVariant[];
};

/**
 * Displays a label component value with a label
 */
export const ValueLabel = ({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  variant,
}: ValueLabelProps) => {
  const id = getValueContentLabelId(label);
  let value;

  Array.isArray(valueProp)
    ? (value = valueProp.map((value, i) => (
        <Label
          text={value.toString() || placeholder}
          variant={Array.isArray(variant) ? variant[i] : variant}
          key={i}
        />
      )))
    : (value = (
        <Label
          text={valueProp?.toString() || placeholder}
          variant={Array.isArray(variant) ? variant[0] : variant}
        />
      ));

  return (
    <ValueContent label={label}>
      <Grid container gap={1} aria-labelledby={id}>
        {value}
      </Grid>
    </ValueContent>
  );
};
