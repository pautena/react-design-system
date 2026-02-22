import { useDrawer } from "@/components/drawer-context";
import DrawerItem from "@/components/drawer-item";
import type { DrawerContentProps } from "@/components/drawerx/drawer.types";
import { cn } from "@/lib/utils";

/**
 * Content rendered inside drawer navigation.
 */
export default function DrawerContent({ navigation }: DrawerContentProps) {
  const { size } = useDrawer();

  return (
    <div className={cn(size === "small" ? "px-1 py-1" : "px-2 py-2")}>
      {navigation.map((item) => (
        <DrawerItem key={item.id} item={item} />
      ))}
    </div>
  );
}
