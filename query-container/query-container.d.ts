import { PropsWithChildren } from '../../node_modules/react';
export interface QueryContainerError {
    /**
     * The error title
     */
    name?: string;
    /**
     * The description of the error
     */
    message: string;
}
export interface QueryContainerSuccess {
    /**
     * The success title
     */
    name?: string;
    /**
     * The success text
     */
    message: string;
}
export type QueryContainerProps = PropsWithChildren<{
    /**
     * There is a query in progress and we have available data
     */
    fetching?: boolean | boolean[];
    /**
     * There is a query in progress and we don't have available data
     */
    loading?: boolean | boolean[];
    /**
     * The query has returned an error
     */
    error?: QueryContainerError;
    /**
     * The query has finished successfully
     */
    success?: QueryContainerSuccess;
}>;
/**
 * Component to show different indicators based on the usual api query statuses
 */
export declare function QueryContainer({ fetching: fetchingProp, loading: loadingProp, error, success, children, }: QueryContainerProps): import("react/jsx-runtime").JSX.Element;
