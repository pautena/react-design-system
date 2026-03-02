import type { ReactNode } from "react";
import type { ValueItemElement } from "@/components/value-item";
import { cn } from "@/lib/utils";

/**
 * Props for the GroupValueCard component.
 */
export interface GroupValueCardProps {
  /**
   * Main title of the card.
   */
  title: string;
  /**
   * Optional subtitle shown below the title.
   */
  subtitle?: string;
  /**
   * Whether to center card content.
   */
  centered?: boolean;
  /**
   * Value item elements rendered in the content area.
   */
  children: ValueItemElement | ValueItemElement[] | ReactNode;
  /**
   * Compact style mode.
   */
  dense?: boolean;
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
}

/**
 * Card wrapper for grouped value display.
 */
export function GroupValueCard({
  title,
  subtitle,
  centered,
  children,
  dense,
  className,
}: GroupValueCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border bg-card", className)}>
      <div className={cn("bg-muted", dense ? "px-3 py-2" : "px-4 py-3")}>
        <p
          role="heading"
          aria-level={1}
          className={cn(
            dense ? "text-base font-semibold" : "text-lg font-semibold",
          )}
        >
          {title}
        </p>
        {subtitle ? (
          <p
            role="heading"
            aria-level={2}
            className={cn(
              dense ? "text-xs" : "text-sm",
              "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      <div
        className={cn(
          "grid grid-cols-12 p-2",
          dense ? "gap-y-2" : "gap-y-3",
          centered && "justify-items-center",
        )}
      >
        {children}
      </div>
    </div>
  );
}
