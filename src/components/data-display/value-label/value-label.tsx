import {
  Badge,
  type BadgeVariant,
} from "@/components/data-display/badge/badge";
import {
  getValueContentLabelId,
  ValueContent,
} from "@/components/data-display/value-content/value-content";
import { type BaseValueProps, DefaultPlaceholder } from "@/types/value-base";

/**
 * Props for the ValueLabel component.
 */
export type ValueLabelProps = BaseValueProps<
  string | number | string[] | number[]
> & {
  /**
   * Label color variant or array of variants for multiple labels.
   */
  variant?: BadgeVariant | BadgeVariant[];
};

/**
 * Displays badge values with a label.
 */
export function ValueLabel({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  variant,
}: ValueLabelProps) {
  const id = getValueContentLabelId(label);
  const values = Array.isArray(valueProp) ? valueProp : [valueProp];

  return (
    <ValueContent label={label}>
      <div className="flex flex-wrap gap-1" role="group" aria-labelledby={id}>
        {values.map((value, i) => (
          <Badge
            key={`${value?.toString() ?? "empty"}-${i}`}
            text={value?.toString() || placeholder}
            variant={Array.isArray(variant) ? variant[i] : variant}
          />
        ))}
      </div>
    </ValueContent>
  );
}
