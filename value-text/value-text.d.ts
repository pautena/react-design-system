import { BaseValueProps, EditableValueProps } from '../value-base';
export type ValueTextProps = BaseValueProps<string | number> & EditableValueProps<string>;
/**
 * Displays a string value with a label
 */
export declare const ValueText: ({ label, value: valueProp, placeholder, editable, dense, onEdit, }: ValueTextProps) => import("react/jsx-runtime").JSX.Element;
