import type { Meta, StoryObj } from "@storybook/react";
import { BarChart3, LayoutDashboard, Users } from "lucide-react";
import { useMemo } from "react";
import {
  Board,
  Button,
  DrawerLayout,
  type DrawerNavigation,
  Header,
  NotificationCenterProvider,
  type QuerySpecField,
  RemoteDataTable,
  type RemoteDataTableColumn,
  useNotificationCenter,
  useRemoteDataTable,
  ValueCard,
  ValueItem,
  ValueText,
} from "@/index";

type UserRow = {
  id: string;
  name: string;
  role: string;
  status: "Active" | "Pending" | "Disabled";
  lastActive: string;
};

const users: UserRow[] = [
  {
    id: "u-1",
    name: "Ava Torres",
    role: "Admin",
    status: "Active",
    lastActive: "2h ago",
  },
  {
    id: "u-2",
    name: "Noah Rivera",
    role: "Analyst",
    status: "Pending",
    lastActive: "6h ago",
  },
  {
    id: "u-3",
    name: "Liam Chen",
    role: "Manager",
    status: "Active",
    lastActive: "1d ago",
  },
  {
    id: "u-4",
    name: "Sofia Patel",
    role: "Developer",
    status: "Disabled",
    lastActive: "5d ago",
  },
  {
    id: "u-5",
    name: "Mia García",
    role: "Support",
    status: "Active",
    lastActive: "12h ago",
  },
];

const navigation: DrawerNavigation = [
  { kind: "header", id: "main", text: "Overview" },
  {
    kind: "link",
    id: "dashboard",
    text: "Dashboard",
    href: "#",
    icon: <LayoutDashboard className="h-4 w-4" aria-hidden="true" />,
  },
  {
    kind: "link",
    id: "users",
    text: "Users",
    href: "#",
    icon: <Users className="h-4 w-4" aria-hidden="true" />,
  },
  {
    kind: "collapsable",
    id: "reports",
    text: "Reports",
    icon: <BarChart3 className="h-4 w-4" aria-hidden="true" />,
    items: [
      { kind: "link", id: "sales", text: "Sales", href: "#" },
      { kind: "link", id: "retention", text: "Retention", href: "#" },
    ],
  },
];

const queryFields: QuerySpecField[] = [
  {
    name: "name",
    label: "Name",
    type: "string",
    ops: ["ilike"],
    placeholder: "Search by name",
  },
  {
    name: "status",
    label: "Status",
    type: "string",
    ops: ["eq"],
    options: [
      { label: "Active", value: "Active" },
      { label: "Pending", value: "Pending" },
      { label: "Disabled", value: "Disabled" },
    ],
  },
];

const columns: RemoteDataTableColumn<UserRow>[] = [
  { id: "name", header: "Name", accessorKey: "name" },
  { id: "role", header: "Role", accessorKey: "role" },
  {
    id: "status",
    header: "Status",
    cell: (row) => (
      <span className="inline-flex rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">
        {row.status}
      </span>
    ),
  },
  { id: "lastActive", header: "Last active", accessorKey: "lastActive" },
];

const DashboardContent = () => {
  const tableState = useRemoteDataTable({
    initialPagination: { pageSize: 5 },
  });
  const { toast } = useNotificationCenter();

  const metrics = useMemo(
    () => [
      { label: "Active users", value: "1,284" },
      { label: "Open tickets", value: "32" },
      { label: "Deployments", value: "14" },
    ],
    [],
  );

  return (
    <div className="space-y-6 p-6">
      <Header
        title="Operations dashboard"
        subtitle="Monitor usage, incidents, and activity"
        actions={[
          {
            id: "notify",
            text: "Send update",
            onClick: () => toast.success("Update sent to your team."),
            color: "primary",
            variant: "contained",
          },
        ]}
        breadcrumbs={[
          { id: "home", text: "Home", link: "#" },
          { id: "ops", text: "Operations", link: "#" },
        ]}
        border
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <ValueCard>
            <div className="grid grid-cols-12 gap-2">
              {metrics.map((metric, index) => (
                <ValueItem key={metric.label} size={4} bordered={index !== 0}>
                  <ValueText label={metric.label} value={metric.value} />
                </ValueItem>
              ))}
            </div>
          </ValueCard>

          <RemoteDataTable
            data={users}
            columns={columns}
            pagination={tableState.pagination}
            onPaginationChange={tableState.onPaginationChange}
            sorting={tableState.sorting}
            onSortingChange={tableState.onSortingChange}
            query={{
              fields: queryFields,
              filters: tableState.filters,
              onFiltersChange: tableState.onFiltersChange,
            }}
          />
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Automation
            </h3>
            <p className="mt-2 text-base font-semibold">Deployment key</p>
            <Board
              content={["ops_live_9fcd2b", "Rotate every 30 days"]}
              spacing={1}
            />
            <Button
              variant="outline"
              className="mt-3 w-full"
              onClick={() => toast("Key copied to clipboard")}
            >
              Copy key
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Activity
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              3 alerts resolved · 2 incidents open
            </p>
            <Button
              variant="ghost"
              className="mt-3 w-full justify-start"
              onClick={() => toast("Opening incidents queue")}
            >
              View incidents
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Example = () => (
  <NotificationCenterProvider>
    <DrawerLayout title="Ops Console" navigation={navigation} clipped>
      <DashboardContent />
    </DrawerLayout>
  </NotificationCenterProvider>
);

export default {
  title: "Examples/Dashboard",
  component: Example,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Example>;

type Story = StoryObj<typeof Example>;

export const Default: Story = {};
