import { ComponentProps } from '../../../node_modules/react';
import { Separator as UiSeparator } from '../ui/separator';
/**
 * Props for the Separator component.
 */
export interface SeparatorProps extends Omit<ComponentProps<typeof UiSeparator>, "orientation"> {
    /**
     * Orientation of the separator.
     * @default "horizontal"
     */
    orientation?: "horizontal" | "vertical";
}
/**
 * Consumer-facing separator wrapper for public package API.
 */
export declare function Separator({ orientation, ...props }: SeparatorProps): import("react/jsx-runtime").JSX.Element;
export default Separator;
