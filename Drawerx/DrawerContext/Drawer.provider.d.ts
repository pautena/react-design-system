import { PropsWithChildren, ElementType } from '../../../node_modules/react';
import { DrawerSize, DrawerState, DrawerVariant } from '../Drawer.types';
export interface DrawerProviderProps extends PropsWithChildren {
    /**
     * Initial state of the drawer
     */
    initialState?: DrawerState;
    /**
     * Size of the drawer
     * @default "medium"
     */
    size?: DrawerSize;
    /**
     * Whether the drawer is clipped under the app bar
     * @default true
     */
    clipped?: boolean;
    /**
     * Width of the drawer in pixels
     */
    drawerWidth?: number;
    /**
     * Variant of the drawer behavior
     * - temporary: slides over content, closes on backdrop click
     * - persistent: pushes content when open
     * - mini: shows icons only when collapsed
     * @default "temporary"
     */
    variant?: DrawerVariant;
    /**
     * ID of the currently selected navigation item
     */
    selectedItemId?: string;
    /**
     * The component used to render a link when the `href` prop is provided.
     * @default 'a'
     */
    LinkComponent?: ElementType;
    /**
     * Callback fired when the drawer state changes
     * @param newState - The new drawer state
     */
    onStateChange?: (newState: DrawerState) => void;
}
export declare const DrawerProvider: ({ children, initialState: initialStateProp, variant, size, drawerWidth: drawerWidthProp, clipped, selectedItemId, LinkComponent, onStateChange, }: DrawerProviderProps) => import("react/jsx-runtime").JSX.Element;
