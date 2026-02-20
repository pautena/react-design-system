import type { ComponentProps } from "react";
import { Badge as UiBadge } from "@/components/ui/badge";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "default"
  | "info"
  | "warning"
  | "error"
  | "success";

const variantMap: Record<
  BadgeVariant,
  ComponentProps<typeof UiBadge>["variant"]
> = {
  default: "default",
  primary: "default",
  secondary: "secondary",
  info: "outline",
  warning: "outline",
  error: "destructive",
  success: "secondary",
};

/**
 * Props for the Badge component
 */
export interface BadgeProps
  extends Omit<ComponentProps<typeof UiBadge>, "children" | "variant"> {
  /**
   * Content of the component
   */
  text: string;
  /**
   * Color palette used to draw the component
   */
  variant?: BadgeVariant;
}

/**
 * Compact badge wrapper for consumer-facing API
 */
export function Badge({ text, variant = "default", ...props }: BadgeProps) {
  return (
    <UiBadge variant={variantMap[variant]} {...props}>
      {text}
    </UiBadge>
  );
}

export default Badge;
