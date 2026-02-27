import type { HTMLAttributes } from "react";
import { useDrawer } from "@/components/drawer-context";
import { SidebarGroupLabel } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export type DrawerSubheaderProps = HTMLAttributes<HTMLDivElement>;

/**
 * Section subheader rendered inside drawer navigation.
 */
export default function DrawerSubheader({
  className,
  children,
  ...rest
}: DrawerSubheaderProps) {
  const { state } = useDrawer();

  if (state === "close") {
    return null;
  }

  return (
    <SidebarGroupLabel className={cn("uppercase", className)} {...rest}>
      {children}
    </SidebarGroupLabel>
  );
}
