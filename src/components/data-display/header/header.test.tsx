import React, { ReactElement } from "react";
import { render, screen } from "~/tests/testing-library";
import userEvent from "@testing-library/user-event";
import { Header } from "./header";
import { vi } from "vitest";
import {
  HeaderAction,
  HeaderActionVariant,
  HeaderBreadcrumb,
  HeaderPreset,
  HeaderTab,
} from "./header.types";
import { breadcrumbs, actions as actionsData, tabs, linkedTabs } from "./header.dummy";
import { TabProvider } from "../../../providers";
import { WithLinkedTabs, WithPanelTabs } from "./header.stories";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Label } from "../label";

const actions = actionsData.map((a) => ({ ...a, onClick: a.onClick && vi.fn() }));

const renderInstance = ({
  title = "Lorem ipsum",
  loadingTitle,
  subtitle,
  loadingSubtitle,
  preset = "default",
  breadcrumbs,
  actions,
  actionsVariant,
  tabs,
  selectedTab,
  navigationButton,
}: {
  title?: string | ReactElement;
  subtitle?: string | ReactElement;
  loadingTitle?: boolean;
  loadingSubtitle?: boolean;
  preset?: HeaderPreset;
  breadcrumbs?: HeaderBreadcrumb[];
  actions?: HeaderAction[];
  actionsVariant?: HeaderActionVariant;
  tabs?: HeaderTab[];
  selectedTab?: number;
  navigationButton?: boolean;
}) => {
  const instance = render(
    <TabProvider initialValue={selectedTab}>
      <Header
        title={title}
        loadingTitle={loadingTitle}
        subtitle={subtitle}
        loadingSubtitle={loadingSubtitle}
        preset={preset}
        breadcrumbs={breadcrumbs}
        actions={actions}
        actionsVariant={actionsVariant}
        tabs={tabs}
        navigationButton={navigationButton ? { text: "go back", href: "/back" } : undefined}
      />
    </TabProvider>,
  );

  return { ...instance };
};

