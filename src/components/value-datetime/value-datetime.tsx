import { format } from "date-fns";
import {
  getValueContentLabelId,
  ValueContent,
} from "@/components/value-content";
import { type BaseValueProps, DefaultPlaceholder } from "@/types/value-base";

/**
 * Props for the ValueDatetime component.
 */
export interface ValueDatetimeProps extends BaseValueProps<Date> {
  /**
   * Datetime format.
   */
  format: string;
}

/**
 * Displays a formatted datetime with a label.
 */
export function ValueDatetime({
  label,
  value: valueProp,
  format: fmt,
  placeholder = DefaultPlaceholder,
  dense,
}: ValueDatetimeProps) {
  const id = getValueContentLabelId(label);
  const value = (valueProp && format(valueProp, fmt)) || placeholder;

  return (
    <ValueContent
      label={label}
      tooltip={value}
      dense={dense}
      className="flex flex-col"
    >
      <div className="flex items-center" role="group" aria-labelledby={id}>
        <p className={dense ? "text-base truncate" : "text-xl truncate"}>
          {value}
        </p>
      </div>
    </ValueContent>
  );
}
