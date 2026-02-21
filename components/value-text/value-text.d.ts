import { BaseValueProps } from '../../types/value-base';
/**
 * Props for the ValueText component.
 */
export type ValueTextProps = BaseValueProps<string | number>;
/**
 * Displays a string or number value with a label.
 */
export declare function ValueText({ label, value: valueProp, placeholder, dense, }: ValueTextProps): import("react/jsx-runtime").JSX.Element;
export default ValueText;
