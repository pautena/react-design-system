import { QuerySpecField, QuerySpecFilter, QuerySpecOp } from './remote-data-table.types';
export declare const querySpecOpLabels: Record<QuerySpecOp, string>;
export declare const createFilterId: () => string;
export declare const getFieldByName: (fields: QuerySpecField[], name: string) => QuerySpecField | undefined;
export declare const getOpsForField: (field?: QuerySpecField) => QuerySpecOp[];
export declare const coerceFilterValue: (field: QuerySpecField | undefined, op: QuerySpecOp, value?: string) => string;
export declare const formatFiltersSummary: (filters: QuerySpecFilter[], fields: QuerySpecField[]) => string;
export declare const buildQuerySpecParams: (filters: QuerySpecFilter[], fields: QuerySpecField[]) => Record<string, string | number | boolean>;
