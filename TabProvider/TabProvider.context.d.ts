import { Dispatch, SetStateAction } from '../../node_modules/react';
export declare const TabContext: import('../../node_modules/react').Context<[number, Dispatch<SetStateAction<number>>]>;
export declare const TabContextProvider: import('../../node_modules/react').Provider<[number, Dispatch<SetStateAction<number>>]>;
export declare const useTab: () => [number, Dispatch<SetStateAction<number>>];
