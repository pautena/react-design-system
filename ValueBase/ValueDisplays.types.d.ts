export interface BaseValueProps<T> {
    /**
     * Name of the displayed value
     */
    label: string;
    /**
     * Value displayed
     */
    value?: T;
    /**
     * String rendered if value is undefined
     */
    placeholder?: string;
    /**
     * The value has to be displayed as compact or not.
     * False by default
     */
    dense?: boolean;
}
export declare const DefaultPlaceholder = "-";
