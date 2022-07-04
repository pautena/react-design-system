import { TableRow, TableCell, Box} from '@mui/material';
import React from 'react';
import { EnhancedTable, HeadCell, Order } from '../table/enhanced-table';

export interface BasicData {
  id:string;
  [key:string]:any;
}

export interface TableListProps<T extends BasicData> {
  columns:HeadCell[];
  data:T[];
  search?: boolean;
  defaultSort: string;
  defaultOrder?: Order;
  loading?: boolean;
  onClick?:(d:T)=>void;
}


export const TableList = <T extends BasicData,>({columns,data,onClick=()=>null, search,defaultSort,defaultOrder,loading}:TableListProps<T>) => {
  return (
  <EnhancedTable<T> columns={columns} data={data} search={search} defaultSort={defaultSort} defaultOrder={defaultOrder} loading={loading}>
    {(filteredData) => 
      filteredData.map((row,i)=>(
        <TableRow
        key={row.id}
        onClick={() => onClick(row)}
        role="row"
        aria-rowindex={i}
        sx={{ cursor: "pointer" }}
      >
        {columns.map(({id},j)=>(
          <TableCell scope="row" key={id} aria-rowindex={i} aria-colindex={j}>
            {row[id]}
          </TableCell>
        ))}
      </TableRow>
      ))
    }
  </EnhancedTable>
  )
}