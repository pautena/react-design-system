import { cva } from "class-variance-authority";
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
   * Additional CSS classes for custom styling
   */
  className?: string;
}

/**
 * Dot to attract the user attention
 */
export function Bullet({ variant = "primary", className }: BulletProps) {
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
    />
  );
}

export default Bullet;
