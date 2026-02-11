import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useRemoteDataTable } from "./use-remote-data-table";

describe("useRemoteDataTable", () => {
  describe("initializes", () => {
    it("with default pagination state", () => {
      const { result } = renderHook(() => useRemoteDataTable());

      expect(result.current.pagination).toEqual({
        pageIndex: 0,
        pageSize: 10,
      });
    });

    it("with custom pagination state", () => {
      const { result } = renderHook(() =>
        useRemoteDataTable({
          initialPagination: { pageIndex: 2, pageSize: 25 },
        }),
      );

      expect(result.current.pagination).toEqual({
        pageIndex: 2,
        pageSize: 25,
      });
    });

    it("with partial pagination state", () => {
      const { result } = renderHook(() =>
        useRemoteDataTable({
          initialPagination: { pageSize: 50 },
        }),
      );

      expect(result.current.pagination).toEqual({
        pageIndex: 0,
        pageSize: 50,
      });
    });

    it("with empty sorting state", () => {
      const { result } = renderHook(() => useRemoteDataTable());

      expect(result.current.sorting).toEqual([]);
    });

    it("with custom sorting state", () => {
      const { result } = renderHook(() =>
        useRemoteDataTable({
          initialSorting: [{ id: "name", desc: false }],
        }),
      );

      expect(result.current.sorting).toEqual([{ id: "name", desc: false }]);
    });

    it("with empty filters state", () => {
      const { result } = renderHook(() => useRemoteDataTable());

      expect(result.current.filters).toEqual([]);
    });

    it("with custom filters state", () => {
      const filters = [{ id: "1", field: "status", op: "eq" as const, value: "Active" }];
      const { result } = renderHook(() =>
        useRemoteDataTable({
          initialFilters: filters,
        }),
      );

      expect(result.current.filters).toEqual(filters);
    });
  });

  it("updates pagination state", () => {
    const { result } = renderHook(() => useRemoteDataTable());

    act(() => {
      result.current.onPaginationChange({ pageIndex: 2, pageSize: 25 });
    });

    expect(result.current.pagination).toEqual({
      pageIndex: 2,
      pageSize: 25,
    });
  });

  it("updates pagination state with updater function", () => {
    const { result } = renderHook(() => useRemoteDataTable());

    act(() => {
      result.current.onPaginationChange((old) => ({
        ...old,
        pageIndex: old.pageIndex + 1,
      }));
    });

    expect(result.current.pagination).toEqual({
      pageIndex: 1,
      pageSize: 10,
    });
  });

  it("updates sorting state", () => {
    const { result } = renderHook(() => useRemoteDataTable());

    act(() => {
      result.current.onSortingChange([{ id: "createdAt", desc: true }]);
    });

    expect(result.current.sorting).toEqual([{ id: "createdAt", desc: true }]);
  });

  it("updates filters state", () => {
    const { result } = renderHook(() => useRemoteDataTable());

    const filters = [{ id: "1", field: "name", op: "ilike" as const, value: "test" }];

    act(() => {
      result.current.onFiltersChange(filters);
    });

    expect(result.current.filters).toEqual(filters);
  });

  it("resets pagination to initial state", () => {
    const { result } = renderHook(() =>
      useRemoteDataTable({
        initialPagination: { pageSize: 25 },
      }),
    );

    act(() => {
      result.current.onPaginationChange({ pageIndex: 5, pageSize: 50 });
    });

    expect(result.current.pagination.pageIndex).toBe(5);

    act(() => {
      result.current.resetPagination();
    });

    expect(result.current.pagination).toEqual({
      pageIndex: 0,
      pageSize: 25,
    });
  });

  it("resets sorting to initial state", () => {
    const { result } = renderHook(() =>
      useRemoteDataTable({
        initialSorting: [{ id: "name", desc: false }],
      }),
    );

    act(() => {
      result.current.onSortingChange([{ id: "createdAt", desc: true }]);
    });

    expect(result.current.sorting).toEqual([{ id: "createdAt", desc: true }]);

    act(() => {
      result.current.resetSorting();
    });

    expect(result.current.sorting).toEqual([{ id: "name", desc: false }]);
  });

  it("resets filters to initial state", () => {
    const initialFilters = [{ id: "1", field: "status", op: "eq" as const, value: "Active" }];
    const { result } = renderHook(() =>
      useRemoteDataTable({
        initialFilters,
      }),
    );

    act(() => {
      result.current.onFiltersChange([
        { id: "2", field: "name", op: "ilike" as const, value: "test" },
      ]);
    });

    expect(result.current.filters.length).toBe(1);
    expect(result.current.filters[0].field).toBe("name");

    act(() => {
      result.current.resetFilters();
    });

    expect(result.current.filters).toEqual(initialFilters);
  });

  it("resets all state to initial values", () => {
    const { result } = renderHook(() =>
      useRemoteDataTable({
        initialPagination: { pageSize: 25 },
        initialSorting: [{ id: "name", desc: false }],
        initialFilters: [{ id: "1", field: "status", op: "eq" as const, value: "Active" }],
      }),
    );

    act(() => {
      result.current.onPaginationChange({ pageIndex: 5, pageSize: 50 });
      result.current.onSortingChange([{ id: "createdAt", desc: true }]);
      result.current.onFiltersChange([
        { id: "2", field: "name", op: "ilike" as const, value: "test" },
      ]);
    });

    expect(result.current.pagination.pageIndex).toBe(5);
    expect(result.current.sorting[0].id).toBe("createdAt");
    expect(result.current.filters[0].field).toBe("name");

    act(() => {
      result.current.resetAll();
    });

    expect(result.current.pagination).toEqual({
      pageIndex: 0,
      pageSize: 25,
    });
    expect(result.current.sorting).toEqual([{ id: "name", desc: false }]);
    expect(result.current.filters).toEqual([
      { id: "1", field: "status", op: "eq", value: "Active" },
    ]);
  });
});
