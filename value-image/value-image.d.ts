import { BaseValueProps } from '../value-base';
export interface ValueImageProps extends BaseValueProps<string> {
    /**
     * Image size
     */
    size?: number;
}
/**
 * Displays a image value with a label
 */
export declare const ValueImage: ({ label, value, size: sizeArg, dense }: ValueImageProps) => import("react/jsx-runtime").JSX.Element;
