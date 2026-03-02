import { createContext, useContext } from "react";
import type {
  DrawerProviderProps,
  DrawerSize,
  DrawerState,
} from "@/types/drawer.types";

export interface DrawerContextProps {
  /**
   * ID of selected item.
   */
  selectedItemId?: string;
  /**
   * Item size.
   */
  size: DrawerSize;
  /**
   * Current drawer state.
   */
  state: DrawerState;
  /**
   * Drawer width in pixels.
   */
  drawerWidth: number;
  /**
   * Whether drawer is clipped.
   */
  clipped: boolean;
  /**
   * Link component used for navigations.
   */
  LinkComponent?: DrawerProviderProps["LinkComponent"];
  /**
   * Toggle drawer state.
   */
  switchState(): void;
  /**
   * Close drawer.
   */
  close(): void;
  /**
   * Open drawer.
   */
  open(): void;
  /**
   * Set arbitrary drawer state.
   */
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
