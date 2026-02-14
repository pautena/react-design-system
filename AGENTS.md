# AGENTS.md

<!-- AUTO-GENERATED: run /init to refresh -->

## Project Overview

My custom design system on top of MUI, with a bunch of components to be able to fast prototype new pages and products

## Installation

```bash
yarn install
```

## Commands

### Development

| Command            | Definition                         |
| ------------------ | ---------------------------------- |
| `storybook`        | Start storybook development server |
| `storybook:build`  | Build storybook for deployment     |
| `storybook:deploy` | Deploy storybook to GitHub Pages   |

### Build

| Command | Definition                  |
| ------- | --------------------------- |
| `build` | Build the component library |

### Test

| Command      | Definition              |
| ------------ | ----------------------- |
| `test`       | Run all tests           |
| `test:watch` | Run tests in watch mode |
| `coverage`   | Run test coverage       |

### Lint/Format

| Command    | Definition                            |
| ---------- | ------------------------------------- |
| `lint`     | Run biome linting                     |
| `check`    | Run biome checks                      |
| `check:ts` | Run TypeScript checks                 |
| `format`   | Format code with biome                |
| `prettier` | Format code with prettier (via biome) |

## Workflows

Common development tasks:

- **Run locally**: yarn storybook
- **Run tests**: yarn test
- **Deploy**: yarn storybook:deploy

## Environments

### Local Development

**Prerequisites:**

- Node.js v24+
- Yarn package manager

**Setup:**

```bash
# Clone and install
git clone https://github.com/pautena/react-design-system.git
cd react-design-system
yarn install


```

**Running:**

```bash
yarn storybook          # Start storybook development server
                       # Available at http://localhost:6006
```

**Common tasks:**

```bash
yarn test         # Run tests
yarn build        # Build the component library
yarn lint         # Run linter
yarn check:ts     # Run TypeScript checks
```

## Architecture

**Tech Stack**: TypeScript | React | MUI | Storybook

**Structure**:

```
.
├── src
│   ├── action
│   ├── autocomplete
│   ├── board
│   ├── bootstrap-dialog
│   ├── bullet
│   ├── center-container
│   ├── confirm-dialog
│   ├── content
│   ├── content-placeholder
│   ├── date-range-calendar
│   ├── date-range-picker
│   ├── dialog
│   ├── drawerx
│   ├── expandable-alert
│   ├── form-dialog
│   ├── generators
│   ├── group-value-card
│   ├── header
│   ├── header-layout
│   ├── label
│   ├── list-panel
│   ├── loading-area
│   ├── markdown
│   ├── model-form
│   ├── notification-center
│   ├── object-details
│   ├── placeholder
│   ├── query-container
│   ├── select
│   ├── skeleton-card
│   ├── skeleton-grid
│   ├── tab-card
│   ├── tab-panel
│   ├── tab-provider
│   ├── table-list
│   ├── text-field
│   ├── utils
│   ├── value-base
│   ├── value-boolean
│   ├── value-card
│   ├── value-datetime
│   ├── value-item
│   ├── value-label
│   ├── value-rating
│   ├── value-text
│   └── stories
├── .storybook
├── .github
│   └── workflows
└── dist
```

**API Structure**: RESTful

- Routes: Not applicable (UI Component Library)
- Controllers: Not applicable

**Data Layer**:

- Models: Not applicable (UI Component Library)
- Schemas: Not applicable

**Service Boundaries**:

- UI Components
- Layout Components
- Data Display Components
- Form Components

## Development Setup

**Testing**:

- Framework: Vitest with React Testing Library
- Run: `yarn test`
- Coverage: `yarn coverage`

**Database**:

- Not applicable (UI Component Library)

**Local Services**:

```bash
yarn storybook
```

## Code Quality

**Linting/Formatting**:

```bash
yarn lint
yarn check
yarn check:ts
yarn format
```

**Pre-commit**: Husky pre-commit hooks that run:

- yarn run check
- yarn run check:ts
- yarn run test

**Type Checking**: Strict TypeScript with biome

## Detected Patterns

### Component Structure Patterns

