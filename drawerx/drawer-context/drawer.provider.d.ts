import { ElementType, PropsWithChildren } from '../../../node_modules/react';
import { DrawerSize, DrawerState, DrawerVariant } from '../drawer.types';
export type DrawerProviderProps = PropsWithChildren<{
    initialState?: DrawerState;
    size?: DrawerSize;
    clipped?: boolean;
    drawerWidth?: number;
    variant?: DrawerVariant;
    selectedItemId?: string;
    /**
     * The component used to render a link when the `href` prop is provided.
     * @default 'a'
     */
    LinkComponent?: ElementType;
    onStateChange?: (newState: DrawerState) => void;
}>;
export declare const DrawerProvider: ({ children, initialState: initialStateProp, variant, size, drawerWidth: drawerWidthProp, clipped, selectedItemId, LinkComponent, onStateChange, }: DrawerProviderProps) => import("react/jsx-runtime").JSX.Element;
