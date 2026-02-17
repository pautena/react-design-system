import { BaseValueProps } from '../ValueBase';
/**
 * Props for the ValueBoolean component
 *
 * @extends BaseValueProps
 */
export type ValueBooleanProps = BaseValueProps<boolean>;
/**
 * Displays a boolean value with a label
 */
export declare function ValueBoolean({ label, value, placeholder, dense, }: ValueBooleanProps): import("react/jsx-runtime").JSX.Element;
export default ValueBoolean;
