import { useState } from "react";
import React, { PropsWithChildren } from "react";
import { DrawerContext } from "./drawer.context";
import { DrawerState, DrawerSubmenuVariantProp } from "../drawer.types";

type Props = PropsWithChildren<{
  initialState?: DrawerState;
  submenuVariant?: DrawerSubmenuVariantProp;
}>;

export const DrawerProvider = ({
  children,
  initialState = "close",
  submenuVariant: submenuVariantProp = "collapse",
}: Props) => {
  const [state, setState] = useState<DrawerState>(initialState);

  return (
    <DrawerContext.Provider
      value={{
        submenuVariant:
          typeof submenuVariantProp === "string"
            ? submenuVariantProp
            : state === "open"
            ? submenuVariantProp.open
            : submenuVariantProp.closed,
        state,
        collapse: () => setState("collapse"),
        close: () => setState("close"),
        open: () => setState("open"),
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
