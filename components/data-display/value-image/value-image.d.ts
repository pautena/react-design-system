import { BaseValueProps } from '../../../types/value-base';
/**
 * Props for the ValueImage component.
 */
export interface ValueImageProps extends BaseValueProps<string> {
    /**
     * Image size.
     */
    size?: number;
}
/**
 * Displays an image value with a label.
 */
export declare function ValueImage({ label, value, size: sizeArg, dense, }: ValueImageProps): import("react/jsx-runtime").JSX.Element;
