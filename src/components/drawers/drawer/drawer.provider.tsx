import { useState } from "react";
import React, { PropsWithChildren } from "react";
import { DrawerContext } from "./drawer.context";
import { DrawerSubmenuVariantProp } from "../drawer.types";

type Props = PropsWithChildren<{
  initialOpen?: boolean;
  submenuVariant?: DrawerSubmenuVariantProp;
}>;

export const DrawerProvider = ({
  children,
  initialOpen = false,
  submenuVariant: submenuVariantProp = "collapse",
}: Props) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <DrawerContext.Provider
      value={{
        submenuVariant:
          typeof submenuVariantProp === "string"
            ? submenuVariantProp
            : open
            ? submenuVariantProp.open
            : submenuVariantProp.closed,
        isOpen: open,
        close: () => setOpen(false),
        open: () => setOpen(true),
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
