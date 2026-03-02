import { Check, X } from "lucide-react";
import {
  getValueContentLabelId,
  ValueContent,
} from "@/components/data-display/value-content/value-content";
import { type BaseValueProps, DefaultPlaceholder } from "@/types/value-base";

/**
 * Props for the ValueBoolean component.
 */
export type ValueBooleanProps = BaseValueProps<boolean>;

/**
 * Displays a boolean value with a label.
 */
export function ValueBoolean({
  label,
  value,
  placeholder = DefaultPlaceholder,
  dense,
}: ValueBooleanProps) {
  const id = getValueContentLabelId(label);
  const iconClassName = dense ? "h-4 w-4" : "h-5 w-5";

  return (
    <ValueContent label={label} dense={dense}>
      <div
        className="flex items-center"
        aria-labelledby={id}
        role="checkbox"
        aria-checked={value}
      >
        {value === undefined ? (
          <p className="text-xl">{placeholder}</p>
        ) : value ? (
          <Check
            data-testid="CheckIcon"
            className={iconClassName}
            aria-hidden="true"
          />
        ) : (
          <X
            data-testid="CloseIcon"
            className={iconClassName}
            aria-hidden="true"
          />
        )}
      </div>
    </ValueContent>
  );
}
