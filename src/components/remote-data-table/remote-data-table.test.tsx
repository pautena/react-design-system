import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { vi } from "vitest";
import { render, screen } from "../../tests/testing-library";
import RemoteDataTable, {
  type QuerySpecFilter,
  type SortingState,
} from "./remote-data-table";
import {
  buildMockItems,
  mockColumnsBasic,
  mockColumnsFull,
  mockQueryFields,
} from "./remote-data-table.mocks";

const PaginatedFixture = ({ itemCount }: { itemCount: number }) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const items = buildMockItems(itemCount);
  const pageItems = items.slice(
    pagination.pageIndex * pagination.pageSize,
    pagination.pageIndex * pagination.pageSize + pagination.pageSize,
  );

  return (
    <RemoteDataTable
      data={pageItems}
      columns={mockColumnsBasic}
      rowCount={itemCount}
      pagination={pagination}
      onPaginationChange={setPagination}
      pageSizeOptions={[5, 10]}
    />
  );
};

const QueryBuilderFixture = ({
  initialFilters = [],
}: {
  initialFilters?: QuerySpecFilter[];
}) => {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const [filters, setFilters] = useState<QuerySpecFilter[]>(initialFilters);

  return (
    <RemoteDataTable
      data={buildMockItems(1)}
      columns={mockColumnsBasic}
      pagination={pagination}
      onPaginationChange={setPagination}
      pageSizeOptions={[5, 10]}
      query={{
        fields: mockQueryFields,
        filters,
        onFiltersChange: setFilters,
        placeholder: "Filter items",
      }}
    />
  );
};

