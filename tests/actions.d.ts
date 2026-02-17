export declare const typeNumericInput: (element: HTMLElement, value: number) => void;
export declare const selectOption: (element: HTMLElement, option: string) => Promise<void>;
export declare const selectOptions: (element: HTMLElement, options: string[]) => Promise<void>;
export declare const clearMultiSelect: (element: HTMLElement) => Promise<void>;
export declare const clearCheckbox: (element: HTMLInputElement) => Promise<void>;
export declare const pickDatetime: (element: HTMLInputElement, valueArg: Date, fmt: string) => void;
