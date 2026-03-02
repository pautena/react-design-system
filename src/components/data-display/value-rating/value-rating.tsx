import { Star } from "lucide-react";
import {
  getValueContentLabelId,
  ValueContent,
} from "@/components/data-display/value-content/value-content";
import { cn } from "@/lib/utils";
import type { BaseValueProps } from "@/types/value-base";

/**
 * Props for the ValueRating component.
 */
export type ValueRatingProps = BaseValueProps<number> & {
  /**
   * Maximum number of stars to display.
   * @default 5
   */
  maxRating?: number;
};

/**
 * Displays a number using stars.
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
      <div
        className="flex items-center gap-0.5"
        role="group"
        aria-labelledby={id}
      >
        {Array.from({ length: maxRating }, (_, index) => {
          const filled = index < value;

          return (
            <Star
              key={`star-${index}`}
              data-testid={filled ? "StarIcon" : "StarBorderIcon"}
              className={cn(
                dense ? "h-4 w-4" : "h-5 w-5",
                !filled && "opacity-30",
              )}
              fill={filled ? "currentColor" : "none"}
              aria-hidden="true"
            />
          );
        })}
      </div>
    </ValueContent>
  );
}
