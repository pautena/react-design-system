import type { ComponentProps } from "react";
import { Button as UiButton } from "@/components/ui/button";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "default"
  | "info"
  | "warning"
  | "error"
  | "success"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

const variantMap: Record<
  ButtonVariant,
  NonNullable<ComponentProps<typeof UiButton>["variant"]>
> = {
  default: "default",
  primary: "default",
  secondary: "secondary",
  info: "outline",
  warning: "outline",
  error: "destructive",
  success: "secondary",
  outline: "outline",
  ghost: "ghost",
  destructive: "destructive",
  link: "link",
};

/**
 * Props for the Button component
 */
export interface ButtonProps
  extends Omit<ComponentProps<typeof UiButton>, "variant"> {
  /**
   * Color palette used to draw the component
   * @default "default"
   */
  variant?: ButtonVariant;
}

/**
 * Consumer-facing button wrapper for public package API
 */
export function Button({ variant = "default", ...props }: ButtonProps) {
  return <UiButton variant={variantMap[variant]} {...props} />;
}

export default Button;
