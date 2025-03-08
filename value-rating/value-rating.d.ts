import { BaseValueProps, EditableValueProps } from '../value-base';
export type ValueRatingProps = BaseValueProps<number> & {
    maxRating?: number;
} & EditableValueProps<number>;
/**
 * Displays a number using stars
 */
export declare const ValueRating: ({ label, value, maxRating, editable, dense, onEdit, }: ValueRatingProps) => import("react/jsx-runtime").JSX.Element;
