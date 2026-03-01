import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
} from "react";

/**
 * React context for tab state management.
 */
export const TabContext = createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => null]);

/**
 * Provider for TabContext.
 */
export const TabContextProvider = TabContext.Provider;

/**
 * Hook to read and update the current tab index.
 */
export const useTab = () => useContext(TabContext);
