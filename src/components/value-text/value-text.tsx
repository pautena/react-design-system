import {
  getValueContentLabelId,
  ValueContent,
} from "@/components/value-content";
import { type BaseValueProps, DefaultPlaceholder } from "@/types/value-base";

/**
 * Props for the ValueText component.
 */
export type ValueTextProps = BaseValueProps<string | number>;

/**
 * Displays a string or number value with a label.
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
      <div className="flex" role="group" aria-labelledby={id}>
        <p className={dense ? "text-base truncate" : "text-xl truncate"}>
          {value}
        </p>
      </div>
    </ValueContent>
  );
}
