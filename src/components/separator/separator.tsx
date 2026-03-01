import type { ComponentProps } from "react";
import { Separator as UiSeparator } from "@/components/ui/separator";

/**
 * Props for the Separator component.
 */
export interface SeparatorProps
  extends Omit<ComponentProps<typeof UiSeparator>, "orientation"> {
  /**
   * Orientation of the separator.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

/**
 * Consumer-facing separator wrapper for public package API.
 */
export function Separator({ orientation = "horizontal", ...props }: SeparatorProps) {
  return <UiSeparator orientation={orientation} {...props} />;
}

export default Separator;
