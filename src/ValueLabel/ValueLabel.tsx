import Grid from "@mui/material/Grid";
import Label, { type LabelVariant } from "../Label";
import { type BaseValueProps, DefaultPlaceholder } from "../ValueBase";
import ValueContent, { getValueContentLabelId } from "../ValueContent";

/**
 * Props for the ValueLabel component
 *
 * @extends BaseValueProps
 */
export type ValueLabelProps = BaseValueProps<
  string | number | string[] | number[]
> & {
  /**
   * Label color variant or array of variants for multiple labels
   */
  variant?: LabelVariant | LabelVariant[];
  /**
   * Custom color or array of colors for multiple labels
   */
  color?: string | string[];
};

/**
 * Displays a label component value with a label
 */
export function ValueLabel({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  color,
  variant,
}: ValueLabelProps) {
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
}

export default ValueLabel;
