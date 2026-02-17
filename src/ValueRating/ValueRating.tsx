import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import type { BaseValueProps } from "../ValueBase";
import ValueContent, { getValueContentLabelId } from "../ValueContent";

/**
 * Props for the ValueRating component
 *
 * @extends BaseValueProps
 */
export type ValueRatingProps = BaseValueProps<number> & {
  /**
   * Maximum number of stars to display
   * @default 5
   */
  maxRating?: number;
};

/**
 * Displays a number using stars
 */
export function ValueRating({
  label,
  value = 0,
  maxRating = 5,
  dense,
}: ValueRatingProps) {
  const id = getValueContentLabelId(label);

  return (
    <ValueContent label={label} tooltip={value.toString()} dense={dense}>
      <Box display="flex" alignItems="center" aria-labelledby={id}>
        <Rating
          readOnly
          max={maxRating}
          size={dense ? "small" : "medium"}
          value={value}
        />
      </Box>
    </ValueContent>
  );
}

export default ValueRating;
