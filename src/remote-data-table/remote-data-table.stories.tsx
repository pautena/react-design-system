import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import { withPadding } from "../storybook";
import {
  type QuerySpecFilter,
  RemoteDataTable,
  type RemoteDataTableProps,
  type SortingState,
} from "./remote-data-table";
import {
  type MockItem,
  mockColumnsFull,
  mockItems,
  mockQueryFields,
} from "./remote-data-table.mocks";
import { useRemoteDataTable } from "./use-remote-data-table";

type RemoteDataTableStoryProps = Omit<
  RemoteDataTableProps<MockItem>,
  | "data"
  | "columns"
  | "pagination"
  | "onPaginationChange"
  | "rowCount"
  | "sorting"
  | "onSortingChange"
> & {
  initialSorting?: SortingState;
  enableQueryBuilder?: boolean;
};

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

const RemoteDataTableStory = (props: RemoteDataTableStoryProps) => {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [sorting, setSorting] = useState<SortingState>(
    props.initialSorting ?? [],
  );
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
      {...props}
      data={items}
      columns={mockColumnsFull}
      rowCount={mockItems.length}
      pagination={pagination}
      onPaginationChange={setPagination}
      sorting={sorting}
      onSortingChange={setSorting}
      query={
        props.enableQueryBuilder
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
  title: "Components/Tables/RemoteDataTable",
  component: RemoteDataTableStory,
  decorators: [withPadding()],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof RemoteDataTableStory>;

type Story = StoryObj<typeof RemoteDataTableStory>;

export const Default: Story = {
  args: {
    pageSizeOptions: [5, 10, 25],
  },
};

export const SortedByCreatedDate: Story = {
  args: {
    pageSizeOptions: [5, 10, 25],
    initialSorting: [{ id: "createdAt", desc: true }],
  },
};

export const WithQueryBuilder: Story = {
  args: {
    pageSizeOptions: [5, 10, 25],
    enableQueryBuilder: true,
  },
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
