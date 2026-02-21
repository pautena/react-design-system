import ValueContent from "@/components/value-content";
import type { BaseValueProps } from "@/types/value-base";

/**
 * Props for the ValueImage component.
 */
export interface ValueImageProps extends BaseValueProps<string> {
  /**
   * Image size.
   */
  size?: number;
}

const defaultSize = 100;
const defaultDenseSize = 50;

/**
 * Displays an image value with a label.
 */
export function ValueImage({
  label,
  value,
  size: sizeArg,
  dense,
}: ValueImageProps) {
  const size = sizeArg || (dense ? defaultDenseSize : defaultSize);

  return (
    <ValueContent label={label} dense={dense}>
      <img src={value} alt={label} width={size} height={size} />
    </ValueContent>
  );
}

export default ValueImage;
