import { RemoteDataTableQueryBuilderProps as RemoteDataTableQueryBuilderConfig } from './remote-data-table.types';
/**
 * Props for the RemoteDataTableQueryBuilder component
 */
type RemoteDataTableQueryBuilderProps = {
    /** Query builder configuration */
    queryBuilder: RemoteDataTableQueryBuilderConfig;
};
/**
 * Filter builder for RemoteDataTable query definitions.
 */
export declare const RemoteDataTableQueryBuilder: ({ queryBuilder, }: RemoteDataTableQueryBuilderProps) => import("react/jsx-runtime").JSX.Element;
export {};
