import { BaseValueProps } from '../ValueBase';
/**
 * Props for the ValueText component
 *
 * @extends BaseValueProps
 */
export type ValueTextProps = BaseValueProps<string | number>;
/**
 * Displays a string value with a label
 */
export declare function ValueText({ label, value: valueProp, placeholder, dense, }: ValueTextProps): import("react/jsx-runtime").JSX.Element;
export default ValueText;
