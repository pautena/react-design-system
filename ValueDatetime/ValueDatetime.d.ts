import { BaseValueProps } from '../ValueBase';
/**
 * Props for the ValueDatetime component
 */
export interface ValueDatetimeProps extends BaseValueProps<Date> {
    /**
     * Datetime format
     */
    format: string;
}
/**
 * Displays a formated datetime with a label
 */
export declare function ValueDatetime({ label, value: valueProp, format: fmt, placeholder, dense, }: ValueDatetimeProps): import("react/jsx-runtime").JSX.Element;
export default ValueDatetime;
