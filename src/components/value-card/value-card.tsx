import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the ValueCard component.
 */
export interface ValueCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content to display in the card.
   */
  children?: ReactNode;
}

/**
 * Container to show labeled values.
 */
export function ValueCard({ children, className, ...rest }: ValueCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-2 text-card-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ValueCard;
