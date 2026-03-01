import { Dispatch, SetStateAction } from '../../../node_modules/react';
/**
 * React context for tab state management.
 */
export declare const TabContext: import('../../../node_modules/react').Context<[number, Dispatch<SetStateAction<number>>]>;
/**
 * Provider for TabContext.
 */
export declare const TabContextProvider: import('../../../node_modules/react').Provider<[number, Dispatch<SetStateAction<number>>]>;
/**
 * Hook to read and update the current tab index.
 */
export declare const useTab: () => [number, Dispatch<SetStateAction<number>>];
