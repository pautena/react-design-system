import { BaseValueProps, DefaultPlaceholder } from "../value-base";
import { getValueContentLabelId, ValueContent } from "../value-content";
import { Label, LabelVariant } from "../label";
import Grid from "@mui/material/Grid";

export type ValueLabelProps = BaseValueProps<string | number | string[] | number[]> & {
  variant?: LabelVariant | LabelVariant[];
  color?: string | string[];
};

/**
 * Displays a label component value with a label
 */
export const ValueLabel = ({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  color,
  variant,
}: ValueLabelProps) => {
  const id = getValueContentLabelId(label);
  const value = Array.isArray(valueProp) ? (
    valueProp.map((value, i) => (
      <Label
        text={value.toString() || placeholder}
        variant={Array.isArray(variant) ? variant[i] : variant}
        color={Array.isArray(color) ? color[i] : color}
        key={i}
      />
    ))
  ) : (
    <Label
      text={valueProp?.toString() || placeholder}
      variant={Array.isArray(variant) ? variant[0] : variant}
      color={Array.isArray(color) ? color[0] : color}
    />
  );

  return (
    <ValueContent label={label}>
      <Grid container gap={1} aria-labelledby={id}>
        {value}
      </Grid>
    </ValueContent>
  );
};