describe("Header", () => {
  describe("title", () => {
    it("should render the title", () => {
      renderInstance({ title: "Lorem ipsum" });

      expect(screen.getByRole("heading", { level: 1, name: /lorem ipsum/i })).toBeInTheDocument();
    });

    it("should render the custom title", () => {
      renderInstance({
        title: (
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h6">custom title</Typography>
            <Label variant="primary" text="4 items" sx={{ ml: 1 }} />
          </Box>
        ),
      });

      expect(screen.getByRole("heading", { level: 6, name: /custom title/i })).toBeVisible();
      expect(screen.getByText(/4 items/i)).toBeVisible();
    });

    it("should render a loading indicator if title is loading", () => {
      renderInstance({ title: "Lorem ipsum", loadingTitle: true });

      expect(
        screen.queryByRole("heading", { level: 1, name: /lorem ipsum/i }),
      ).not.toBeInTheDocument();
      expect(screen.queryByRole("progressbar", { name: /title loading/i })).toBeInTheDocument();
    });
  });

  describe("subtitle", () => {
    it("should render when is set", () => {
      renderInstance({ subtitle: "sit amet" });

      expect(screen.queryByRole("heading", { level: 2, name: /sit amet/i })).toBeInTheDocument();
    });

    it("shouldn't render if it is not set", () => {
      renderInstance({ subtitle: undefined });

      expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
    });

    it("should render the custom title", () => {
      renderInstance({
        subtitle: (
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="body2">Dolor sit amet</Typography>
            <Label variant="error" text="since yesterday" sx={{ ml: 1 }} />
          </Box>
        ),
      });

      expect(screen.getByText(/dolor sit amet/i)).toBeVisible();
      expect(screen.getByText(/since yesterday/i)).toBeVisible();
    });

    it("should render a loading indicator if title is loading", () => {
      renderInstance({ subtitle: "sit amet", loadingSubtitle: true });

      expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
      expect(screen.queryByRole("progressbar", { name: /subtitle loading/i })).toBeInTheDocument();
    });
  });

  describe("breadcrumbs", () => {
    it("should render a list of links", () => {
      renderInstance({ breadcrumbs });

      expect(screen.getByRole("link", { name: /items/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /item 1/i })).toBeInTheDocument();
    });

    it("should navigate to a breadcrumb when is", async () => {
      const { history } = renderInstance({ breadcrumbs });

      await userEvent.click(screen.getByRole("link", { name: /items/i }));

      expect(history.location.pathname).toBe("/items");
    });
  });

  describe("actions", () => {
    it("should render a list of buttons", () => {
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

    it("shouldn't be possible to click a disabled action", async () => {
      renderInstance({ actions });

      expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();
    });

    it("should redirect to the expected url when click an action with an href", async () => {
      const { history } = renderInstance({ actions });

      await userEvent.click(screen.getByRole("button", { name: /add/i }));

      expect(history.location.pathname).toBe("/items/add");
    });
  });

  describe("tabs", () => {
    it("should render a list of tabs", () => {
      renderInstance({ tabs, selectedTab: 2 });

      expect(screen.getByRole("tab", { name: /tab 1/i })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /tab 2/i })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /tab 3/i })).toBeInTheDocument();
    });

    it("should mark as active the selectedTab", () => {
      renderInstance({ tabs, selectedTab: 2 });

      expect(screen.getByRole("tab", { name: /tab 1/i, selected: false })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /tab 2/i, selected: false })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: /tab 3/i, selected: true })).toBeInTheDocument();
    });

    it("shouldn't be possible to click a disabled tab", () => {
      renderInstance({ tabs, selectedTab: 2 });

      expect(screen.getByRole("tab", { name: /tab 2/i })).toBeDisabled();
    });

    describe("tabMode = panel", () => {
      const enabledTestCases = tabs.filter((tab) => !tab.disabled).map(({ label }) => [label]);

      const renderPanelTabsInstance = () => {
        render(<WithPanelTabs />);
      };

      it("should change the selected tab when a tab is clicked", async () => {
        renderPanelTabsInstance();

        await userEvent.click(screen.getByRole("tab", { name: /tab 3/i }));

        expect(screen.getByRole("tab", { name: /tab 1/i, selected: false })).toBeInTheDocument();
        expect(screen.getByRole("tab", { name: /tab 2/i, selected: false })).toBeInTheDocument();
        expect(screen.getByRole("tab", { name: /tab 3/i, selected: true })).toBeInTheDocument();
      });

      it.each(enabledTestCases)(
        "if i cliick the tab %s the content of that panel should be rendered",
        async (label: string) => {
          renderPanelTabsInstance();

          await userEvent.click(screen.getByRole("tab", { name: label }));

          expect(screen.getByText(`Panel ${label}`)).toBeVisible();
        },
      );
    });

    describe("tabMode = navigation", () => {
      const enabledTestCases = linkedTabs
        .filter((tab) => !tab.disabled)
        .map(({ label, href }) => [href, label]);
      const renderLinkedTabsInstance = () => {
        render(<WithLinkedTabs />, { router: "memory" });
      };

      it("should render a list of tabs", () => {
        renderLinkedTabsInstance();

        tabs.forEach(({ label }) => {
          expect(screen.getByRole("tab", { name: label })).toBeVisible();
        });
      });

      it.each(enabledTestCases)(
        "should render %s if the user click %s label",
        async (href: string, label: string) => {
          renderLinkedTabsInstance();

          await userEvent.click(screen.getByRole("tab", { name: label }));

          expect(screen.getByText(`Panel: ${href}`)).toBeVisible();
        },
      );

      it.each(enabledTestCases)(
        "should navigate to %s if the user click %s label",
        async (href: string, label: string) => {
          renderLinkedTabsInstance();

          await userEvent.click(screen.getByRole("tab", { name: label }));

          expect(screen.getByText(`Location: ${href}`)).toBeVisible();
        },
      );
    });
  });

  describe("navigationButton", () => {
    it("should render a navigation button if is set", () => {
      renderInstance({ navigationButton: true });

      expect(screen.getByRole("link", { name: /go back/i })).toBeVisible();
    });

    it("shouldn't render a navigation button if is not set", () => {
      renderInstance({ navigationButton: false });

      expect(screen.queryByRole("link", { name: /go back/i })).not.toBeInTheDocument();
    });

    it("should navigate to the navigation path if is clicked", async () => {
      const { history } = renderInstance({ navigationButton: true });

      await userEvent.click(screen.getByRole("link", { name: /go back/i }));

      expect(history.location.pathname).toBe("/back");
    });
  });
});
