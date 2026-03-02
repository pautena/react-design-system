import type { DrawerProps } from "@/components/drawerx/drawer.types";
import { Sidebar, SidebarRail } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

/**
 * Drawer navigation container.
 */
export function Drawer({ children, className, ...rest }: DrawerProps) {
  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className={cn("z-40", className)}
      {...rest}
    >
      <div role="menu" className="flex h-full flex-col border-r bg-sidebar">
        {children}
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
