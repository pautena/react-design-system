import type { Meta, StoryObj } from "@storybook/react";

/**
 * Showcase of shadcn/ui components migrated to Base UI (@base-ui/react)
 *
 * These components demonstrate the new Tailwind-based design system with Base UI headless primitives.
 */
const meta = {
  title: "shadcn/Showcase",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const stories = [
  { label: "Button", path: "/story/shadcn-button--default" },
  { label: "Badge", path: "/story/shadcn-badge--default" },
  { label: "Card", path: "/story/shadcn-card--default" },
  { label: "Checkbox", path: "/story/shadcn-checkbox--default" },
  { label: "Switch", path: "/story/shadcn-switch--default" },
  { label: "Progress", path: "/story/shadcn-progress--default" },
  { label: "Tabs", path: "/story/shadcn-tabs--default" },
  { label: "Accordion", path: "/story/shadcn-accordion--default" },
  { label: "Dialog", path: "/story/shadcn-dialog--default" },
];

export const Overview: Story = {
  render: () => (
    <div className="mx-auto max-w-3xl space-y-4 p-8">
      <h2 className="text-2xl font-bold">shadcn/Base UI stories</h2>
      <p className="text-muted-foreground text-sm">
        Each component now has a dedicated story file for focused development,
        testing, and docs.
      </p>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {stories.map((story) => (
          <li key={story.path}>
            <a
              className="hover:bg-muted inline-flex w-full rounded-md border px-3 py-2 text-sm transition-colors"
              href={`?path=${story.path}`}
            >
              {story.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ),
};
