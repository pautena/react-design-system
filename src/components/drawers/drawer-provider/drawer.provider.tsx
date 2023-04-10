import { useState } from "react";
import React, { PropsWithChildren } from "react";
import { DrawerContext } from "./drawer-context";
import { DrawerState, DrawerVariant } from "../drawer.types";
import { drawerWidth } from "./drawer-mixins";

const initialState: Record<DrawerVariant, DrawerState> = {
  temporary: "close",
  mini: "collapse",
  permanent: "close",
  "permanent-under": "close",
  persistent: "open",
};

type Props = PropsWithChildren<{
  initialState?: DrawerState;
  drawerWidth?: number;
  variant?: DrawerVariant;
  selectedItemId?: string;
}>;

export const DrawerProvider = ({
  children,
  initialState: initialStateProp,
  variant = "temporary",
  drawerWidth: drawerWidthProp = drawerWidth,
  selectedItemId,
}: Props) => {
  const [state, setState] = useState<DrawerState>(initialStateProp || initialState[variant]);

  return (
    <DrawerContext.Provider
      value={{
        state,
        variant,
        selectedItemId,
        drawerWidth: drawerWidthProp,
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
