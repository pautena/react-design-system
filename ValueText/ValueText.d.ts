import { BaseValueProps, EditableValueProps } from '../ValueBase';
/**
 * Props for the ValueText component
 *
 * @extends BaseValueProps
 * @extends EditableValueProps
 */
export type ValueTextProps = BaseValueProps<string | number> & EditableValueProps<string>;
/**
 * Displays a string value with a label
 */
export declare function ValueText({ label, value: valueProp, placeholder, editable, dense, onEdit, }: ValueTextProps): import("react/jsx-runtime").JSX.Element;
export default ValueText;
