import Grid from "@mui/material/Grid";
import Badge, { type BadgeVariant } from "../components/badge";
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
  variant?: BadgeVariant | BadgeVariant[];
};

/**
 * Displays a label component value with a label
 */
export function ValueLabel({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  variant,
}: ValueLabelProps) {
  const id = getValueContentLabelId(label);
  const value = Array.isArray(valueProp) ? (
    valueProp.map((value, i) => (
      <Badge
        text={value.toString() || placeholder}
        variant={Array.isArray(variant) ? variant[i] : variant}
        key={i}
      />
    ))
  ) : (
    <Badge
      text={valueProp?.toString() || placeholder}
      variant={Array.isArray(variant) ? variant[0] : variant}
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
