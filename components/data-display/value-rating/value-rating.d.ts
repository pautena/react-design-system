import { BaseValueProps } from '../../../types/value-base';
/**
 * Props for the ValueRating component.
 */
export type ValueRatingProps = BaseValueProps<number> & {
    /**
     * Maximum number of stars to display.
     * @default 5
     */
    maxRating?: number;
};
/**
 * Displays a number using stars.
 */
export declare function ValueRating({ label, value, maxRating, dense, }: ValueRatingProps): import("react/jsx-runtime").JSX.Element;
