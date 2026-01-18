import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render, screen } from "../tests/testing-library";
import { DummyTabs, TabCardDummy } from "./tab-card.dummy";

describe("TabCard", () => {
  function renderComponent({ initialTab = 0 } = {}) {
    const onChangeTab = vi.fn();
    render(
      <TabCardDummy
        tabs={DummyTabs}
        initialTab={initialTab}
        onChangeTab={onChangeTab}
      />,
    );
    return { onChangeTab };
  }

  it('initialTab is not set the "panel 1" is displayed', () => {
    renderComponent();

    expect(screen.getByText(/panel 1/i)).toBeInTheDocument();
  });

  it('initialTab is set to 3 the "panel 3" is displayed', () => {
    renderComponent({ initialTab: 3 });

    expect(screen.getByText(/panel 3/i)).toBeInTheDocument();
  });

  it("should render the tab labels", () => {
    renderComponent();

    expect(screen.getByText(/10/i)).toBeVisible();
    expect(screen.getByText(/12/i)).toBeVisible();
  });

  describe("click tab", () => {
    it.each([
      [/tab 1/i, /panel 1/i],
      [/tab 2.1/i, /panel 2/i],
      [/tab 2.2/i, /panel 2/i],
      [/tab 3/i, /panel 3/i],
    ])('click the tab "%s" the "%s" panel is displayed', async (tabName: RegExp, expectedText: RegExp) => {
      renderComponent();

      const tab = screen.getByRole("tab", { name: tabName });
      await userEvent.click(tab);

      expect(screen.getByText(expectedText)).toBeInTheDocument();
      expect(tab).toHaveAttribute("aria-selected", "true");
    });

    it('click the tab "tab 2" and click again the tab "tab 1" the "panel 1" is displayed', async () => {
      renderComponent();

      const tab1 = screen.getByRole("tab", { name: /tab 1/i });
      const tab2 = screen.getByRole("tab", { name: /tab 2.1/i });
      await userEvent.click(tab2);
      await userEvent.click(tab1);

      expect(screen.getByText(/panel 1/i)).toBeInTheDocument();
      expect(
        screen.getByRole("tab", { name: /tab 1/i, selected: true }),
      ).toBeVisible();
      expect(
        screen.getByRole("tab", { name: /tab 2.1/i, selected: false }),
      ).toBeVisible();
    });

    it("should call onChangeTab", async () => {
      const { onChangeTab } = renderComponent();

      await userEvent.click(screen.getByRole("tab", { name: /tab 2.2/i }));

      expect(onChangeTab).toHaveBeenCalledTimes(1);
      expect(onChangeTab).toHaveBeenCalledWith({ text: "tab 2.2" }, 2);
    });
  });
});
