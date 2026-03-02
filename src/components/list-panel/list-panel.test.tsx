import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render, screen } from "../../tests/testing-library";
import { ListPanel, type ListPanelItem } from "./list-panel";
import { ListPanelDemoContent, mockItemsShort } from "./list-panel.mocks";
import { ListPanelPanel } from "./list-panel-panel";

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
          <div>Drafts panel</div>
        </ListPanelPanel>
      </ListPanel>,
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

  it("should change the selected item if one is clicked", async () => {
    const user = userEvent.setup();
    const { onSelectedItemChange } = renderComponent({ items: mockItemsShort });

    await user.click(screen.getByRole("button", { name: /drafts/i }));

    expect(screen.getByText(/selected id: drafts/i)).toBeVisible();
    expect(onSelectedItemChange).toHaveBeenCalledTimes(1);
    expect(onSelectedItemChange).toHaveBeenCalledWith("drafts");
  });

  it("should render the panel if the draft is selected", async () => {
    const user = userEvent.setup();
    renderComponent({ items: mockItemsShort });

    await user.click(screen.getByRole("button", { name: /drafts/i }));

    expect(screen.getByText(/drafts panel/i)).toBeVisible();
  });
});
