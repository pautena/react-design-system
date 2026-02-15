import { BaseValueProps, EditableValueProps } from '../ValueBase';
export type EditInputType = "datetime" | "date" | "time";
/**
 * Props for the ValueDatetime component
 */
export interface ValueDatetimeProps extends BaseValueProps<Date>, EditableValueProps<Date> {
    /**
     * Datetime format
     */
    format: string;
    /**
     * Edit input type
     */
    editInputType?: EditInputType;
}
/**
 * Displays a formated datetime with a label
 */
export declare function ValueDatetime({ label, value: valueProp, format: fmt, placeholder, editable, editInputType, dense, onEdit, }: ValueDatetimeProps): import("react/jsx-runtime").JSX.Element;
export default ValueDatetime;
