import type { PropsWithChildren } from "react";
import { SidebarInset } from "@/components/ui/sidebar";

export type DrawerMainProps = PropsWithChildren;

/**
 * Main content area that shifts with drawer state.
 */
export function DrawerMain({ children }: DrawerMainProps) {
  return <SidebarInset>{children}</SidebarInset>;
}
