import type { Decorator, Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import { withPadding } from "../storybook";
import RemoteDataTable, {
  type QuerySpecFilter,
  type SortingState,
} from "./RemoteDataTable";
import {
  type MockItem,
  mockColumnsFull,
  mockItems,
  mockQueryFields,
} from "./RemoteDataTable.mocks";
import { useRemoteDataTable } from "./use-remote-data-table";

const sortItems = (items: MockItem[], sorting: SortingState) => {
  if (!sorting.length) {
    return items;
  }

  return [...items].sort((left, right) => {
    for (const sort of sorting) {
      const key = sort.id as keyof MockItem;
      const leftValue = left[key];
      const rightValue = right[key];

      if (leftValue === rightValue) {
        continue;
      }

      const direction = sort.desc ? -1 : 1;
      const leftComparable =
        typeof leftValue === "string" ? leftValue.toLowerCase() : leftValue;
      const rightComparable =
        typeof rightValue === "string" ? rightValue.toLowerCase() : rightValue;

      if (leftComparable == null) {
        return 1 * direction;
      }

      if (rightComparable == null) {
        return -1 * direction;
      }

      return leftComparable > rightComparable ? direction : -direction;
    }

    return 0;
  });
};

const withRemoteDataTableState =
  (initialSorting: SortingState = [], enableQueryBuilder = false): Decorator =>
  (_Story, context) => {
    const [pagination, setPagination] = useState({
      pageIndex: 0,
      pageSize: 10,
    });
    const [sorting, setSorting] = useState<SortingState>(initialSorting);
    const [filters, setFilters] = useState<QuerySpecFilter[]>([]);
    const sortedItems = useMemo(() => sortItems(mockItems, sorting), [sorting]);
    const items = useMemo(
      () =>
        sortedItems.slice(
          pagination.pageIndex * pagination.pageSize,
          pagination.pageIndex * pagination.pageSize + pagination.pageSize,
        ),
      [pagination.pageIndex, pagination.pageSize, sortedItems],
    );

    return (
      <RemoteDataTable
        {...context.args}
        data={items}
        columns={mockColumnsFull}
        rowCount={mockItems.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        sorting={sorting}
        onSortingChange={setSorting}
        query={
          enableQueryBuilder
            ? {
                fields: mockQueryFields,
                filters,
                onFiltersChange: setFilters,
                placeholder: "Filter items...",
              }
            : undefined
        }
      />
    );
  };

export default {
  title: "Tables/RemoteDataTable",
  component: RemoteDataTable,
  decorators: [withPadding()],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof RemoteDataTable>;

type Story = StoryObj<typeof RemoteDataTable>;

export const Default: Story = {
  args: {
    pageSizeOptions: [5, 10, 25],
  },
  decorators: [withRemoteDataTableState()],
};

export const SortedByCreatedDate: Story = {
  args: {
    pageSizeOptions: [5, 10, 25],
  },
  decorators: [withRemoteDataTableState([{ id: "createdAt", desc: true }])],
};

export const WithQueryBuilder: Story = {
  args: {
    pageSizeOptions: [5, 10, 25],
  },
  decorators: [withRemoteDataTableState([], true)],
};

/**
 * Example using the useRemoteDataTable hook for state management.
 * This hook aggregates pagination, sorting, and filters state.
 */
export const UsingHook: Story = {
  render: () => {
    const tableState = useRemoteDataTable({
      initialPagination: { pageSize: 10 },
      initialSorting: [{ id: "name", desc: false }],
    });

    const sortedItems = useMemo(
      () => sortItems(mockItems, tableState.sorting),
      [tableState.sorting],
    );

    const items = useMemo(
      () =>
        sortedItems.slice(
          tableState.pagination.pageIndex * tableState.pagination.pageSize,
          tableState.pagination.pageIndex * tableState.pagination.pageSize +
            tableState.pagination.pageSize,
        ),
      [tableState.pagination, sortedItems],
    );

    return (
      <RemoteDataTable
        data={items}
        columns={mockColumnsFull}
        rowCount={mockItems.length}
        pagination={tableState.pagination}
        onPaginationChange={tableState.onPaginationChange}
        sorting={tableState.sorting}
        onSortingChange={tableState.onSortingChange}
        pageSizeOptions={[5, 10, 25]}
        query={{
          fields: mockQueryFields,
          filters: tableState.filters,
          onFiltersChange: tableState.onFiltersChange,
          placeholder: "Filter items...",
        }}
      />
    );
  },
};
