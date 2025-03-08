import { ElementType } from '../../../node_modules/react';
import { DrawerSize, DrawerState, DrawerVariant } from '../drawer.types';
export interface DrawerContextProps {
    selectedItemId?: string;
    /**
     * Item size. default to medium
     */
    size: DrawerSize;
    state: DrawerState;
    variant: DrawerVariant;
    drawerWidth: number;
    clipped: boolean;
    /**
     * The component used to render a link when the `href` prop is provided.
     * @default 'a'
     */
    LinkComponent?: ElementType;
    switchState(): void;
    close(): void;
    collapse(): void;
    open(): void;
    setState: (state: DrawerState) => void;
}
export declare const DrawerContext: import('../../../node_modules/react').Context<DrawerContextProps | undefined>;
export declare const UndefinedProvider: Error;
export declare const useDrawer: () => DrawerContextProps;
