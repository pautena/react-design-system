import { PropsWithChildren } from '../../../node_modules/react';
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
export declare const TabProvider: ({ children, initialValue, }: TabProviderProps) => import("react/jsx-runtime").JSX.Element;
export default TabProvider;
