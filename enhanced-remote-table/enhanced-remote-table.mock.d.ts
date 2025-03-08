import { HeadCell, Order } from '../enhanced-table';
import { Data } from '../enhanced-table/enhanced-table.mock';
export interface EnhancedRemoteDummyTableProps {
    data: Data[];
    loading: boolean;
    defaultSort: keyof Data;
    defaultOrder?: Order;
    columns: HeadCell<Data>[];
    onRequestSort: (col: string, orderBy: Order) => void;
}
export declare function EnhancedRemoteDummyTable(props: EnhancedRemoteDummyTableProps): import("react/jsx-runtime").JSX.Element;
