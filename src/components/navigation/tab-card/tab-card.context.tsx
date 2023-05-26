import { createContext, Dispatch, SetStateAction } from "react";

export const TabCardContext = createContext<[number, Dispatch<SetStateAction<number>>]>([
  0,
  () => null,
]);
export const TabCardContextProvider = TabCardContext.Provider;
