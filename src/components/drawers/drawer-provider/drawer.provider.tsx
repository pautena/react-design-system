import { useState } from "react";
import React, { PropsWithChildren } from "react";
import { DrawerContext } from "./drawer-context";
import { DrawerState, DrawerVariant } from "../drawer.types";
import { drawerWidth } from "./drawer-mixins";

const initialState: Record<DrawerVariant, DrawerState> = {
  temporary: "close",
  mini: "collapse",
  clipped: "open",
  persistent: "close",
};

const targetStates: Record<DrawerVariant, [DrawerState, DrawerState]> = {
  temporary: ["close", "open"],
  mini: ["collapse", "open"],
  clipped: ["close", "open"],
  persistent: ["close", "open"],
};

type DrawerProviderProps = PropsWithChildren<{
  initialState?: DrawerState;
  underAppBar?: boolean;
  drawerWidth?: number;
  variant?: DrawerVariant;
  selectedItemId?: string;
}>;

export const DrawerProvider = ({
  children,
  initialState: initialStateProp,
  variant = "temporary",
  drawerWidth: drawerWidthProp = drawerWidth,
  underAppBar = false,
  selectedItemId,
}: DrawerProviderProps) => {
  const [state, setState] = useState<DrawerState>(initialStateProp || initialState[variant]);

  return (
    <DrawerContext.Provider
      value={{
        state,
        variant,
        selectedItemId,
        underAppBar,
        drawerWidth: drawerWidthProp,
        switchState: () => setState((state) => targetStates[variant][state === "open" ? 0 : 1]),
        collapse: () => setState("collapse"),
        close: () => setState("close"),
        open: () => setState("open"),
        setState,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