**Standard Component (4-file minimum):**
```
ComponentName/
├── ComponentName.tsx          # Main component
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx     # Tests
└── index.ts                   # Exports
```

**Extended Component (with types/mocks):**
```
ComponentName/
├── ComponentName.tsx
├── ComponentName.types.ts     # Type definitions
├── ComponentName.dummy.ts     # Mock data
├── ComponentName.stories.tsx
├── ComponentName.test.tsx
└── index.ts
```

**Nested Multi-component:**
```
ComponentName/
├── ComponentName.types.ts     # Shared types
├── SubComponent1/
│   ├── SubComponent1.tsx
│   ├── SubComponent1.stories.tsx
│   ├── SubComponent1.test.tsx
│   └── index.ts
└── index.ts                   # Aggregates exports
```

### Naming Conventions

**Folders & Files:**
| Pattern | Usage | Example |
|---------|-------|---------|
| PascalCase | Component directories and files | `TextField/TextField.tsx` |
| kebab-case | Story documentation | `src/stories/data-display.mdx` |
| lowercase | Utility/helper files | `src/tests/testing-library.tsx` |

### Story File Patterns (*.stories.tsx)

**Meta Export Structure:**
```typescript
import type { Meta, StoryObj } from "@storybook/react";
import ComponentName from "./ComponentName";

export default {
  title: "Components/{Category}/{ComponentName}",
  component: ComponentName,
  parameters: { layout: "centered" | "fullscreen" },
} satisfies Meta<typeof ComponentName>;
type Story = StoryObj<typeof ComponentName>;
```

**Story Categories:**
- `Components/Data Display/...` - Board, Header, Label, ValueCard
- `Components/Inputs/...` - Autocomplete, TextField, Select
- `Components/Dialogs/...` - ConfirmDialog, FormDialog
- `Components/Navigation/...` - Drawer components

**Story Variants Pattern:**
```typescript
export const Default: Story = { args: {...} };
export const Loading: Story = { args: { ...Default.args, loading: true } };
export const SizeSmall: Story = { args: { ...Default.args, size: "small" } };
export const ColorPrimary: Story = { args: { preset: "primary" } };
```

**Decorators (reusable in src/storybook.tsx):**
- `withContainer({ width, height, bordered })` - Layout wrapper
- `withNotificationCenter` - Notification context
- `withFullHeight`, `withPadding`, `withLocalizationProvider`

### Export Patterns

**Component index.ts:**
```typescript
// Pattern: Types + dual default export
export type { ComponentProps } from "./Component";
export { default, default as Component } from "./Component";

// With separate types file:
export type { ComponentProps } from "./Component.types";
export { default, default as Component } from "./Component";
```

**Main library export (src/index.ts):**
```typescript
export * from "./ComponentName";
export { default as ComponentName } from "./ComponentName";
```

### Props Documentation

**JSDoc on all props:**
```typescript
export interface ComponentProps {
  /**
   * Content of the component
   */
  text: string;
  /**
   * Color palette variant
   */
  variant?: "primary" | "secondary";
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
  /**
   * Callback function when submit is clicked
   * @param data - The submitted data
   */
  onSubmit?: (data: T) => void;
  /**
   * Message to display when empty
   * @default "No data available"
   */
  emptyMessage?: string;
}
```

**Component-level JSDoc (simple):**
```typescript
/**
 * Compact element to represent a text
 */
export default function Label({ ... }: LabelProps) {...}
```

**Component-level JSDoc (complex with @example):**
```typescript
/**
 * A table component designed for displaying remote/server-side data with built-in
 * pagination, sorting, and filtering capabilities.
 *
 * This component is fully controlled - all state must be managed by parent.
 * Use the `useRemoteDataTable` hook to manage this state.
 *
 * @example
 * ```tsx
 * const tableState = useRemoteDataTable({
 *   initialPagination: { pageSize: 25 }
 * });
 *
 * <RemoteDataTable data={items} columns={columns} {...tableState} />
 * ```
 */
function RemoteDataTable<TData>({ ... }) {...}
```

