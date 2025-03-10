import { PlaceholderIcon } from '../placeholder';
import { HeaderProps } from '../header';
import { ContentProps } from '../content';
import { JSXElementConstructor, PropsWithChildren, ReactElement } from '../../node_modules/react';
/**
 * Interface representing the slots for the HeaderLayout component.
 */
export interface HeaderLayoutSlots {
    /**
     * Optional slot for the header component.
     * Should be a JSX element constructor that takes HeaderProps as props.
     */
    header?: JSXElementConstructor<HeaderProps>;
    /**
     * Optional slot for the content component.
     * Should be a JSX element constructor that takes ContentProps as props.
     */
    content?: JSXElementConstructor<ContentProps>;
}
/**
 * Props for the HeaderLayout component slots.
 */
export interface HeaderLayoutSlotProps {
    /**
     * Props for the header slot.
     */
    header?: HeaderProps;
    /**
     * Props for the content slot.
     */
    content?: ContentProps;
}
/**
 * Represents an error that can occur in the HeaderLayout component.
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
export type HeaderLayoutProps = PropsWithChildren<{
    /**
     * The title to be displayed in the header.
     */
    title: string | ReactElement;
    /**
     * An optional subtitle to be displayed in the header.
     */
    subtitle?: string | ReactElement;
    /**
     * Optional slots for custom components within the header layout.
     */
    slots?: HeaderLayoutSlots;
    /**
     * Optional props for the custom slots.
     */
    slotProps?: HeaderLayoutSlotProps;
    /**
     * Optional flag to indicate if the header layout is in a loading state.
     */
    loading?: boolean;
    /**
     * Optional flag to indicate if the header layout is in a fetching state.
     */
    fetching?: boolean;
    /**
     * Optional error object to be displayed in the header layout.
     */
    error?: HeaderLayoutError;
}>;
/**
 * A layout component that provides a header and content area with optional loading, fetching, and error states.
 */
export declare const HeaderLayout: ({ loading, title, subtitle, slots, slotProps, children, fetching, error, }: HeaderLayoutProps) => import("react/jsx-runtime").JSX.Element;
