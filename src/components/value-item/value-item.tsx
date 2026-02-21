import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
type ResponsiveValue<T> = T | T[] | Partial<Record<Breakpoint, T>>;

/**
 * Props for the ValueItem component.
 */
export interface ValueItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to display a left border.
   * Supports scalar, array and breakpoint object values.
   * @default true
   */
  bordered?: ResponsiveValue<boolean>;
  /**
   * Responsive size hint kept for API compatibility.
   */
  size?: ResponsiveValue<number>;
  /**
   * Content to display.
   */
  children?: ReactNode;
}

/**
 * ValueItem component type.
 */
export type ValueItemComponent = (props: ValueItemProps) => ReactElement;

/**
 * ValueItem element type.
 */
export type ValueItemElement = ReactElement<ValueItemProps, ValueItemComponent>;

export const valueItemClasses = {
  root: "RdsValueItem-root",
  content: "RdsValueItem-content",
};

const responsivePrefix: Record<Breakpoint, string> = {
  xs: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
};

const borderClass = (enabled: boolean, prefix = "") =>
  enabled ? `${prefix}border-l ${prefix}border-border` : `${prefix}border-l-0`;

const resolveBorderClasses = (bordered: ResponsiveValue<boolean>) => {
  if (Array.isArray(bordered)) {
    const breakpoints: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

    return bordered
      .map((value, index) => {
        const breakpoint = breakpoints[index];
        if (!breakpoint) {
          return "";
        }
        return borderClass(value, responsivePrefix[breakpoint]);
      })
      .join(" ");
  }

  if (typeof bordered === "object" && bordered !== null) {
    return (Object.keys(bordered) as Breakpoint[])
      .map((breakpoint) =>
        borderClass(
          Boolean(bordered[breakpoint]),
          responsivePrefix[breakpoint],
        ),
      )
      .join(" ");
  }

  return borderClass(Boolean(bordered));
};

/**
 * Wraps value display components and applies consistent spacing and borders.
 */
export const ValueItem: ValueItemComponent = ({
  children,
  bordered = true,
  size: _size,
  className,
  ...rest
}) => {
  return (
    <div className={cn(valueItemClasses.root, className)} {...rest}>
      <div
        className={cn(
          "px-1",
          valueItemClasses.content,
          resolveBorderClasses(bordered),
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ValueItem;