describe("RemoteDataTable", () => {
  it("renders headers and rows", () => {
    const pagination = { pageIndex: 0, pageSize: 10 };
    render(
      <RemoteDataTable
        data={buildMockItems(3)}
        columns={mockColumnsBasic}
        pagination={pagination}
        onPaginationChange={() => {}}
      />,
    );

    expect(
      screen.getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Status" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  describe("Pagination", () => {
    it("displays items for the current page", () => {
      render(<PaginatedFixture itemCount={12} />);

      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 5")).toBeInTheDocument();
      expect(screen.queryByText("Item 6")).not.toBeInTheDocument();
    });

    it("navigates to next page when clicking next button", async () => {
      const user = userEvent.setup();
      render(<PaginatedFixture itemCount={12} />);

      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.queryByText("Item 6")).not.toBeInTheDocument();

      await user.click(screen.getByLabelText("Go to next page"));

      expect(screen.getByText("Item 6")).toBeInTheDocument();
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    });

    it("navigates to previous page when clicking previous button", async () => {
      const user = userEvent.setup();
      render(<PaginatedFixture itemCount={12} />);

      await user.click(screen.getByLabelText("Go to next page"));
      expect(screen.getByText("Item 6")).toBeInTheDocument();

      await user.click(screen.getByLabelText("Go to previous page"));
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.queryByText("Item 6")).not.toBeInTheDocument();
    });

    it("changes page size when selecting different rows per page", async () => {
      const user = userEvent.setup();
      render(<PaginatedFixture itemCount={12} />);

      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 5")).toBeInTheDocument();
      expect(screen.queryByText("Item 6")).not.toBeInTheDocument();

      const pageSizeSelect = screen.getByLabelText("Rows per page");
      await user.selectOptions(pageSizeSelect, "10");

      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 10")).toBeInTheDocument();
      expect(screen.queryByText("Item 11")).not.toBeInTheDocument();
    });

    it("displays correct pagination info text", () => {
      render(<PaginatedFixture itemCount={12} />);

      expect(screen.getByText("1-5 of 12")).toBeInTheDocument();
    });

    it("updates pagination info when navigating pages", async () => {
      const user = userEvent.setup();
      render(<PaginatedFixture itemCount={12} />);

      expect(screen.getByText("1-5 of 12")).toBeInTheDocument();

      await user.click(screen.getByLabelText("Go to next page"));

      expect(screen.getByText("6-10 of 12")).toBeInTheDocument();
    });

    it("disables previous button on first page", () => {
      render(<PaginatedFixture itemCount={12} />);

      expect(screen.getByLabelText("Go to previous page")).toBeDisabled();
      expect(screen.getByLabelText("Go to next page")).not.toBeDisabled();
    });

    it("disables next button on last page", async () => {
      const user = userEvent.setup();
      render(<PaginatedFixture itemCount={12} />);

      await user.click(screen.getByLabelText("Go to next page"));
      await user.click(screen.getByLabelText("Go to next page"));

      expect(screen.getByLabelText("Go to next page")).toBeDisabled();
      expect(screen.getByLabelText("Go to previous page")).not.toBeDisabled();
    });

    it("resets to first page when changing page size", async () => {
      const user = userEvent.setup();
      render(<PaginatedFixture itemCount={12} />);

      await user.click(screen.getByLabelText("Go to next page"));
      expect(screen.getByText("Item 6")).toBeInTheDocument();

      const pageSizeSelect = screen.getByLabelText("Rows per page");
      await user.selectOptions(pageSizeSelect, "10");

      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("1-10 of 12")).toBeInTheDocument();
    });
  });

  it("shows an empty message when no items exist", () => {
    render(
      <RemoteDataTable
        data={[]}
        columns={mockColumnsBasic}
        emptyMessage="No items"
        pagination={{ pageIndex: 0, pageSize: 10 }}
        onPaginationChange={() => {}}
      />,
    );

    expect(screen.getByText("No items")).toBeInTheDocument();
  });

  it("renders a query summary for active filters", () => {
    const filters: QuerySpecFilter[] = [
      { id: "status", field: "status", op: "eq", value: "Active" },
    ];

    render(
      <RemoteDataTable
        data={buildMockItems(1)}
        columns={mockColumnsBasic}
        pagination={{ pageIndex: 0, pageSize: 5 }}
        onPaginationChange={() => {}}
        pageSizeOptions={[5, 10]}
        query={{
          fields: mockQueryFields,
          filters,
          onFiltersChange: vi.fn(),
        }}
      />,
    );

    expect(screen.getByLabelText("Filter query")).toHaveTextContent(
      'Status is "Active"',
    );
  });

  it("opens the query builder and adds a filter", async () => {
    const user = userEvent.setup();
    render(<QueryBuilderFixture />);

    await user.click(screen.getByLabelText("Filter query"));
    await user.click(await screen.findByRole("button", { name: "Add filter" }));

    expect(screen.getByRole("combobox", { name: "Field" })).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Operator" }),
    ).toBeInTheDocument();
  });

  describe("User Interactions", () => {
    describe("Sorting", () => {
      const SortingFixture = () => {
        const [sorting, setSorting] = useState<SortingState>([]);
        const [pagination] = useState({ pageIndex: 0, pageSize: 10 });

        return (
          <div>
            <div data-testid="sort-state">
              {sorting.length > 0
                ? `${sorting[0].id}:${sorting[0].desc ? "desc" : "asc"}`
                : "none"}
            </div>
            <RemoteDataTable
              data={buildMockItems(5)}
              columns={mockColumnsFull}
              pagination={pagination}
              onPaginationChange={() => {}}
              sorting={sorting}
              onSortingChange={setSorting}
            />
          </div>
        );
      };

      it("sorts ascending when clicking sortable column header", async () => {
        const user = userEvent.setup();
        render(<SortingFixture />);

        expect(screen.getByTestId("sort-state")).toHaveTextContent("none");

        await user.click(screen.getByText("Name"));

        expect(screen.getByTestId("sort-state")).toHaveTextContent("name:asc");
      });

      it("toggles to descending on second click", async () => {
        const user = userEvent.setup();
        render(<SortingFixture />);

        await user.click(screen.getByText("Name"));
        expect(screen.getByTestId("sort-state")).toHaveTextContent("name:asc");

        await user.click(screen.getByText("Name"));
        expect(screen.getByTestId("sort-state")).toHaveTextContent("name:desc");
      });

      it("clears sorting on third click", async () => {
        const user = userEvent.setup();
        render(<SortingFixture />);

        await user.click(screen.getByText("Name"));
        await user.click(screen.getByText("Name"));
        expect(screen.getByTestId("sort-state")).toHaveTextContent("name:desc");

        await user.click(screen.getByText("Name"));
        expect(screen.getByTestId("sort-state")).toHaveTextContent("none");
      });

      it("does not sort when clicking non-sortable column", async () => {
        const user = userEvent.setup();
        render(<SortingFixture />);

        await user.click(screen.getByText("Status"));

        expect(screen.getByTestId("sort-state")).toHaveTextContent("none");
      });

      it("replaces previous sort when clicking different column", async () => {
        const user = userEvent.setup();
        render(<SortingFixture />);

        await user.click(screen.getByText("Name"));
        expect(screen.getByTestId("sort-state")).toHaveTextContent("name:asc");

        await user.click(screen.getByText("Created"));
        expect(screen.getByTestId("sort-state")).toHaveTextContent(
          "createdAt:asc",
        );
      });
    });

    describe("Row Click", () => {
      it("calls onRowClick when row is clicked", async () => {
        const user = userEvent.setup();
        const handleRowClick = vi.fn();

        render(
          <RemoteDataTable
            data={buildMockItems(3)}
            columns={mockColumnsBasic}
            pagination={{ pageIndex: 0, pageSize: 10 }}
            onPaginationChange={() => {}}
            onRowClick={handleRowClick}
          />,
        );

        const rows = screen.getAllByRole("row");
        await user.click(rows[1]);

        expect(handleRowClick).toHaveBeenCalledTimes(1);
        expect(handleRowClick).toHaveBeenCalledWith(
          expect.objectContaining({
            id: "1",
            name: "Item 1",
          }),
        );
      });

      it("does not call onRowClick when not provided", async () => {
        const user = userEvent.setup();

        render(
          <RemoteDataTable
            data={buildMockItems(3)}
            columns={mockColumnsBasic}
            pagination={{ pageIndex: 0, pageSize: 10 }}
            onPaginationChange={() => {}}
          />,
        );

        const rows = screen.getAllByRole("row");
        await user.click(rows[1]);

        expect(screen.getByText("Item 1")).toBeInTheDocument();
      });
    });

    describe("Filtering", () => {
      it("updates filters when adding a new filter", async () => {
        const user = userEvent.setup();
        render(<QueryBuilderFixture />);

        await user.click(screen.getByLabelText("Filter query"));
        await user.click(
          await screen.findByRole("button", { name: "Add filter" }),
        );

        const fieldCombobox = screen.getByRole("combobox", { name: "Field" });
        await user.selectOptions(fieldCombobox, "status");

        const valueCombobox = screen.getByRole("combobox", { name: "Value" });
        await user.selectOptions(valueCombobox, "Active");

        await user.click(screen.getByLabelText("Close filters"));

        expect(screen.getByLabelText("Filter query")).toHaveTextContent(
          'Status is "Active"',
        );
      });

      it("removes filter when clicking remove button", async () => {
        const user = userEvent.setup();
        const initialFilters: QuerySpecFilter[] = [
          { id: "status", field: "status", op: "eq", value: "Active" },
        ];

        render(<QueryBuilderFixture initialFilters={initialFilters} />);

        expect(screen.getByLabelText("Filter query")).toHaveTextContent(
          'Status is "Active"',
        );

        await user.click(screen.getByLabelText("Filter query"));

        const removeButton = await screen.findByLabelText("Remove filter");
        await user.click(removeButton);

        await user.click(screen.getByLabelText("Close filters"));

        expect(screen.getByLabelText("Filter query")).toHaveTextContent(
          "Filter items",
        );
      });

      it("updates existing filter values", async () => {
        const user = userEvent.setup();
        const initialFilters: QuerySpecFilter[] = [
          { id: "status", field: "status", op: "eq", value: "Active" },
        ];

        render(<QueryBuilderFixture initialFilters={initialFilters} />);

        await user.click(screen.getByLabelText("Filter query"));

        const valueCombobox = await screen.findByRole("combobox", {
          name: "Value",
        });
        await user.selectOptions(valueCombobox, "Inactive");

        await user.click(screen.getByLabelText("Close filters"));

        expect(screen.getByLabelText("Filter query")).toHaveTextContent(
          'Status is "Inactive"',
        );
      });

      it("allows adding multiple filters", async () => {
        const user = userEvent.setup();
        render(<QueryBuilderFixture />);

        await user.click(screen.getByLabelText("Filter query"));
        await user.click(screen.getByRole("button", { name: "Add filter" }));

        const fieldComboboxes = screen.getAllByRole("combobox", {
          name: "Field",
        });
        await user.selectOptions(fieldComboboxes[0], "name");

        const opComboboxes = screen.getAllByRole("combobox", {
          name: "Operator",
        });
        await user.selectOptions(opComboboxes[0], "ilike");

        const valueInput = screen.getByRole("textbox", { name: "Value" });
        await user.clear(valueInput);
        await user.type(valueInput, "test");

        await user.click(screen.getByRole("button", { name: "Add filter" }));

        const fieldComboboxes2 = screen.getAllByRole("combobox", {
          name: "Field",
        });
        await user.selectOptions(fieldComboboxes2[1], "status");

        const valueComboboxes = screen.getAllByRole("combobox", {
          name: "Value",
        });
        await user.selectOptions(valueComboboxes[0], "Active");

        await user.click(screen.getByLabelText("Close filters"));

        expect(screen.getByLabelText("Filter query")).toHaveTextContent(
          'Name contains "test" AND Status is "Active"',
        );
      });
    });
  });
});
