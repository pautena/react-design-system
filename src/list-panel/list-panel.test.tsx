import { fireEvent, render, screen } from "../tests/testing-library";
import { ListPanel, ListPanelItem } from "./list-panel";
import {
  ListPanelDemoContent,
  mockItemsRouterNavigation,
  mockItemsShort,
} from "./list-panel.mocks";
import { ListPanelPanel } from "./list-panel-panel";
import Box from "@mui/material/Box";
import { vi } from "vitest";
import { Route, Routes } from "react-router-dom";

describe("ListPanel", () => {
  const renderComponent = ({
    items,
    defaultSelectedItem,
  }: {
    items: ListPanelItem[];
    defaultSelectedItem?: string;
  }) => {
    const onSelectedItemChange = vi.fn();
    render(
      <ListPanel
        items={items}
        defaultSelectedItem={defaultSelectedItem}
        onSelectedItemChange={onSelectedItemChange}
      >
        <ListPanelDemoContent />
        <ListPanelPanel ids={["drafts"]}>
          <Box>Drafts panel</Box>
        </ListPanelPanel>
      </ListPanel>,
    );

    return { onSelectedItemChange };
  };

  const renderRouterComponent = ({ items }: { items: ListPanelItem[] }) => {
    const onSelectedItemChange = vi.fn();

    render(
      <Routes>
        <Route
          path="/*"
          element={
            <ListPanel items={items} onSelectedItemChange={onSelectedItemChange}>
              <Routes>
                <Route path="/all" element={<Box>all panel</Box>} />
                <Route path="/inbox" element={<Box>inbox panel</Box>} />
                <Route path="/sent" element={<Box>sent panel</Box>} />
                <Route path="/drafts" element={<Box>drafts panel</Box>} />
                <Route path="/" element={<Box>Select an item in the left panel</Box>} />
              </Routes>
            </ListPanel>
          }
        />
      </Routes>,
      {
        router: "memory",
      },
    );

    return { onSelectedItemChange };
  };

  it("should render a list item for each item", () => {
    renderComponent({ items: mockItemsShort });

    mockItemsShort.forEach(({ text }) => {
      expect(screen.getByRole("button", { name: text })).toBeVisible();
    });
  });

  it("should mark as selected the default item", () => {
    renderComponent({ items: mockItemsShort, defaultSelectedItem: "inbox" });

    expect(screen.getByText(/selected id: inbox/i)).toBeVisible();
  });

  it("should change the selected item if one is clicked", () => {
    const { onSelectedItemChange } = renderComponent({ items: mockItemsShort });

    fireEvent.click(screen.getByRole("button", { name: /drafts/i }));

    expect(screen.getByText(/selected id: drafts/i)).toBeVisible();
    expect(onSelectedItemChange).toHaveBeenCalledTimes(1);
    expect(onSelectedItemChange).toHaveBeenCalledWith("drafts");
  });

  it("should render the panel if the draft is selected", () => {
    renderComponent({ items: mockItemsShort });

    fireEvent.click(screen.getByRole("button", { name: /drafts/i }));

    expect(screen.getByText(/drafts panel/i)).toBeVisible();
  });

  it("should render the initial screen if it contains a router", () => {
    renderRouterComponent({ items: mockItemsRouterNavigation });

    expect(screen.getByText(/select an item in the left panel/i)).toBeVisible();
  });

  it("should render the correct route if the user click an item", () => {
    renderRouterComponent({ items: mockItemsRouterNavigation });

    fireEvent.click(screen.getByRole("link", { name: /sent/i }));

    expect(screen.getByText(/sent panel/i)).toBeVisible();
  });
});
