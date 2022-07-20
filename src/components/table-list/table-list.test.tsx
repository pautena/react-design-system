import React from "react";
import { render } from "../../tests";
import { screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import { BasicData, TableList } from "./table-list";
import { HeadCell } from "../table/enhanced-table";

const columns: HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "Item ID",
    sort: false,
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
    sort: true,
  },
  {
    id: "value",
    numeric: true,
    disablePadding: false,
    label: "Value",
    sort: true,
  },
];
const data: BasicData[] = [
  {
    id: "item-c",
    name: "fg Item 1",
    value: 1,
  },
  {
    id: "item-a",
    name: "aa Item 2",
    value: 2,
  },
  {
    id: "item-l",
    name: "ba Item 3",
    value: 3,
  },
  {
    id: "item-j",
    name: "aa Item 4",
    value: 4,
  },
  {
    id: "item-w",
    name: "cd Item 5",
    value: 5,
  },
];

function renderInstance({
  search = false,
  defaultSort = "value",
  loading = false,
}: { defaultSort?: string; loading?: boolean; search?: boolean } = {}) {
  const onClick = jest.fn();
  const instance = render(
    <TableList
      search={search}
      data={data}
      columns={columns}
      defaultSort={defaultSort}
      defaultOrder="asc"
      loading={loading}
      onClick={onClick}
    />,
  );

  return { ...instance, onClick };
}

describe("TableList", () => {
  it("would render all items and its values", () => {
    renderInstance();

    data.forEach(({ id, name, value }) => {
      expect(screen.getByRole("cell", { name: id })).toBeInTheDocument();
      expect(screen.getByRole("cell", { name: name })).toBeInTheDocument();
      expect(screen.getByRole("cell", { name: value })).toBeInTheDocument();
    });
  });

  it("all items are rendered in the correct default order", async () => {
    renderInstance();

    [/item 1/i, /item 2/i, /item 3/i, /item 4/i, /item 5/i].forEach((item, index) => {
      expect(screen.getByRole("cell", { name: item })).toHaveAttribute(
        "aria-rowindex",
        index.toString(),
      );
    });
  });

  it("loading is true a loading indicator is displayed", () => {
    renderInstance({ loading: true });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  describe("search", () => {
    it("would render a search input if search is true", () => {
      renderInstance({ search: true });

      expect(screen.getByRole("search")).toBeInTheDocument();
    });

    it("wouldn't render a search input if search is false", () => {
      renderInstance({ search: false });

      expect(screen.queryByRole("search")).not.toBeInTheDocument();
    });
  });

  describe("if I search an 'a'", () => {
    it("would render the items 2,3 and 4", async () => {
      renderInstance({ search: true });

      await userEvents.type(screen.getByPlaceholderText(/search/i), "a");

      expect(screen.getByText(/item 2/i)).toBeInTheDocument();
      expect(screen.getByText(/item 3/i)).toBeInTheDocument();
      expect(screen.getByText(/item 4/i)).toBeInTheDocument();

      expect(screen.queryByText(/item 1/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/item 5/i)).not.toBeInTheDocument();
    });

    it("would render all the items if I remove the search", async () => {
      renderInstance({ search: true });

      const search = screen.getByPlaceholderText(/search/i);
      await userEvents.type(search, "a");
      await userEvents.clear(search);

      expect(screen.getByText(/item 1/i)).toBeInTheDocument();
      expect(screen.getByText(/item 2/i)).toBeInTheDocument();
      expect(screen.getByText(/item 3/i)).toBeInTheDocument();
      expect(screen.getByText(/item 4/i)).toBeInTheDocument();
      expect(screen.getByText(/item 5/i)).toBeInTheDocument();
    });
  });

  describe("sort by a sortable column", () => {
    it("once it will be asc sorted", async () => {
      renderInstance();

      await userEvents.click(screen.getByText(/name/i));

      expect(screen.getByRole("cell", { name: /item 2/i })).toHaveAttribute("aria-rowindex", "0");
      expect(screen.getByRole("cell", { name: /item 4/i })).toHaveAttribute("aria-rowindex", "1");
      expect(screen.getByRole("cell", { name: /item 3/i })).toHaveAttribute("aria-rowindex", "2");
      expect(screen.getByRole("cell", { name: /item 5/i })).toHaveAttribute("aria-rowindex", "3");
      expect(screen.getByRole("cell", { name: /item 1/i })).toHaveAttribute("aria-rowindex", "4");
    });

    it("two times it will be desc sorted", async () => {
      renderInstance();

      await userEvents.click(screen.getByText(/name/i));
      await userEvents.click(screen.getByText(/name/i));

      expect(screen.getByRole("cell", { name: /item 1/i })).toHaveAttribute("aria-rowindex", "0");
      expect(screen.getByRole("cell", { name: /item 5/i })).toHaveAttribute("aria-rowindex", "1");
      expect(screen.getByRole("cell", { name: /item 3/i })).toHaveAttribute("aria-rowindex", "2");
      expect(screen.getByRole("cell", { name: /item 4/i })).toHaveAttribute("aria-rowindex", "3");
      expect(screen.getByRole("cell", { name: /item 2/i })).toHaveAttribute("aria-rowindex", "4");
    });
  });

  it("sort a non sortable column", async () => {
    renderInstance();

    await userEvents.click(screen.getByText(/id/i));

    expect(screen.getByRole("cell", { name: /item 1/i })).toHaveAttribute("aria-rowindex", "0");
    expect(screen.getByRole("cell", { name: /item 2/i })).toHaveAttribute("aria-rowindex", "1");
    expect(screen.getByRole("cell", { name: /item 3/i })).toHaveAttribute("aria-rowindex", "2");
    expect(screen.getByRole("cell", { name: /item 4/i })).toHaveAttribute("aria-rowindex", "3");
    expect(screen.getByRole("cell", { name: /item 5/i })).toHaveAttribute("aria-rowindex", "4");
  });

  it("would call onClick if a row is clicked", async () => {
    const { onClick } = renderInstance();

    await userEvents.click(screen.getByRole("row", { name: /item 3/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(data[2]);
  });
});
