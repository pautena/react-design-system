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

const sizeClassMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
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

const normalizeSize = (size?: number) => {
  if (!size) {
    return 12;
  }

  if (size < 1) {
    return 1;
  }

  if (size > 12) {
    return 12;
  }

  return Math.round(size);
};

const sizeClass = (size?: number, prefix = "") =>
  `${prefix}${sizeClassMap[normalizeSize(size)]}`;

const resolveSizeClasses = (size?: ResponsiveValue<number>) => {
  if (!size) {
    return sizeClass(12);
  }

  if (Array.isArray(size)) {
    const breakpoints: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

    return size
      .map((value, index) => {
        const breakpoint = breakpoints[index];
        if (!breakpoint) {
          return "";
        }

        return sizeClass(value, responsivePrefix[breakpoint]);
      })
      .join(" ");
  }

  if (typeof size === "object") {
    return (Object.keys(size) as Breakpoint[])
      .map((breakpoint) =>
        sizeClass(size[breakpoint], responsivePrefix[breakpoint]),
      )
      .join(" ");
  }

  return sizeClass(size);
};

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
  size,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "min-w-0",
        valueItemClasses.root,
        resolveSizeClasses(size),
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          "h-full px-1",
          valueItemClasses.content,
          resolveBorderClasses(bordered),
        )}
      >
        {children}
      </div>
    </div>
  );
};