**Interface-level JSDoc with @template:**
```typescript
/**
 * Props for a generic component.
 *
 * @template T - The type of data being displayed.
 */
interface ComponentProps<T> { ... }
```

**JSDoc Tags Used:**
- `@param` - Only for callback function parameters
- `@default` - For optional props with default values
- `@template` - For generic type parameters
- `@example` - Only for complex components with non-obvious usage
- `@extends` - When extending MUI or other types

### MDX Documentation

**Category Overview Files (src/stories/):**
- `introduction.mdx` - Getting started
- `components.mdx` - Component index
- `{category}.mdx` - Per-category showcases (inputs, data-display, dialogs, tables, navigation, etc.)

**MDX Pattern:**
```mdx
import * as ComponentStories from "../ComponentName/ComponentName.stories";
import { Component } from "../ComponentName";

<Meta title="Components/CategoryName" />

# CategoryName

<Description of={Component} />
<Canvas of={ComponentStories.Default} />
```

### Test Patterns

**Structure:**
```typescript
import { render, screen } from "../tests/testing-library";
import Component from "./Component";

describe("Component", () => {
  const renderComponent = (props) => render(<Component {...props} />);
  
  it("renders the component", () => {
    renderComponent({ text: "lorem" });
    expect(screen.getByText("lorem")).toBeInTheDocument();
  });
  
  it.each([["primary"], ["secondary"]])("variant %s", (variant) => {
    renderComponent({ variant });
    expect(screen.getByRole("label")).toBeVisible();
  });
});
```

**Test utilities:** Centralized in `src/tests/testing-library.tsx`

### Documentation Requirements

**REQUIRED: All new components and props MUST include JSDoc documentation:**

- **Every component** must have a JSDoc comment describing its purpose
  - Simple components: Brief 1-line description
  - Complex components: Multi-line with behavior details + `@example` if usage is non-obvious
- **Every prop/property** in exported interfaces must have a JSDoc comment
  - Brief description of what the prop does
  - Use `@default` tag for optional props with default values
  - Use `@param` for callback function parameters
- **Generic types** must document type parameters with `@template`
- **Extended types** should use `@extends` to document inheritance

**Examples:**
```typescript
// GOOD ✅
export interface ButtonProps {
  /** Label text displayed on the button */
  label: string;
  /** Button color variant
   * @default "primary"
   */
  variant?: "primary" | "secondary";
}

// BAD ❌ - Missing JSDoc
export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}
```

## Dependencies

**Key Libraries**:

- Framework: React, MUI (Material-UI), Storybook
- UI: MUI components, React components
- State: Not applicable (UI Component Library)
- Testing: Vitest, React Testing Library, JSDOM
- Formatting: BiomeJS

**Internal Packages**: Not applicable (Single package project)

## Security

**Auth**: Not applicable (UI Component Library)
**Secrets**: Not applicable (UI Component Library)
**Scanning**: Not applicable (UI Component Library)

## CI/CD

- .github/workflows/ci.yml: Continuous integration tests
- .github/workflows/deploy-storybook.yaml: Deploy storybook to GitHub Pages
- .github/workflows/publish.yml: Publish package to NPM

## Environment

No environment variables specified in the project, only a placeholder .env.example file.

## Editor Setup

This project uses .editorconfig for consistent coding styles.
**Recommended extensions**:

- TypeScript
- React
- Biome
- Storybook

## Git Hooks

Pre-commit hooks with Husky:

- `yarn run check` - Run biome checks
- `yarn run check:ts` - Run TypeScript checks
- `yarn run test` - Run tests

## License

MIT

## Adding New Items

**Add new component**:

1. Create file in `src/`/
2. Add exported component and its stories
3. Update `src/index.ts` with new export
4. Create stories in the same directory
5. Update tests in `src/**/*test.*` or `src/**/*spec.*`

## Documentation

Keep updated when changing:

| Area       | Update               |
| ---------- | -------------------- |
| Components | src/stories/\*.mdx   |
| Build      | package.json scripts |
| Testing    | src/\*test.tsx       |

<!-- END AUTO-GENERATED -->

## Notes

This is an auto-generated file that contains project context for AI agents.

