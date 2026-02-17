import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { type BaseValueProps, DefaultPlaceholder } from "../ValueBase";
import ValueContent, { getValueContentLabelId } from "../ValueContent";

/**
 * Props for the ValueText component
 *
 * @extends BaseValueProps
 */
export type ValueTextProps = BaseValueProps<string | number>;

/**
 * Displays a string value with a label
 */
export function ValueText({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  dense,
}: ValueTextProps) {
  const id = getValueContentLabelId(label);
  const value = valueProp?.toString() || placeholder;

  return (
    <ValueContent label={label} tooltip={value} dense={dense}>
      <Box display="flex" aria-labelledby={id}>
        <Typography variant={dense ? "body1" : "h5"} noWrap>
          {value}
        </Typography>
      </Box>
    </ValueContent>
  );
}

export default ValueText;
