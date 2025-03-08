import { ModelField } from '../generators/generators.model';
export interface ModelFormField {
    field: ModelField;
    update: boolean;
    dense?: boolean;
    path?: string[];
    value: any;
    onChangeValue: (path: string[], value: any) => void;
}
export declare const ModelFormField: ({ field, path, value, dense, update, onChangeValue, }: ModelFormField) => import("react/jsx-runtime").JSX.Element | null;
