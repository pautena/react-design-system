import { useState } from "react";
import React, { PropsWithChildren } from "react";
import { DrawerContext } from "./drawer.context";
import { DrawerState } from "../drawer.types";
import { drawerWidth } from "./drawer.mixins";

type Props = PropsWithChildren<{
  initialState?: DrawerState;
  drawerWidth?: number;
}>;

export const DrawerProvider = ({
  children,
  initialState = "close",
  drawerWidth: drawerWidthProp = drawerWidth,
}: Props) => {
  const [state, setState] = useState<DrawerState>(initialState);

  return (
    <DrawerContext.Provider
      value={{
        state,
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
