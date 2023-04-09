import { useState } from "react";
import React, { PropsWithChildren } from "react";
import { DrawerContext } from "./drawer.context";
import { DrawerState } from "../drawer.types";

type Props = PropsWithChildren<{
  initialState?: DrawerState;
}>;

export const DrawerProvider = ({ children, initialState = "close" }: Props) => {
  const [state, setState] = useState<DrawerState>(initialState);

  return (
    <DrawerContext.Provider
      value={{
        state,
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
