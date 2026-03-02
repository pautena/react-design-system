import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

export const getValueContentLabelId = (label: string): string =>
  `label-${label.replace(/ /g, "-")}`;

/**
 * Props for the ValueContent component.
 */
export interface ValueContentProps {
  /**
   * Name of the displayed value.
   */
  label: string;
  /**
   * If defined, a title tooltip is added around the children.
   */
  tooltip?: string;
  /**
   * Timeout before tooltip appears.
   * Kept for API compatibility.
   */
  tooltipEnterDelay?: number;
  /**
   * Component rendered under the label.
   */
  children: ReactElement;
  /**
   * Displays the value as compact.
   * @default false
   */
  dense?: boolean;
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
}

/**
 * Displays a value with a label and optional tooltip.
 */
export function ValueContent({
  label,
  tooltip,
  tooltipEnterDelay: _tooltipEnterDelay = 2000,
  children,
  dense,
  className,
}: ValueContentProps) {
  const id = getValueContentLabelId(label);

  return (
    <div
      className={cn("w-full", dense ? "leading-none" : undefined, className)}
    >
      <p
        role="label"
        id={id}
        className={cn(
          dense
            ? "text-[0.6875rem] leading-[0.9375rem]"
            : "text-sm font-medium",
        )}
      >
        {label}
      </p>
      {tooltip ? <span title={tooltip}>{children}</span> : children}
    </div>
  );
}
