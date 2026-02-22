import { useState } from "react";
import type {
  DrawerProviderProps,
  DrawerState,
  DrawerVariant,
} from "@/components/drawerx/drawer.types";
import { DrawerContext } from "./drawer-context";

export const drawerWidth = 240;

const initialStateByVariant: Record<DrawerVariant, DrawerState> = {
  temporary: "close",
  mini: "collapse",
  persistent: "close",
};

const targetStates: Record<DrawerVariant, [DrawerState, DrawerState]> = {
  temporary: ["close", "open"],
  mini: ["collapse", "open"],
  persistent: ["close", "open"],
};

/**
 * Provider for drawer state and interactions.
 */
export const DrawerProvider = ({
  children,
  initialState,
  variant = "temporary",
  size = "medium",
  drawerWidth: drawerWidthProp = drawerWidth,
  clipped = true,
  selectedItemId,
  LinkComponent = "a",
  onStateChange = () => null,
}: DrawerProviderProps) => {
  const [state, setState] = useState<DrawerState>(
    initialState || initialStateByVariant[variant],
  );

  const handleChangeState = (newState: DrawerState) => {
    onStateChange(newState);
    setState(newState);
  };

  return (
    <DrawerContext.Provider
      value={{
        state,
        size,
        variant,
        selectedItemId,
        clipped,
        drawerWidth: drawerWidthProp,
        LinkComponent,
        switchState: () =>
          handleChangeState(targetStates[variant][state === "open" ? 0 : 1]),
        collapse: () => handleChangeState("collapse"),
        close: () => handleChangeState("close"),
        open: () => handleChangeState("open"),
        setState,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
