import { DrawerProviderProps, DrawerSize, DrawerState } from '../drawerx/drawer.types';
export interface DrawerContextProps {
    /**
     * ID of selected item.
     */
    selectedItemId?: string;
    /**
     * Item size.
     */
    size: DrawerSize;
    /**
     * Current drawer state.
     */
    state: DrawerState;
    /**
     * Drawer width in pixels.
     */
    drawerWidth: number;
    /**
     * Whether drawer is clipped.
     */
    clipped: boolean;
    /**
     * Link component used for navigations.
     */
    LinkComponent?: DrawerProviderProps["LinkComponent"];
    /**
     * Toggle drawer state.
     */
    switchState(): void;
    /**
     * Close drawer.
     */
    close(): void;
    /**
     * Open drawer.
     */
    open(): void;
    /**
     * Set arbitrary drawer state.
     */
    setState: (state: DrawerState) => void;
}
export declare const DrawerContext: import('../../../node_modules/react').Context<DrawerContextProps | undefined>;
export declare const UndefinedProvider: Error;
export declare const useDrawer: () => DrawerContextProps;
