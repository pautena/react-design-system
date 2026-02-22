import type { PropsWithChildren } from "react";
import { DrawerHeader } from "@/components/drawer";
import { useDrawer } from "@/components/drawer-context";
import type { DrawerVariant } from "@/components/drawerx/drawer.types";

const drawerSpace: Record<DrawerVariant, boolean> = {
  temporary: false,
  mini: true,
  persistent: true,
};

export type DrawerMainProps = PropsWithChildren;

/**
 * Main content area that shifts with drawer state.
 */
export default function DrawerMain({ children }: DrawerMainProps) {
  const { drawerWidth, state, variant } = useDrawer();

  const marginLeft = drawerSpace[variant]
    ? state === "open"
      ? drawerWidth
      : state === "collapse"
        ? 64
        : 0
    : 0;

  return (
    <div className="transition-[margin]" style={{ marginLeft }}>
      <DrawerHeader />
      {children}
    </div>
  );
}
