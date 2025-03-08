import { Model, BasicModelInstance } from '../generators';
export interface ModelFormProps<T extends BasicModelInstance> {
    model: Model;
    dense?: boolean;
    initialValues?: T;
    saveButtonText: string;
    onSubmit: (values: T) => void;
}
export declare const ModelForm: <T extends BasicModelInstance>({ model, saveButtonText, dense, onSubmit, initialValues, }: ModelFormProps<T>) => import("react/jsx-runtime").JSX.Element;
