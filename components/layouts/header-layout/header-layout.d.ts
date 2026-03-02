import { JSXElementConstructor, ReactElement } from '../../../../node_modules/react';
import { ContentProps } from '../../containers/content/content';
import { HeaderProps } from '../../data-display/header/header.types';
import { PlaceholderIcon } from '../../placeholders/placeholder/placeholder';
/**
 * Slots for HeaderLayout.
 */
export interface HeaderLayoutSlots {
    /**
     * Slot for header component.
     */
    header?: JSXElementConstructor<HeaderProps>;
    /**
     * Slot for content component.
     */
    content?: JSXElementConstructor<ContentProps>;
}
/**
 * Slot props for HeaderLayout.
 */
export interface HeaderLayoutSlotProps {
    /**
     * Props for header slot.
     */
    header?: HeaderProps;
    /**
     * Props for content slot.
     */
    content?: ContentProps;
}
/**
 * Error payload for HeaderLayout.
 */
export interface HeaderLayoutError {
    /**
     * Optional icon to display with the error.
     */
    icon?: PlaceholderIcon;
    /**
     * Optional title for the error.
     */
    title?: string;
    /**
     * The error message to display.
     */
    message: string;
}
/**
 * Props for HeaderLayout.
 */
export interface HeaderLayoutProps {
    /**
     * Header title.
     */
    title: string | ReactElement;
    /**
     * Optional subtitle.
     */
    subtitle?: string | ReactElement;
    /**
     * Optional slots.
     */
    slots?: HeaderLayoutSlots;
    /**
     * Optional slot props.
     */
    slotProps?: HeaderLayoutSlotProps;
    /**
     * Optional loading flag.
     */
    loading?: boolean;
    /**
     * Optional fetching flag.
     */
    fetching?: boolean;
    /**
     * Optional error state.
     */
    error?: HeaderLayoutError;
    /**
     * Content rendered in layout.
     */
    children?: React.ReactNode;
}
/**
 * Layout component with header and content area plus loading/fetching/error states.
 */
export declare function HeaderLayout({ loading, title, subtitle, slots, slotProps, children, fetching, error, }: HeaderLayoutProps): import("react/jsx-runtime").JSX.Element;
