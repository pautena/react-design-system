import { useContext, createContext, ElementType } from "react";
import { DrawerState, DrawerVariant } from "src/drawerx/drawer";

export interface DrawerContextProps {
  selectedItemId?: string;
  state: DrawerState;
  variant: DrawerVariant;
  drawerWidth: number;
  underAppBar: boolean;
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

export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);
export const UndefinedProvider = new Error("DrawerContext.Provider is required and was undefined");

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw UndefinedProvider;
  }

  return context;
};
