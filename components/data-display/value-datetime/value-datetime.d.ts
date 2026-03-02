import { BaseValueProps } from '../../../types/value-base';
/**
 * Props for the ValueDatetime component.
 */
export interface ValueDatetimeProps extends BaseValueProps<Date> {
    /**
     * Datetime format.
     */
    format: string;
}
/**
 * Displays a formatted datetime with a label.
 */
export declare function ValueDatetime({ label, value: valueProp, format: fmt, placeholder, dense, }: ValueDatetimeProps): import("react/jsx-runtime").JSX.Element;
