import { BaseValueProps, EditableValueProps } from '../ValueBase';
/**
 * Props for the ValueBoolean component
 *
 * @extends BaseValueProps
 * @extends EditableValueProps
 */
export type ValueBooleanProps = BaseValueProps<boolean> & EditableValueProps<boolean>;
/**
 * Displays a boolean value with a label
 */
export declare function ValueBoolean({ label, value, placeholder, editable, dense, onEdit, }: ValueBooleanProps): import("react/jsx-runtime").JSX.Element;
export default ValueBoolean;
