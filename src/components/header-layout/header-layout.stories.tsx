import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import type { HeaderTab } from "@/components/header";
import SkeletonGrid from "@/components/skeleton-grid";
import { withFullHeight, withLocalizationProvider } from "../../storybook";
import { TablePlaceholder } from "../../tests/table-placeholder";
import { TabPanel } from "../tab-panel";
import HeaderLayout from "./header-layout";

const breadcrumbs = [
  {
    id: "list",
    text: "Items",
    link: "/items",
  },
  {
    id: "item",
    text: "Item 1",
    link: "/items/1",
  },
];

const actions = [
  {
    id: "new",
    text: "Add",
  },
];

const tabs: HeaderTab[] = [
  {
    id: "tab1",
    label: "Tab 1",
  },
  {
    id: "tab2",
    label: "Tab 2",
    disabled: true,
  },
  {
    id: "tab3",
    label: "Tab 3",
  },
];

export default {
  title: "Layouts/HeaderLayout",
  component: HeaderLayout,
  decorators: [withFullHeight, withLocalizationProvider],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeaderLayout>;

type Story = StoryObj<typeof HeaderLayout>;

export const Skeleton: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <SkeletonGrid />,
  },
};

export const DataTable: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <TablePlaceholder />,
  },
};

export const Tabs: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
        tabs,
        tabsMode: "panel",
      },
    },
    children: (
      <div>
        <TabPanel index={0}>Panel 1</TabPanel>
        <TabPanel index={1}>Panel 2</TabPanel>
        <TabPanel index={2}>Panel 3</TabPanel>
      </div>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tab1 = canvas.getByRole("tab", { name: "Tab 1" });
    const tab2 = canvas.getByRole("tab", { name: "Tab 2" });
    const tab3 = canvas.getByRole("tab", { name: "Tab 3" });

    expect(tab2).toHaveAttribute("aria-disabled", "true");
    expect(canvas.getByText("Panel 1")).toBeInTheDocument();
    expect(canvas.queryByText("Panel 2")).not.toBeInTheDocument();
    expect(canvas.queryByText("Panel 3")).not.toBeInTheDocument();

    await userEvent.click(tab3);
    expect(canvas.queryByText("Panel 1")).not.toBeInTheDocument();
    expect(canvas.getByText("Panel 3")).toBeInTheDocument();

    await userEvent.click(tab1);
    expect(canvas.getByText("Panel 1")).toBeInTheDocument();
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <SkeletonGrid />,
  },
};

export const Fetching: Story = {
  args: {
    fetching: true,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <SkeletonGrid />,
  },
};

export const Error: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    error: {
      message: "There is no user with that id",
    },
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <SkeletonGrid />,
  },
};
