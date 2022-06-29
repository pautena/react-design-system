import { createContext, useContext } from "react";

export const TabContext = createContext(0);
export const TabContextProvider = TabContext.Provider;
export const useTab = () => useContext(TabContext);
