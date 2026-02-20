import { cva } from "class-variance-authority";
import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type BulletVariant =
  | "primary"
  | "secondary"
  | "default"
  | "info"
  | "warning"
  | "error";

export const bulletClasses = {
  root: "RdsBullet-root",
};

const bulletVariants = cva("bg-primary", {
  variants: {
    variant: {
      primary: "bg-blue-500",
      secondary: "bg-violet-500",
      default: "bg-zinc-400",
      info: "bg-sky-500",
      warning: "bg-amber-500",
      error: "bg-red-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

/**
 * Props for the Bullet component
 */
export interface BulletProps {
  /**
   * Color palette used to draw the component
   */
  variant?: BulletVariant;
  /**
   * Legacy style object preserved for backward compatibility
   */
  sx?: {
    ml?: number | string;
    mr?: number | string;
    mt?: number | string;
    mb?: number | string;
  } & CSSProperties;
  /**
   * Additional CSS classes for custom styling
   */
  className?: string;
}

function toCssSpacing(
  value: number | string | undefined,
): string | number | undefined {
  if (typeof value === "number") {
    return `${value * 8}px`;
  }

  return value;
}

function toInlineStyle(sx: BulletProps["sx"]): CSSProperties | undefined {
  if (!sx) {
    return undefined;
  }

  const { ml, mr, mt, mb, ...rest } = sx;

  return {
    ...rest,
    marginLeft: toCssSpacing(ml),
    marginRight: toCssSpacing(mr),
    marginTop: toCssSpacing(mt),
    marginBottom: toCssSpacing(mb),
  };
}

/**
 * Dot to attract the user attention
 */
export function Bullet({ variant = "primary", sx, className }: BulletProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        bulletClasses.root,
        "inline-flex size-2.5 min-w-0 rounded-full border-0 p-0",
        bulletVariants({ variant }),
        className,
      )}
      role="status"
      aria-label={`${variant} bullet`}
      aria-describedby={variant}
      style={toInlineStyle(sx)}
    />
  );
}

export default Bullet;
