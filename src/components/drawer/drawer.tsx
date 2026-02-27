import type { DrawerProps } from "@/components/drawerx/drawer.types";
import { Sidebar, SidebarRail } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

/**
 * Header spacer for drawer and main content.
 */
export function DrawerHeader({
  children,
  className,
}: {
  /**
   * Header content.
   */
  children?: React.ReactNode;
  /**
   * Additional classes.
   */
  className?: string;
}) {
  return (
    <div className={cn("flex h-14 items-center justify-end px-2", className)}>
      {children}
    </div>
  );
}

/**
 * Drawer navigation container.
 */
export default function Drawer({ children, className, ...rest }: DrawerProps) {
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
