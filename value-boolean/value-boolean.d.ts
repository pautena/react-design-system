import { BaseValueProps, EditableValueProps } from '../value-base';
export type ValueBooleanProps = BaseValueProps<boolean> & EditableValueProps<boolean>;
/**
 * Displays a boolean value with a label
 */
export declare const ValueBoolean: ({ label, value, placeholder, editable, dense, onEdit, }: ValueBooleanProps) => import("react/jsx-runtime").JSX.Element;
