import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
} from "react";

export const TabContext = createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => null]);
export const TabContextProvider = TabContext.Provider;
export const useTab = () => useContext(TabContext);
