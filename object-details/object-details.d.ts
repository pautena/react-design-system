import { BasicModelInstance, Model } from '../generators/generators.model';
export interface ObjectDetailsProps<T extends BasicModelInstance> {
    model: Model;
    dense?: boolean;
    instance: T;
}
/**
 * ObjectDetails component renders detailed information about a given instance of a model.
 * It supports rendering various types of fields including single values, groups, and arrays of groups.
 */
export declare const ObjectDetails: <T extends BasicModelInstance>({ model, instance, dense, }: ObjectDetailsProps<T>) => import("react/jsx-runtime").JSX.Element;
