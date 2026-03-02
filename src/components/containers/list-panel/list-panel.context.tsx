import { createContext, useContext } from "react";

export const ListPanelContext = createContext<string | undefined>(undefined);
export const ListPanelContextProvider = ListPanelContext.Provider;
export const useListPanel = () => useContext(ListPanelContext);
