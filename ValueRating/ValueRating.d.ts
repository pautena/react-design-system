import { BaseValueProps, EditableValueProps } from '../ValueBase';
/**
 * Props for the ValueRating component
 *
 * @extends BaseValueProps
 * @extends EditableValueProps
 */
export type ValueRatingProps = BaseValueProps<number> & {
    /**
     * Maximum number of stars to display
     * @default 5
     */
    maxRating?: number;
} & EditableValueProps<number>;
/**
 * Displays a number using stars
 */
export declare function ValueRating({ label, value, maxRating, editable, dense, onEdit, }: ValueRatingProps): import("react/jsx-runtime").JSX.Element;
export default ValueRating;
