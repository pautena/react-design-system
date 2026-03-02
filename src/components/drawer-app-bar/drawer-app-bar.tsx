import { useDrawer } from "@/components/drawer-context";
import type { DrawerAppBarProps } from "@/components/drawerx/drawer.types";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

/**
 * Top app bar adapted for drawer layouts.
 */
export function DrawerAppBar({
  title,
  className,
  children,
  ...rest
}: DrawerAppBarProps) {
  const { clipped } = useDrawer();

  return (
    <header
      className={cn(
        "z-20 flex h-14 w-full items-center border-b bg-background px-4",
        clipped && "fixed top-0",
        className,
      )}
      {...rest}
    >
      <SidebarTrigger aria-label="open drawer" className="mr-2" />

      {title ? (
        <h1 className="truncate text-lg font-semibold">{title}</h1>
      ) : null}
      {children}
    </header>
  );
}
