import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { EnhancedTable, type HeadCell, type Order } from "../enhanced-table";
import type { BasicModelInstance } from "../generators";

const OptionsId = "__options";

export interface TableRowOption<T extends BasicModelInstance> {
  id: string;
  label: string;
  onClick: (item: T) => void;
}

export interface TableListProps<T extends BasicModelInstance> {
  columns: HeadCell<T>[];
  data: T[];
  search?: boolean;
  defaultSort: string;
  defaultOrder?: Order;
  loading?: boolean;
  options?: TableRowOption<T>[];
  onClick?: (d: T) => void;
}

/**
 * TableList component renders a list about a given instances of a model.
 */
export const TableList = <T extends BasicModelInstance>({
  columns: columnsProp,
  options,
  data,
  onClick,
  search,
  defaultSort,
  defaultOrder,
  loading,
}: TableListProps<T>) => {
  const columns = [
    ...columnsProp,
    {
      id: OptionsId,
      label: "",
      disablePadding: false,
      numeric: false,
      sort: false,
    },
  ];
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | {
    item: T;
    anchor: HTMLElement;
  }>(null);

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
                onClick={() => onClick?.(row)}
                role="row"
                aria-rowindex={i}
                sx={{ cursor: onClick && "pointer" }}
              >
                {columns.map(({ id }, j) => (
                  <TableCell
                    role="cell"
                    scope="row"
                    key={id.toString()}
                    aria-rowindex={i}
                    aria-colindex={j}
                  >
                    {
                      row[
                        id
                      ] as string /* TODO: This has to be reimplemented having a cell based on each model type */
                    }
                  </TableCell>
                ))}
                {options && (
                  <TableCell>
                    <IconButton
                      data-testid={`options-${row.id}`}
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
              key={id}
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
