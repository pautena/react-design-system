import React from "react";
import { render, screen } from "../../tests";
import userEvent from "@testing-library/user-event";
import {
  Header,
  HeaderAction,
  HeaderActionVariant,
  HeaderBreadcrumb,
  HeaderPreset,
  HeaderTab,
} from "./header";
import { breadcrumbs, actions as actionsData, tabs } from "./header.dummy";

const actions = actionsData.map((a) => ({ ...a, onClick: a.onClick && jest.fn() }));

function renderInstance({
  title = "Lorem ipsum",
  subtitle,
  preset = "default",
  breadcrumbs,
  actions,
  actionsVariant,
  tabs,
  selectedTab,
}: {
  title?: string;
  subtitle?: string | undefined;
  preset?: HeaderPreset;
  breadcrumbs?: HeaderBreadcrumb[];
  actions?: HeaderAction[];
  actionsVariant?: HeaderActionVariant;
  tabs?: HeaderTab[];
  selectedTab?: number;
}) {
  const onChangeTab = jest.fn();

  const instance = render(
    <Header
      title={title}
      subtitle={subtitle}
      preset={preset}
      breadcrumbs={breadcrumbs}
      actions={actions}
      actionsVariant={actionsVariant}
      tabs={tabs}
      selectedTab={selectedTab}
      onChangeTab={onChangeTab}
    />,
  );

  return { ...instance, onChangeTab };
}

describe("Header", () => {
  it("renders the title", () => {
    renderInstance({ title: "Lorem ipsum" });

    expect(screen.getByRole("heading", { level: 1, name: /lorem ipsum/i })).toBeInTheDocument();
  });

  describe("subtitle", () => {
    it("would renders when is set", () => {
      renderInstance({ subtitle: "sit amet" });

      expect(screen.queryByRole("heading", { level: 2, name: /sit amet/i })).toBeInTheDocument();
    });

    it("wouldn't render if it is not set", () => {
      renderInstance({ subtitle: undefined });

      expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
    });
  });

  describe("breadcrumbs", () => {
    it("would render a list of links", () => {
      renderInstance({ breadcrumbs });

      expect(screen.getByRole("link", { name: /items/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /item 1/i })).toBeInTheDocument();
    });

    it("would navigate to a breadcrumb when is", async () => {
      const { history } = renderInstance({ breadcrumbs });

      await userEvent.click(screen.getByRole("link", { name: /items/i }));

      expect(history.location.pathname).toBe("/items");
    });
  });

  describe("actions", () => {
    it("would render a list of buttons", () => {
      renderInstance({ actions });

      expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /disabled/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
    });

    it("clicks an action with an onClick defined it will be called", async () => {
      renderInstance({ actions });

      const button = actions[1];

      await userEvent.click(screen.getByRole("button", { name: button.text }));

      expect(button.onClick).toHaveBeenCalledTimes(1);
    });

    it("wouldn't be possible to click a disabled action", async () => {
      renderInstance({ actions });

      expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();
    });

    it("would redirect to the expected url when click an action with an href", async () => {
      const { history } = renderInstance({ actions });

      await userEvent.click(screen.getByRole("button", { name: /add/i }));

      expect(history.location.pathname).toBe("/items/add");
    });
  });

  describe("tabs", () => {
    it("would render a list of tabs", () => {
      renderInstance({ tabs, selectedTab: 2 });

      expect(screen.getByRole("tab", { name: /tab 1/i })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /tab 2/i })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /tab 3/i })).toBeInTheDocument();
    });

    it("would mark as active the selectedTab", () => {
      renderInstance({ tabs, selectedTab: 2 });

      expect(screen.getByRole("tab", { name: /tab 1/i, selected: false })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /tab 2/i, selected: false })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /tab 3/i, selected: true })).toBeInTheDocument();
    });

    it("wouldn't be possible to click a disabled tab", () => {
      renderInstance({ tabs, selectedTab: 2 });

      expect(screen.getByRole("tab", { name: /tab 2/i })).toBeDisabled();
    });

    it("would call onChangeTab when a tab is clicked", async () => {
      const { onChangeTab } = renderInstance({ tabs, selectedTab: 0 });

      await userEvent.click(screen.getByRole("tab", { name: /tab 3/i }));

      expect(onChangeTab).toHaveBeenCalledTimes(1);
      expect(onChangeTab).toHaveBeenCalledWith(tabs[2], 2);
    });

    it("wouldn't call onChangeTab when the clicked tab is the selectedTab", async () => {
      const { onChangeTab } = renderInstance({ tabs, selectedTab: 2 });

      await userEvent.click(screen.getByRole("tab", { name: /tab 3/i }));

      expect(onChangeTab).not.toHaveBeenCalled();
    });
  });
});
