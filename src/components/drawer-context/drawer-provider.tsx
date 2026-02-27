import { useState } from "react";
import type {
  DrawerProviderProps,
  DrawerState,
} from "@/components/drawerx/drawer.types";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DrawerContext } from "./drawer-context";

export const drawerWidth = 240;

/**
 * Provider for drawer state and interactions.
 */
export const DrawerProvider = ({
  children,
  initialState,
  size = "medium",
  drawerWidth: drawerWidthProp = drawerWidth,
  clipped = true,
  selectedItemId,
  LinkComponent = "a",
  onStateChange = () => null,
}: DrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState === "open");
  const state: DrawerState = isOpen ? "open" : "close";

  const handleChangeState = (open: boolean) => {
    const newState: DrawerState = open ? "open" : "close";
    onStateChange(newState);
    setIsOpen(open);
  };

  return (
    <SidebarProvider open={isOpen} onOpenChange={handleChangeState}>
      <DrawerContext.Provider
        value={{
          state,
          size,
          selectedItemId,
          clipped,
          drawerWidth: drawerWidthProp,
          LinkComponent,
          switchState: () => handleChangeState(!isOpen),
          close: () => handleChangeState(false),
          open: () => handleChangeState(true),
          setState: (newState) => handleChangeState(newState === "open"),
        }}
      >
        {children}
      </DrawerContext.Provider>
    </SidebarProvider>
  );
};
