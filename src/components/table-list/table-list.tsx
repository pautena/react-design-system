import { TableRow, TableCell, IconButton, MenuItem, Menu } from "@mui/material";
import React from "react";
import { EnhancedTable, HeadCell, Order } from "../table/enhanced-table";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface BasicData {
  id: string;
  [key: string]: any;
}

export interface TableRowOption<T extends BasicData> {
  id: string;
  label: string;
  onClick: (item: T) => void;
}

export interface TableListProps<T extends BasicData> {
  columns: HeadCell[];
  data: T[];
  search?: boolean;
  defaultSort: string;
  defaultOrder?: Order;
  loading?: boolean;
  options?: TableRowOption<T>[];
  onClick?: (d: T) => void;
}

export const TableList = <T extends BasicData>({
  columns: columnsProp,
  options,
  data,
  onClick = () => null,
  search,
  defaultSort,
  defaultOrder,
  loading,
}: TableListProps<T>) => {
  const columns = columnsProp;
  const [anchorMenuEl, setAnchorMenuEl] = React.useState<null | { item: T; anchor: HTMLElement }>(
    null,
  );
  if (options) {
    columns.push({
      id: "__options",
      label: "",
      disablePadding: false,
      numeric: false,
      sort: false,
    });
  }

  return (
    <>
      <EnhancedTable<T>
        columns={columns}
        data={data}
        search={search}
        defaultSort={defaultSort}
        defaultOrder={defaultOrder}
        loading={loading}
      >
        {(filteredData) =>
          filteredData.map((row, i) => {
            return (
              <TableRow
                key={row.id}
                onClick={() => onClick(row)}
                role="row"
                aria-rowindex={i}
                sx={{ cursor: "pointer" }}
              >
                {columns.map(({ id }, j) => (
                  <TableCell role="cell" scope="row" key={id} aria-rowindex={i} aria-colindex={j}>
                    {row[id]}
                  </TableCell>
                ))}
                {options && (
                  <TableCell>
                    <IconButton
                      onClick={(event) => {
                        event.stopPropagation();
                        setAnchorMenuEl({
                          item: row,
                          anchor: event.currentTarget,
                        });
                      }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            );
          })
        }
      </EnhancedTable>
      {options && (
        <Menu
          anchorEl={anchorMenuEl?.anchor}
          open={!!anchorMenuEl}
          onClose={() => setAnchorMenuEl(null)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {options.map(({ id, label, onClick }) => (
            <MenuItem
              id={id}
              onClick={() => {
                if (anchorMenuEl) {
                  onClick(anchorMenuEl?.item);
                }
                setAnchorMenuEl(null);
              }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};
