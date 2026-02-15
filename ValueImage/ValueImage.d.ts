import { BaseValueProps } from '../ValueBase';
/**
 * Props for the ValueImage component
 */
export interface ValueImageProps extends BaseValueProps<string> {
    /**
     * Image size
     */
    size?: number;
}
/**
 * Displays a image value with a label
 */
export declare function ValueImage({ label, value, size: sizeArg, dense, }: ValueImageProps): import("react/jsx-runtime").JSX.Element;
export default ValueImage;
