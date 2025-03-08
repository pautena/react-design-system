import { BasicModelInstance, Model } from '../generators/generators.model';
export interface ObjectDetailsProps<T extends BasicModelInstance> {
    model: Model;
    dense?: boolean;
    instance: T;
}
export declare const ObjectDetails: <T extends BasicModelInstance>({ model, instance, dense, }: ObjectDetailsProps<T>) => import("react/jsx-runtime").JSX.Element;
