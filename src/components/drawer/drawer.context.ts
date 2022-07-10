import {useContext,createContext} from 'react';


export interface DrawerContextProps {
  isOpen: boolean;
  close(): void;
  open(): void;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const useDrawer = ()=> {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw new Error("DrawerContext.Provider is required and was undefined");
  }

  return context;
}