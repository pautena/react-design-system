import { type PropsWithChildren, useState } from "react";
import { TabContextProvider } from "./tab-provider.context";

/**
 * Props for TabProvider.
 */
export interface TabProviderProps extends PropsWithChildren {
  /**
   * Initial active tab index.
   * @default 0
   */
  initialValue?: number;
}

/**
 * Provides tab selection state for TabPanel and Header components.
 */
export const TabProvider = ({
  children,
  initialValue = 0,
}: TabProviderProps) => {
  const tabState = useState(initialValue);

  return <TabContextProvider value={tabState}>{children}</TabContextProvider>;
};

export default TabProvider;
