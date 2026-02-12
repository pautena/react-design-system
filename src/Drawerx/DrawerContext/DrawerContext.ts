import { createContext, type ElementType, useContext } from "react";
import type { DrawerSize, DrawerState, DrawerVariant } from "../Drawer.types";

export interface DrawerContextProps {
  selectedItemId?: string;
  /**
   * Item size. default to medium
   */
  size: DrawerSize;
  state: DrawerState;
  variant: DrawerVariant;
  drawerWidth: number;
  clipped: boolean;
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent?: ElementType;
  switchState(): void;
  close(): void;
  collapse(): void;
  open(): void;
  setState: (state: DrawerState) => void;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(
  undefined,
);
export const UndefinedProvider = new Error(
  "DrawerContext.Provider is required and was undefined",
);

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw UndefinedProvider;
  }

  return context;
};
