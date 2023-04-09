import { useContext, createContext } from "react";
import { DrawerState, DrawerSubmenuVariant } from "../drawer.types";

export interface DrawerContextProps {
  state: DrawerState;
  submenuVariant?: DrawerSubmenuVariant;
  close(): void;
  collapse(): void;
  open(): void;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);
export const UndefinedProvider = new Error("DrawerContext.Provider is required and was undefined");

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw UndefinedProvider;
  }

  return context;
};
