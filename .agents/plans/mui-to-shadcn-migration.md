# MUI → shadcn/ui Migration Plan v2.0.0
## AI-Ready Design System with MCP Integration

**Status**: 🚧 Active (Phase 3 complete, Phase 4 next)  
**Created**: 2026-02-18  
**Branch**: Feature branches from `main`  
**Target Version**: 2.0.0 (released as 2.0.0-alpha.x tags)  

---

## Overview

Transform the MUI-based design system into an **AI-native, shadcn-powered component library** with full MCP (Model Context Protocol) integration, enabling AI tools to discover, understand, and use components naturally.

### Vision

- **Open Code Philosophy**: Transparent, customizable components
- **MCP Registry**: AI tools can discover and install components
- **NPM Distribution**: Traditional package management
- **shadcn Foundation**: Built on battle-tested shadcn/ui components
- **Lucide Icons**: Modern, tree-shakeable icon system

### Key Decisions

| Aspect               | Choice                               |
| -------------------- | ------------------------------------ |
| **Branch Strategy**  | Feature branches from `main`         |
| **Versioning**       | 2.0.0-alpha.x tags on `main`         |
| **V1 Status**        | Frozen (critical bugs only)          |
| **Styling**          | Tailwind CSS + CSS variables         |
| **Base Components**  | shadcn/ui + Base UI (headless)       |
| **Headless UI**      | Base UI (@base-ui/react)             |
| **Project Layout**   | shadcn Vite-style (`src/components/ui`, `src/hooks`, `src/lib/utils.ts`) |
| **Icons**            | Lucide React                         |
| **Distribution**     | NPM package                          |
| **AI Integration**   | Full MCP registry support            |
| **Breaking Changes** | Fully acceptable                     |
| **Timeline**         | ~5-6 months (flexible)               |

---

## Current State

### Existing MUI Components (46 total)

**Data Display (18)**
- Bullet, Label, Board, ValueText, ValueBoolean, ValueRating, ValueDatetime, ValueLabel, ValueContent, ValueImage, ValueCard, ValueItem, GroupValueCard, SkeletonCard, SkeletonGrid, Placeholder, ContentPlaceholder, Markdown

**Forms (3)**
- TextField, Select, Autocomplete

**Layout (9)**
- Content, Header, HeaderLayout, DrawerContext, Drawer, DrawerLayout, DrawerMain, DrawerContent, DrawerAppBar, DrawerItem, DrawerSubheader

**Dialogs (4)**
- Dialog, BootstrapDialog, ConfirmDialog, FormDialog

**Feedback (2)**
- NotificationCenter, ExpandableAlert

**Navigation (4)**
- TabCard, TabPanel, TabProvider, ListPanel

**Advanced (4)**
- RemoteDataTable, QueryContainer, DateRangeCalendar, DateRangePicker

**Utilities (2)**
- utils (various), tests

### Dependencies to Remove/Update
- `@mui/material` (KEEP at v7.3.8) → Gradually phase out, use alongside Base UI
- `@emotion/react`, `@emotion/styled` → Remove after MUI components migrated
- `@mui/icons-material` → lucide-react
- `@mui/x-date-pickers` (KEEP at v8.27.0) → Optional peer dep for date components

---

## Target State / Specification

### Architecture

```
Your Design System (v2.0.0)
├── Base UI Headless Components (@base-ui/react)
│   ├── Primitives: Button, Input, Checkbox, Radio, Switch, Slider
│   ├── Overlays: Dialog, Popover, Tooltip, Menu
│   ├── Forms: Select, NumberField, Field
│   └── Feedback: Alert, Progress, Accordion
│
├── shadcn/ui Styled Components (installed in src/components/ui/)
│   ├── Styled with Tailwind using Base UI primitives where possible
│   ├── Core: Button, Input, Label, Card
│   ├── Data: Table, Badge, Skeleton, Separator
│   ├── Navigation: Tabs, Sidebar, Breadcrumb, Pagination
│   └── Feedback: Alert, Toast/Sonner, Progress
│
└── Your Custom Components (built on Base UI + shadcn)
    ├── Label (Base UI + Tailwind variants)
    ├── ValueCard (Base UI Dialog + Card + custom logic)
    ├── RemoteDataTable (shadcn Table + TanStack Table)
    ├── NotificationCenter (shadcn Toast/Sonner wrapper)
    └── ... all your domain-specific components
```

### Project Structure (Post-Migration)

```
react-design-system/
├── components.json              # shadcn + MCP config
├── registry.json                # MCP registry definition
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn-generated base components (~30 files)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── bullet/             # custom DS components (migrated from MUI)
│   │   ├── label/
│   │   ├── value-card/
│   │   ├── remote-data-table/
│   │   └── ...
│   ├── hooks/
│   │   └── use-mobile.ts       # shadcn sidebar support hook
│   ├── lib/
│   │   └── utils.ts            # cn() utility (single source)
│   ├── styles/
│   │   └── globals.css         # Tailwind + CSS variables
│   └── index.ts                # Public API exports
├── public/
│   └── r/                      # MCP registry output (auto-generated JSON)
│       ├── index.json
│       ├── label.json
│       └── ...
└── dist/                       # Build output for npm
```

### Structure Rules (Non-Negotiable)

- `src/components/ui/*` is the only location for shadcn-generated base components.
- Never create files in `src/components/ui/*` manually; always generate primitives via `npx shadcn@latest add <component>` (example: `npx shadcn@latest add field`).
- Treat `src/components/ui/*` as low-level primitives (shadcn-managed), not the primary public package API.
- For consumer-facing/public APIs, create wrappers in `src/components/<component-name>/<component-name>.tsx` and export wrappers from `src/index.ts`.
- All newly migrated/custom components must live under `src/components/*`.
- After each component migration is validated, delete the original legacy component folder/files (for example `src/TextField/*`) in the same PR.
- Component folder names and file names must be kebab-case (example: `src/components/value-card/value-card.tsx`).
- `src/hooks/use-mobile.ts` is generated support code for sidebar patterns.
- `src/lib/utils.ts` is the only `cn()` helper file.
- Do not create or reintroduce `src/lib/shadcn/*`.
- Do not create `src/lib/hooks/use-mobile.ts` (legacy path).
- Storybook/docs/examples must import from `@/components/ui/*` and `@/hooks/*`.
- Any component intended for package consumers must be re-exported from `src/index.ts`.
- Consumer-facing docs/examples must show imports from `@pautena/react-design-system`, not internal `@/` paths.

### Component Pattern

All components follow shadcn conventions:

```typescript
// Example: Label component
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
  "inline-flex items-center justify-center rounded-md text-xs font-bold",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        primary: "bg-primary text-primary-foreground",
        // ... other variants
      },
      size: {
        sm: "h-5 px-2",
        md: "h-6 px-2.5",
        lg: "h-7 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface LabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof labelVariants> {
  /** Content of the component */
  text: string
}

export function Label({ text, variant, size, className, ...props }: LabelProps) {
  return (
    <div
      role="status"
      className={cn(labelVariants({ variant, size }), className)}
      {...props}
    >
      {text}
    </div>
  )
}
```

---

## Component-to-shadcn Mapping

| Your Component     | shadcn Base         | Strategy                          | Priority |
| ------------------ | ------------------- | --------------------------------- | -------- |
| Bullet             | Badge               | Minimal badge variant             | P0       |
| Label              | Badge               | Enhance with variants             | P0       |
| ValueText          | Typography          | Custom with Tailwind              | P1       |
| ValueBoolean       | Custom + Icons      | Lucide Check/X icons              | P1       |
| ValueRating        | Custom              | Build with Lucide Star            | P1       |
| ValueDatetime      | Typography          | Custom formatting                 | P1       |
| ValueLabel         | Badge               | Uses Label internally             | P1       |
| ValueContent       | Custom              | Layout wrapper                    | P1       |
| ValueImage         | Avatar              | shadcn Avatar                     | P1       |
| ValueCard          | Card                | Compose with Card                 | P2       |
| ValueItem          | Custom              | Card variant                      | P2       |
| GroupValueCard     | Card                | Multiple ValueCards               | P2       |
| SkeletonCard       | Skeleton + Card     | Combine primitives                | P2       |
| SkeletonGrid       | Skeleton            | Grid layout                       | P2       |
| Board              | Card                | Custom layout with Card           | P2       |
| TabCard            | Tabs + Card         | Compose primitives                | P2       |
| TextField          | Input + Field       | Use Field wrapper pattern         | P3       |
| Select             | Select              | Extend shadcn Select              | P3       |
| Autocomplete       | Combobox            | Use shadcn Combobox               | P3       |
| Content            | Custom              | Container component               | P4       |
| ContentPlaceholder | Empty               | shadcn Empty component            | P4       |
| Header             | Custom              | Build with Tailwind               | P4       |
| HeaderLayout       | Custom              | Layout composition                | P4       |
| Placeholder        | Empty               | Empty state component             | P4       |
| DrawerContext      | Context             | React Context                     | P4       |
| Drawer             | Sheet               | shadcn Sheet                      | P4       |
| DrawerLayout       | Sheet + Sidebar     | Complex composition               | P4       |
| DrawerMain         | Custom              | Layout component                  | P4       |
| DrawerContent      | Custom              | Content wrapper                   | P4       |
| DrawerAppBar       | Custom              | Header component                  | P4       |
| DrawerItem         | Custom              | List item                         | P4       |
| DrawerSubheader    | Custom              | List subheader                    | P4       |
| Dialog             | Dialog              | Extend shadcn Dialog              | P5       |
| BootstrapDialog    | Dialog              | Custom Dialog variant             | P5       |
| ConfirmDialog      | AlertDialog         | Use shadcn AlertDialog            | P5       |
| FormDialog         | Dialog              | Dialog + form handling            | P5       |
| NotificationCenter | Sonner              | Wrap Sonner toast                 | P5       |
| ExpandableAlert    | Alert + Collapsible | Compose primitives                | P5       |
| RemoteDataTable    | Table               | shadcn Table + TanStack           | P6       |
| ListPanel          | Custom              | List container                    | P6       |
| QueryContainer     | Custom              | Query state wrapper               | P6       |
| TabPanel           | Tabs                | shadcn Tabs                       | P6       |
| TabProvider        | Context             | Tabs context                      | P6       |
| DateRangeCalendar  | Calendar            | Keep MUI (optional)               | P7       |
| DateRangePicker    | DatePicker          | Keep MUI (optional)               | P7       |

**Priority Legend**: P0=Pilot | P1=Phase 2 | P2=Phase 3 | P3=Phase 4 | P4=Phase 5 | P5=Phase 6 | P6=Phase 7 | P7=Deferred

---

## Icon Migration Reference

| MUI Icon          | Lucide Icon   | Usage                |
| ----------------- | ------------- | -------------------- |
| CheckIcon         | Check         | ValueBoolean         |
| CloseIcon         | X             | ValueBoolean, Dialog |
| ExpandMoreIcon    | ChevronDown   | ExpandableAlert      |
| ExpandLessIcon    | ChevronUp     | ExpandableAlert      |
| ContentCopyIcon   | Copy          | Board                |
| ReportProblemIcon | AlertTriangle | HeaderLayout         |
| MenuIcon          | Menu          | Navigation           |
| SearchIcon        | Search        | Search components    |
| MoreVertIcon      | MoreVertical  | Actions menus        |

**Full icon browser**: https://lucide.dev/icons/

---

## Headless UI Strategy: Base UI

### Why Base UI over Radix UI?

**Base UI** (`@base-ui/react` v1.2.0) is the official headless component library from MUI:

- **From MUI Team**: Same team behind Material UI, ensuring quality & longevity
- **Modern Architecture**: Built with React 19 patterns, Floating UI integration
- **Composability First**: Designed for flexibility without visual opinions
- **Better Alignment**: Natural fit alongside existing MUI dependencies
- **Active Development**: Recently released v1.0.0 (Dec 2025), actively maintained

### Base UI Components Available

Base UI provides headless primitives for:

**Form Controls**:
- Button, Checkbox, Radio, RadioGroup, Switch, Slider, NumberField, Field

**Overlays**:
- Dialog, Popover, Tooltip, Menu (Dropdown, Context)

**Data Display**:
- AlertDialog, Progress, Accordion, Collapsible

**Navigation**:
- Tabs, Breadcrumbs, Pagination (planned)

### Integration Strategy

1. **Phase 0 Fix**: Replace Radix UI primitives with Base UI equivalents
2. **shadcn Components**: Adapt shadcn components to use Base UI as headless layer
3. **Custom Components**: Build on Base UI + Tailwind for full control
4. **Gradual Adoption**: Start with simple components, expand as needed

### Migration Path (Radix → Base UI)

| Radix Component | Base UI Equivalent | Status | Migrated In |
|-----------------|-------------------|--------|-------------|
| `@radix-ui/react-dialog` | `@base-ui/react/Dialog` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-popover` | `@base-ui/react/Popover` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-tooltip` | `@base-ui/react/Tooltip` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-checkbox` | `@base-ui/react/Checkbox` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-switch` | `@base-ui/react/Switch` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-tabs` | `@base-ui/react/Tabs` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-accordion` | `@base-ui/react/Accordion` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-progress` | `@base-ui/react/Progress` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-collapsible` | `@base-ui/react/Collapsible` | ✅ Migrated | Phase 0 |
| `@radix-ui/react-radio-group` | `@base-ui/react/RadioGroup` | ⏸️ Deferred | Phase 1+ |
| `@radix-ui/react-select` | `@base-ui/react/Select` | ⏸️ Deferred | Phase 1+ |
| `@radix-ui/react-dropdown-menu` | `@base-ui/react/Menu` | ⏸️ Deferred | Phase 1+ |
| `@radix-ui/react-context-menu` | `@base-ui/react/Menu` | ⏸️ Deferred | Phase 1+ |
| `@radix-ui/react-menubar` | `@base-ui/react/Menu` | ⏸️ Deferred | Phase 1+ |

**Keep permanently** (no Base UI equivalent or utility):
- `@radix-ui/react-avatar` → Keep (no Base UI equivalent)
- `@radix-ui/react-separator` → Keep (no Base UI equivalent)
- `@radix-ui/react-label` → Keep (no Base UI equivalent)
- `@radix-ui/react-slot` → Keep (utility for composition, not a component)
- `react-day-picker` → Keep (calendar component)
- `cmdk` → Keep (command palette)
- `sonner` → Keep (toast notifications)

**Phase 0 Results**:
- ✅ 9 components migrated to Base UI
- ✅ 9 Radix packages removed
- ⏸️ 5 complex components deferred (RadioGroup, Select, Menus)
- 🔒 4 components kept by design (Avatar, Separator, Label, Slot)

---

## Workflow

### Per-Component Migration Process

For each component:

#### **1. Analyze Current Component**
- Review MUI dependencies
- Document all props
- Review tests
- Review stories
- Note complex logic

#### **2. Design shadcn Implementation**
- Identify shadcn base component(s)
- Plan variant structure with `cva()`
- Design prop interface
- Plan composition strategy

#### **3. Implement New Version**
Preferred path: use the local OpenCode slash command to scaffold the wrapper pattern.

```bash
/create-component {component-name} "optional context: variants, behavior, accessibility, usage"
```

The command creates/updates the standard files under `src/components/{component-name}/` and updates `src/index.ts` export wiring. Then refine implementation details as needed for migrated behavior.

```typescript
// Structure:
// src/components/{component-name}/{component-name}.tsx
// - Use Tailwind classes
// - Use cva() for variants
// - Use cn() for className merging
// - Maintain TypeScript types
// - Add JSDoc documentation
```

#### **4. Add Registry Metadata (Optional)**
Add JSDoc metadata to component for registry auto-generation:
```typescript
/**
 * Compact element to represent a text
 * 
 * @registry-category Data Display
 * @registry-dependencies badge
 * @registry-type registry:ui
 */
export function Label({ text, variant, size, className, ...props }: LabelProps) {
  // ... component code
}
```

**Note**: Registry JSON will be auto-generated by `yarn build:registry` script

#### **5. Update/Create Tests**
```typescript
// src/components/{component-name}/{component-name}.test.tsx
import { render, screen } from "@testing-library/react";
import { ComponentName } from "./component-name";

describe("ComponentName", () => {
  it("renders correctly", () => {
    render(<ComponentName />);
    // assertions
  });
  
  // Test all variants
  // Test accessibility
  // Test user interactions
});
```

#### **6. Update/Create Stories**
```typescript
// src/components/{component-name}/{component-name}.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./component-name";

const meta = {
  title: "Components/Category/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
export const AllVariants: Story = { render: () => <></> };
export const DarkMode: Story = { /* ... */ };
```

#### **7. Update Exports**
```typescript
// src/components/{component-name}/index.ts
export { ComponentName, type ComponentNameProps } from "./component-name"
export { default } from "./component-name"

// src/index.ts
export * from "./components/{component-name}"
```

Required: if a component is meant to be used by package consumers, `src/index.ts` must be updated so it is importable from `@pautena/react-design-system`.

#### **8. Remove Legacy Source Files (Required)**

After the new wrapper component is working and wired in exports/tests/stories:

- Delete original legacy files/folders for that component (for example `src/TextField/*`, `src/Select/*`, `src/Autocomplete/*`).
- Update all internal imports to the migrated path (`src/components/<component-name>/*`) or public package entrypoint.
- Confirm no remaining references to deleted legacy paths.

#### **9. Build Registry**
```bash
yarn build:registry
```

**What this does:**
- Scans `src/components/**/*.tsx` for exported components
- Extracts JSDoc metadata (@registry-* tags)
- Analyzes imports to detect npm dependencies
- Detects internal component dependencies (registryDependencies)
- Generates `registry/{component-name}.json` for each component
- Updates `registry.json` manifest with all items

**Output:** `public/r/{component-name}.json` files (auto-generated, never manually edited)

#### **10. Test & Validate**
- [ ] Storybook stories render
- [ ] All tests pass
- [ ] Dark mode works
- [ ] Accessibility maintained
- [ ] Build succeeds
- [ ] Registry JSON generated

#### **11. Document Migration**
Update `MIGRATION.md` with:
- Component status → ✅ Complete
- Breaking changes
- Migration notes

#### **12. Commit**
```bash
git add .
git commit -m "feat(component-name): migrate from MUI to shadcn/ui

- Description of changes
- What shadcn components used
- New features/improvements
- MCP registry entry created

BREAKING CHANGE:
- List all breaking changes
"
```

---

## Execution Phases

### Phase 0: Foundation & shadcn Setup ✅ COMPLETE

**Agent**: @planner (spec only, no implementation)  
**Skills**: None (infrastructure setup)  
**Branch**: `feat/phase-0-foundation`  
**Status**: Completed locally (pending PR merge)

#### Tasks
- [x] Create feature branch: `git checkout -b feat/phase-0-foundation`
- [x] Install core dependencies (Tailwind, CVA, Lucide)
- [x] Initialize shadcn/ui (`npx shadcn@latest init`)
- [x] Install ~30 shadcn base components
- [x] **Migrate 9 shadcn components from Radix UI to Base UI**
- [x] **Restore MUI versions to v7.3.8 (material), v8.27.0 (date-pickers)**
- [x] Configure Tailwind CSS with theme
- [x] Create CSS variables theme system
- [x] Keep Vite in library mode (do not switch to app-template config)
- [x] Update Storybook configuration
- [x] Create `registry.json` manifest (empty items array)
- [x] Add `build:registry` script to package.json
- [x] Test registry build: `yarn build:registry`
- [x] Update package.json (v2.0.0-alpha.0)
- [x] Create documentation structure (MIGRATION.md, etc.)
- [x] Test foundation (build, storybook, tests)
- [x] All checks passing (lint, check, check:ts, build, test)
- [x] Normalize structure to shadcn Vite-style paths (`src/components/ui`, `src/hooks`, `src/lib/utils.ts`)
- [x] Remove legacy path (`src/lib/shadcn/*`)
- [ ] Update PR #637 with all Phase 0 changes
- [ ] Merge PR to `main` after review
- [ ] Create git tag `2.0.0-alpha.0` on `main`

**Base UI Migration Status**:
- ✅ shadcn base components regenerated with Base UI style in `src/components/ui/*`
- ✅ No runtime Radix dependency required for current shadcn base layer

**Deliverables**:
- ✅ Working shadcn/ui setup with Base UI as headless layer
- ✅ ~30 base components installed, 9 migrated to Base UI
- ✅ MCP registry framework
- ✅ Documentation structure (MIGRATION.md)
- ✅ Existing MUI components still work
- ✅ Base UI @1.2.0 installed and working
- ✅ MUI v7.3.8 + date-pickers v8.27.0 restored
- ✅ All tests passing (425 passed, 3 skipped)
- ✅ Zero TypeScript errors

**Files Created**:
```
components.json          # shadcn + MCP config (auto-generated by init)
registry.json            # MCP registry manifest (manual, starts empty)
tailwind.config.ts       # Tailwind configuration
postcss.config.js        # PostCSS configuration
src/styles/globals.css   # CSS variables theme
src/lib/utils.ts         # cn() utility
src/components/ui/*      # shadcn base components (~30 files)
src/hooks/use-mobile.ts  # shadcn sidebar hook
public/r/                # Registry output directory (auto-generated)
MIGRATION.md             # Migration documentation
```

**Registry Setup:**
- `registry.json` - Source of truth (manually maintained)
- `yarn build:registry` - Generates `public/r/*.json` files automatically
- CI/CD runs build:registry before deployment

---

### ✓ Phase 1: Pilot Components 🧪

**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook

#### Components (2)
1. **Bullet** (simplest - visual indicator)
   - Base: shadcn Badge
   - Complexity: Low

2. **Label** (badge/tag component)
   - Base: shadcn Badge
   - Complexity: Low

#### Tasks Per Component
- [ ] Create feature branch: `git checkout -b feat/{component-name}`
- [ ] Analyze current MUI implementation
- [ ] Design shadcn-based implementation
- [ ] Implement component with cva() variants
- [ ] Delete original legacy files for the migrated component
- [ ] Add entry to `registry.json` items array
- [ ] Write/update tests
- [ ] Create/update Storybook stories
- [ ] Update exports
- [ ] Build registry: `yarn build:registry`
- [ ] Validate (tests, storybook, accessibility)
- [ ] Document in MIGRATION.md
- [ ] Create PR to `main`
- [ ] Merge to `main` after review
- [ ] Commit changes

**Validation Checklist**:
- [ ] Visual parity with MUI versions
- [ ] All tests passing
- [ ] Storybook stories work (light + dark mode)
- [ ] Accessibility maintained (ARIA, keyboard nav)
- [ ] Type safety preserved
- [ ] Build succeeds
- [ ] Registry JSON generated correctly
- [ ] MCP discoverable (if testable)
- [ ] PR merged to `main`
- [ ] Create git tag `2.0.0-alpha.1` on `main` when complete

**Decision Point**: Stop here and review before proceeding:
- Are shadcn components working well?
- Is the cva() pattern comfortable?
- Build pipeline smooth?
- MCP registry generating correctly?
- Development experience satisfactory?

---

### ✓ Phase 2: Simple Data Display 📊

**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook
**Status**: ✅ Complete (2026-02-21)

#### Components (8)
1. ValueText - Typography → Tailwind
2. ValueBoolean - Icons → Lucide Check/X
3. ValueDatetime - Typography + date-fns
4. Markdown - Typography/Link → Tailwind
5. ValueLabel - Uses Label internally
6. ValueRating - Build with Lucide Star
7. ValueContent - Layout wrapper
8. ValueImage - shadcn Avatar

**Notes**:
- ValueBoolean: First use of Lucide icons (Check, X)
- ValueRating: Custom component with star rendering
- ValueLabel: Test internal component dependency
- Merge all PRs to `main` before tagging
- Create git tag `2.0.0-alpha.2` on `main` when complete

---

### ✓ Phase 3: Cards & Complex Display 🎴

**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook

#### Components (7)
1. ValueCard - Compose shadcn Card + layout
2. ValueItem - Card variant
3. GroupValueCard - Multiple ValueCards
4. SkeletonCard - Skeleton + Card
5. SkeletonGrid - Skeleton grid layout
6. Board - Card with copy functionality (Lucide Copy icon)
7. TabCard - Tabs + Card composition

**Notes**:
- Board: Uses Lucide Copy icon
- Test card layouts at various breakpoints
- Ensure loading states work
- Merge all PRs to `main` before tagging
- Create git tag `2.0.0-alpha.3` on `main` when complete

---

### ✓ Phase 4: Form Components 📝

**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook, code-react-tanstack-forms

#### Components (3)
1. **TextField**
   - Base: shadcn Input + Field
   - Loading/fetching states with Lucide Loader2
   - Helper text, errors
   - Multiple variants

2. **Select**
   - Base: shadcn Select
   - Custom styling
   - Multi-select support (if needed)

3. **Autocomplete** - Most complex form component
   - Base: shadcn Combobox
   - Async loading
   - Multi-select
   - Custom rendering

**Notes**:
- All form validation states must work
- Keyboard navigation perfect
- Loading states smooth
- Test with form libraries (React Hook Form, TanStack Form)
- Merge all PRs to `main` before tagging
- Create git tag `2.0.0-alpha.4` on `main` when complete

---

### ✓ Phase 5: Layout & Navigation 🏗️

**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook, code-react-tanstack-router

#### Simple Layouts (5 components)
1. Content - Container component
2. ContentPlaceholder - shadcn Empty
3. Header - Custom with Tailwind
4. HeaderLayout - Layout + Lucide AlertTriangle
5. Placeholder - Empty state

#### Complex Navigation - Drawerx System (8 components)
- DrawerContext → React Context
- Drawer → shadcn Sheet component
- DrawerLayout → Custom layout with Sheet
- DrawerMain → Layout component
- DrawerContent → Content wrapper
- DrawerAppBar → Custom app bar
- DrawerItem → List item
- DrawerSubheader → List subheader

**Strategy**: Treat Drawerx as mini-project
- Map MUI Drawer API to shadcn Sheet
- May require API changes (breaking OK)
- Test thoroughly (complex state management)
- Consider using shadcn Sidebar alongside Sheet
- Merge all PRs to `main` before tagging
- Create git tag `2.0.0-alpha.5` on `main` when complete

---

### ✓ Phase 6: Dialogs & Overlays 💬

**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook

#### Components (6)
1. Dialog → shadcn Dialog primitive
2. BootstrapDialog → Custom Dialog variant
3. ConfirmDialog → shadcn AlertDialog
4. FormDialog → Dialog + form handling
5. NotificationCenter → Sonner (install: `yarn add sonner`)
6. ExpandableAlert → Alert + Collapsible

**Notes**:
- NotificationCenter: Complete rework with Sonner
- Keep same hook API (`useNotification`)
- Test modal focus traps
- Test keyboard navigation (Escape, Tab)
- Merge all PRs to `main` before tagging
- Create git tag `2.0.0-alpha.6` on `main` when complete

---

### ✓ Phase 7: Tables & Advanced 🗂️

**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook, code-react-tanstack-query

#### Components (5)
1. **RemoteDataTable** - Most complex component
   - Keep TanStack Table logic (unchanged)
   - Replace MUI Paper → Tailwind div
   - Replace MUI Table components → shadcn Table
   - RemoteDataTablePagination → shadcn Pagination
   - RemoteDataTableQueryBuilder → Custom filter UI
   - Props and APIs can be redesigned freely
   - Test sorting, pagination, filtering thoroughly

2. ListPanel - List container
3. QueryContainer - Query state wrapper
4. TabPanel - shadcn Tabs
5. TabProvider - Tabs context

**Success Criteria**:
- All RemoteDataTable features work
- Sorting, pagination, filtering perfect
- Performance maintained
- Breaking API changes accepted when needed
- Merge all PRs to `main` before tagging
- Create git tag `2.0.0-alpha.7` on `main` when complete

---

### Phase 8: Optional Components 🗓️
**Status**: Deferred to v2.1 or v3.0

#### Components (2)
1. DateRangeCalendar
2. DateRangePicker

**Options**:
- **Option A (Recommended)**: Keep as MUI components, mark peer dep optional
- **Option B**: Migrate to react-day-picker + shadcn pattern
- **Option C**: Use shadcn Calendar + DatePicker

**Decision**: Defer to post-v2.0.0. Keep optional peer dependency on `@mui/x-date-pickers`.

---

### Phase 9: Examples & AI Training Data 🤖

**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook, code-react-tanstack-router

**Purpose**: Create comprehensive, real-world examples that demonstrate component usage patterns for both human developers and AI tools. These examples serve as training data for AI code generation.

#### Week 1: Build Example Applications

**Example 1: Dashboard**
- [ ] Create `examples/dashboard/` directory
- [ ] Build dashboard layout with:
  - Header with navigation
  - Sidebar with DrawerLayout
  - RemoteDataTable with live data
  - ValueCard grid showing metrics
  - Board components for KPIs
  - NotificationCenter integration
- [ ] Include README.md with:
  - Setup instructions
  - Component usage patterns
  - Code snippets with annotations
  - AI-friendly descriptions

**Example 2: Form Wizard**
- [ ] Create `examples/form-wizard/` directory
- [ ] Build multi-step form with:
  - TextField, Select, Autocomplete
  - ConfirmDialog for actions
  - FormDialog for sub-forms
  - TabCard for step navigation
  - Loading states and validation
- [ ] Include README.md with patterns

**Example 3: Data Explorer**
- [ ] Create `examples/data-explorer/` directory
- [ ] Build data browsing interface with:
  - RemoteDataTable with filters
  - QueryContainer for state
  - ExpandableAlert for tips
  - ValueCard detail views
  - ListPanel for navigation
- [ ] Include README.md with patterns

#### Week 2: AI Training Documentation

**Task 1: Component Usage Guide**
- [ ] Create `docs/AI-COMPONENT-GUIDE.md`
- [ ] For each component, document:
  - Common use cases with code examples
  - Props combinations for typical scenarios
  - Anti-patterns to avoid
  - Integration patterns with other components
  - Accessibility considerations
  - Performance tips
- [ ] Use structured format:
  ```markdown
  ## ComponentName
  
  **Purpose**: Brief description
  
  **Common Patterns**:
  ### Pattern 1: [Name]
  ```tsx
  <ComponentName prop1="value" prop2="value">
    // Example usage with annotations
  </ComponentName>
  ```
  **When to use**: Description
  **Avoid**: Anti-pattern description
  ```

**Task 2: Composition Patterns**
- [ ] Create `docs/AI-COMPOSITION-PATTERNS.md`
- [ ] Document common component compositions:
  - Card + ValueCard + Badge patterns
  - Form layouts with TextField + Select
  - Data displays with Table + Pagination
  - Navigation with Drawer + Tabs
  - Dialog flows
- [ ] Include complete working examples
- [ ] Add "AI Prompt Examples" section showing how to request these patterns

**Task 3: llms.txt AI Context File**
- [ ] Create/update `llms.txt` in repository root
- [ ] Include:
  - Component catalog with descriptions
  - Usage patterns summary
  - Example code snippets
  - Registry URLs
  - Common composition patterns
  - TypeScript types reference
- [ ] Follow [llms.txt specification](https://llmstxt.org/)
- [ ] Reference from README.md

**Task 4: MCP Integration Examples**
- [ ] Create `docs/AI-MCP-USAGE.md`
- [ ] Document how AI tools can:
  - Search the registry
  - Install components
  - Generate code using components
  - Compose complex UIs
- [ ] Include example AI prompts:
  ```
  "Create a dashboard using @pautena components with:
  - Header with navigation
  - Data table showing users
  - Metric cards for stats"
  ```
- [ ] Add screenshots of AI interactions (if available)

#### Deliverables

**Example Applications:**
```
examples/
├── dashboard/
│   ├── src/
│   ├── README.md
│   └── package.json
├── form-wizard/
│   ├── src/
│   ├── README.md
│   └── package.json
└── data-explorer/
    ├── src/
    ├── README.md
    └── package.json
```

**AI Documentation:**
```
docs/
├── AI-COMPONENT-GUIDE.md       # Component usage patterns
├── AI-COMPOSITION-PATTERNS.md  # Common compositions
├── AI-MCP-USAGE.md             # MCP integration guide
└── examples/                   # Code snippets
llms.txt                        # AI context file (root)
```

**Success Criteria:**
- [ ] 3 working example applications
- [ ] All examples runnable with `yarn install && yarn dev`
- [ ] Comprehensive AI documentation
- [ ] llms.txt file complete
- [ ] Examples demonstrate 80%+ of components
- [ ] Code is well-commented and annotated
- [ ] README files are AI-friendly (structured, clear)
- [ ] Can generate valid code snippets from examples

**Integration:**
- [ ] Link examples from main README.md
- [ ] Add examples to Storybook navigation
- [ ] Deploy examples alongside Storybook (optional)
- [ ] Reference in MCP registry metadata

---

### Phase 10: Polish & Launch 🚀

**Agent**: @planner (coordination) + @react-developer (implementation)  
**Skills**: All relevant skills

#### Week 1: Code Cleanup
- [ ] Remove ALL MUI imports
- [ ] Remove MUI from dependencies (keep optional peer deps if needed)
- [ ] Clean up unused utilities
- [ ] Verify no dead code
- [ ] Run linter on entire codebase
- [ ] Fix all TypeScript strict mode issues
- [ ] Review all TODOs/FIXMEs

#### Week 2: Testing
- [ ] Run full test suite
- [ ] Visual regression testing (manual or Chromatic)
- [ ] Accessibility audit (WAVE, axe DevTools)
- [ ] Test all components in Storybook (light + dark)
- [ ] Performance benchmarks
- [ ] Bundle size analysis (compare to v1)
- [ ] Test in sample consumer app
- [ ] Cross-browser testing

#### Week 3: Documentation
- [ ] Update README.md for v2
- [ ] Complete MIGRATION.md with consumer guide
- [ ] Update all component JSDoc
- [ ] Update Storybook docs pages
- [ ] Create CHANGELOG.md entry (full v2 changes)
- [ ] Update package.json metadata
- [ ] Verify example projects work
- [ ] Verify AI documentation complete
- [ ] Record demo videos (optional)

#### Week 4: Release Preparation
- [ ] Create feature branch: `git checkout -b release/v2.0.0`
- [ ] Bump version to `2.0.0` in package.json
- [ ] Final build test
- [ ] Test npm publish (dry run: `npm publish --dry-run`)
- [ ] Create GitHub release notes
- [ ] Create PR to `main`
- [ ] Merge PR after final review
- [ ] Publish to npm (`npm publish`)
- [ ] Tag release `2.0.0` on `main`
- [ ] Deploy Storybook (same URL, replaces v1)
- [ ] Update GitHub README
- [ ] Announce release (Twitter, Discord, etc.)

---

## Status Table

| Phase | Status      | Components           | Started    | Completed  | Notes |
| ----- | ----------- | -------------------- | ---------- | ---------- | ----- |
| 0     | ✅ Complete | Foundation        | 2026-02-18 | 2026-02-18 | Base UI migration done, Tailwind fixed, shadcn moved to `src/components/ui` |
| 1     | ✅ Complete | Bullet, Label        | 2026-02-20 | 2026-02-20 | Migrated to shadcn Badge + registry entries |
| 2     | ✅ Complete | 8 components         | 2026-02-21 | 2026-02-21 | Migrated to shadcn/Tailwind wrappers + registry entries |
| 3     | ✅ Complete | 7 components         | 2026-02-21 | 2026-02-21 | Migrated card/display set to shadcn/Tailwind wrappers + registry entries |
| 4     | ✅ Complete | 3 components         | 2026-02-21 | 2026-02-21 | Migrated TextField, Select, and Autocomplete to shadcn/Tailwind wrappers + registry entries |
| 5     | ✅ Complete | 13 components        | 2026-02-22 | 2026-02-22 | Migrated content/header/placeholder + Drawerx system to `src/components/*` wrappers |
| 6     | ✅ Complete | 6 components         | 2026-02-22 | 2026-02-22 | Dialogs/overlays migrated |
| 7     | ✅ Complete | 5 components         | 2026-03-01 | 2026-03-01 | Tables + query components migrated |
| 8     | ⏸️ Deferred | 2 components         | -          | -          | -     |
| 9     | ⏳ Planned  | Examples & AI docs   | -          | -          | -     |
| 10    | ⏳ Planned  | Polish, release      | -          | -          | -     |

**Legend**: ⏳ Planned | 🚧 In Progress | ✅ Complete | ⏸️ Deferred | ❌ Blocked

---

## Progress Log

### 2026-02-20
- ✅ Phase 1 completed
  - Migrated `Bullet` from MUI Badge to shadcn Badge + cva variants
  - Migrated `Label` from MUI Box to Tailwind + cva variants
  - Added `bullet` and `label` entries to `registry.json`
  - Added/updated tests and stories for migrated components
  - Full test suite passing (426 passed, 3 skipped)

### 2026-02-21
- ✅ Phase 4 completed
  - Migrated `TextField`, `Select`, and `Autocomplete` to shadcn/Tailwind wrappers under `src/components/*`
  - Added corresponding entries to `registry.json`
  - Generated registry artifacts via `npm run build:registry`
  - Full test suite passing (465 passed, 3 skipped)

- ✅ Phase 3 completed
  - Migrated `ValueCard`, `ValueItem`, `GroupValueCard`, `SkeletonCard`, `SkeletonGrid`, `Board`, and `TabCard` to shadcn/Tailwind wrappers
  - Added corresponding entries to `registry.json`
  - Generated registry artifacts via `npm run build:registry`
  - Full test suite passing (466 passed, 3 skipped)

- ✅ Phase 2 completed
  - Migrated `ValueText`, `ValueBoolean`, `ValueDatetime`, `Markdown`, `ValueLabel`, `ValueRating`, `ValueContent`, and `ValueImage` from MUI to shadcn/Tailwind wrappers
  - Added corresponding entries to `registry.json`
  - Generated registry artifacts via `npm run build:registry`
  - Full test suite passing (446 passed, 3 skipped)

### 2026-02-22
- ✅ Phase 5 completed
  - Migrated `Content`, `ContentPlaceholder`, `Header`, `HeaderLayout`, and `Placeholder` to wrappers under `src/components/*`
  - Migrated Drawerx system (`DrawerContext`, `Drawer`, `DrawerLayout`, `DrawerMain`, `DrawerContent`, `DrawerAppBar`, `DrawerItem`, `DrawerSubheader`) under `src/components/*`
  - Deleted legacy folders under `src/Content*`, `src/Header*`, `src/Placeholder`, and `src/Drawerx`
  - Updated `src/index.ts` exports and docs/story imports to new paths
  - Added phase-5 registry entries (`content`, `content-placeholder`, `header`, `header-layout`, `placeholder`, `drawer-layout`)
  - Full test suite passing (422 passed)
- ✅ Phase 6 completed

### 2026-03-01
- ✅ Phase 7 completed
  - Migrated `RemoteDataTable`, `ListPanel`, `QueryContainer`, `TabPanel`, and `TabProvider` to `src/components/*`
  - Reworked RemoteDataTable to shadcn Table/Popover + Tailwind pagination
  - Updated registry entries and regenerated registry artifacts
  - Full test suite passing (381 passed)

### 2026-02-18
- ✅ Migration plan created
- ✅ Updated to feature branch workflow (branch from `main`, merge via PRs)
- ✅ Alpha tags created on `main` after phase merges
- ✅ Documented automated registry system (shadcn build command)
- ✅ Created registry-automation-summary.md guide
- ✅ Added Phase 9: Examples & AI Training Data
  - 3 example applications (Dashboard, Form Wizard, Data Explorer)
  - 4 AI documentation files (Component Guide, Composition Patterns, MCP Usage, llms.txt)
  - AI-friendly code examples and prompts
- ✅ Created phase-9-examples-summary.md detailed guide
- ✅ Removed all timeline/duration estimates (work at your own pace)
- ✅ **Consolidated all plan files into single document**
  - Expanded Appendix A with detailed registry automation guide
  - Added Appendix H with Phase 9 comprehensive details
  - Deleted redundant plan files (registry-automation-summary.md, phase-9-examples-summary.md)
  - Single source of truth: `mui-to-shadcn-migration.md`
- 🔄 **Phase 0: Foundation & shadcn Setup - IN PROGRESS (FIXES NEEDED)**
  - Installed Tailwind CSS, CVA, Lucide React, Sonner
  - Initialized shadcn/ui with ~33 base components (using Radix UI)
  - Configured Tailwind with CSS variables theme (light/dark)
  - Created MCP registry framework (registry.json)
  - Added build:registry script for automated registry generation
  - Updated package.json to v2.0.0-alpha.0
  - Created MIGRATION.md documentation
  - Branch: feat/phase-0-foundation
  - Commits: 59f5ab4, 564bcbc
  - PR: #637 - https://github.com/pautena/react-design-system/pull/637
  - **ISSUES DISCOVERED**:
    - ❌ MUI versions downgraded (v7.3.8→v6.0.0 material, v8.27.0→v7.0.0 date-pickers)
    - ❌ Using Radix UI instead of Base UI (@base-ui/react)
  - **REQUIRED FIXES**:
    1. Restore MUI versions: @mui/material ^7.3.8, @mui/x-date-pickers ^8.27.0
    2. Replace Radix UI packages with Base UI (@base-ui/react)
    3. Update shadcn components to use Base UI primitives
    4. Re-test build, storybook, tests
    5. Update PR #637 with fixes
- ⏳ Next: Complete Phase 0 fixes, merge PR, then start Phase 1
- ✅ **Phase 0 fixes completed and normalized to recommended shadcn layout**
  - Regenerated shadcn components using Base UI style into `src/components/ui/*`
  - Moved generated hook to `src/hooks/use-mobile.ts`
  - Updated `components.json` aliases to recommended structure:
    - `ui`: `@/components/ui`
    - `components`: `@/components`
    - `hooks`: `@/hooks`
    - `lib`: `@/lib`
  - Updated Storybook docs/stories to import from `@/components/ui/*`
  - Removed legacy `src/lib/shadcn/*` path to avoid dual sources of truth

---

## Notes

### Decisions Made

#### 1. shadcn/ui Base Components (Approved)
Selected categories:
- ✅ Core UI (Button, Input, Label, Card)
- ✅ Forms (Select, Checkbox, Radio, Switch, Textarea)
- ✅ Data Display (Table, Badge, Skeleton, Separator)
- ✅ Overlays (Dialog, Sheet, Popover, Tooltip)
- ✅ Feedback (Alert, Toast/Sonner, Progress, Spinner)
- ✅ Navigation (Tabs, Sidebar, Breadcrumb, Pagination)
- ❌ Advanced (Calendar, DatePicker, Combobox) - Selected components only

**Total**: ~30 shadcn base components to install

#### 2. MCP Integration Approach (Approved)
**Full MCP integration** with:
- `components.json` configuration
- `registry.json` manifest
- Auto-generated component registry files
- Hosted at `https://react-design-system.pautena.com/registry/`

AI tools can:
```
"Show me components from @pautena registry"
"Add @pautena/value-card to my project"
"Build a dashboard with @pautena/remote-data-table"
```

#### 3. Distribution Model (Approved)
**NPM package** (traditional approach)
- Install via `yarn add @pautena/react-design-system`
- Import components and styles
- Requires Tailwind CSS in consumer app
- MCP registry as bonus (AI discoverability)

#### 4. Icon Strategy (Approved)
**Lucide React** (shadcn standard)
- ~1,500 icons, excellent tree-shaking
- Aligns with shadcn ecosystem
- Migration table created for MUI → Lucide mapping

#### 5. Migration Strategy (Approved)
**Gradual/Incremental**
- Both systems coexist during transition
- Component-by-component migration
- Low risk, allows testing each component

#### 6. Breaking Changes (Approved)
**Fully acceptable** - v2.0.0 is a major rewrite
- Work on feature branches, merge to `main` via PRs
- Released incrementally as `2.0.0-alpha.x` tags on `main` after phase completion
- No prop-level backward compatibility guarantee
- `sx` prop → `className`
- MUI theme → CSS variables
- Icon library change
- Peer dependencies changed

### Open Questions

None - all key decisions made.

### Risks & Mitigation

| Risk                               | Likelihood | Impact | Mitigation                                      |
| ---------------------------------- | ---------- | ------ | ----------------------------------------------- |
| shadcn components missing features | Low        | Medium | Evaluate early in Phase 1, build custom if need |
| Timeline extends beyond 6 months   | Medium     | Low    | Flexible timeline, phased approach allows pause |
| Visual regressions                 | Medium     | High   | Manual testing after each component, Chromatic  |
| Accessibility issues               | Low        | High   | Audit each phase, use automated tools           |
| RemoteDataTable complexity         | High       | Medium | Allocate 2 weeks, incremental UI replacement    |
| MCP registry adoption low          | Medium     | Low    | NPM remains primary distribution, MCP is bonus  |
| Consumer confusion on v1 vs v2     | Low        | Medium | Clear docs, semantic versioning                 |

### Success Criteria

**v2.0.0 is ready when:**

✅ **Code Quality**
- All 44 required components migrated (DatePickers optional)
- 100% test coverage maintained
- Zero TypeScript errors (strict mode)
- Bundle size ≤ v1 (target: 40% smaller)

✅ **AI Integration**
- MCP registry complete (all components)
- Registry hosted and accessible
- Tested with AI tools (Claude, Cursor, etc.)
- llms.txt file complete and validated
- AI documentation complete (4 files)
- 3 working example applications

✅ **Documentation**
- Complete migration guide for consumers
- All components documented in Storybook
- CHANGELOG.md comprehensive
- Example projects runnable
- AI Component Guide complete
- AI Composition Patterns documented
- AI MCP Usage guide complete

✅ **Quality**
- WCAG 2.1 AA compliant
- Dark mode works perfectly
- All Storybook stories render
- Visual parity with v1 (or intentional improvements)
- Performance benchmarks pass
- Cross-browser tested

✅ **Release**
- Version bumped to 2.0.0
- npm published
- Storybook deployed (same URL)
- GitHub release with notes
- Announcement complete

### Dependencies

**New Dependencies:**
```json
{
  "dependencies": {
    "@base-ui/react": "^1.2.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^3.0.0",
    "lucide-react": "^0.300.0",
    "sonner": "^1.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "tailwindcss-animate": "^1.0.0"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0",
    "lucide-react": "^0.300.0"
  }
}
```

**Removed Dependencies:**
```json
{
  "removed": [
    "@radix-ui/react-*",
    "@mui/material",
    "@mui/icons-material",
    "@emotion/react",
    "@emotion/styled",
    "@emotion/utils",
    "@mui/system"
  ],
  "optional": [
    "@mui/x-date-pickers"
  ]
}
```

### Consumer Migration Impact

**v1 → v2 Breaking Changes Summary:**

1. **Styling System**
   - Before: `<Label sx={{ mt: 2 }} />`
   - After: `<Label className="mt-2" />`

2. **Icons**
   - Before: `import CheckIcon from '@mui/icons-material/Check'`
   - After: `import { Check } from 'lucide-react'`

3. **Theme**
   - Before: MUI ThemeProvider + createTheme()
   - After: CSS variables (no provider needed)

4. **Installation**
   ```bash
   # v1
   yarn add @pautena/react-design-system @mui/material @emotion/react
   
   # v2
   yarn add @pautena/react-design-system
   yarn add -D tailwindcss postcss autoprefixer
   import '@pautena/react-design-system/styles.css'
   ```

5. **Component Props**
   - Props may be renamed/removed aggressively (documented per-component)
   - Generally simpler, more standard HTML props

### Related Documentation

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [MCP Server Documentation](https://ui.shadcn.com/docs/mcp)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [TanStack Table](https://tanstack.com/table) (for RemoteDataTable)
- [llms.txt Specification](https://llmstxt.org/) (for AI context file)

### Metrics to Track

- [ ] Components migrated: 0/44 (0%)
- [ ] Tests passing: TBD
- [ ] Bundle size: TBD (target: 40% smaller than v1)
- [ ] Storybook stories: 0/44
- [ ] Registry entries: 0/44
- [ ] Documentation pages: 0/44
- [ ] Example applications: 0/3
- [ ] AI documentation files: 0/4 (Component Guide, Composition Patterns, MCP Usage, llms.txt)
- [ ] Accessibility score: TBD (target: WCAG 2.1 AA)

---

## Next Actions

**Immediate:**
1. ✅ Phase 0 foundation complete (structure normalized)
2. ⏳ Update/merge PR #637 with latest structure + dependency cleanup
3. ⏳ Start Phase 1 (Bullet + Label) using `@/components/ui/*` imports only

**After Phase 0:**
- Execute Phase 1 (Pilot components)
- Review checkpoint
- Continue phases 2-10
- Phase 9 creates AI training data (examples + docs)

**Commands to Start:**
```bash
# Start Phase 1 branch work
git checkout -b feat/phase-1-bullet-label
```

---

## Appendix

### A. Automated Registry Generation

**TL;DR:**
✅ Registry is 100% automated using shadcn's `build` command  
✅ No custom scripts needed - uses official shadcn CLI  
✅ Single source of truth - `registry.json` manifest file  
✅ CI/CD friendly - One command generates all JSON files  

---

#### How It Works

**Step 1: Create `registry.json` (Source of Truth)**

This is the **only file you manually edit** when adding components:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "pautena",
  "homepage": "https://react-design-system.pautena.com",
  "items": [
    {
      "name": "label",
      "type": "registry:ui",
      "title": "Label",
      "description": "Compact element to represent a text",
      "registryDependencies": ["badge"],
      "dependencies": ["class-variance-authority"],
      "files": [
        {
          "path": "src/components/label/label.tsx",
          "type": "registry:ui"
        }
      ],
      "category": "Data Display"
    }
  ]
}
```

**Step 2: Add Build Script to `package.json`**

```json
{
  "scripts": {
    "build:registry": "shadcn build registry.json --output public/r"
  }
}
```

**Step 3: Run Build Command**

```bash
yarn build:registry
```

**What happens:**
1. shadcn CLI reads `registry.json`
2. For each item in the `items` array:
   - Reads the component file(s) specified in `files`
   - Generates a JSON file in `public/r/{name}.json`
3. Creates `public/r/index.json` with all components

**Output:**
```
public/r/
├── index.json          # List of all components
├── label.json          # Auto-generated
├── value-card.json     # Auto-generated
└── ...
```

---

#### Workflow: Adding a New Component

**Step 1: Migrate Component to shadcn**

Use the project command to generate the component skeleton first:

```bash
/create-component value-card "card component to display key-value data; depends on card and badge"
```

Then adjust the generated component to match migration requirements and final API:

```typescript
// src/components/value-card/value-card.tsx
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function ValueCard({ className, ...props }) {
  return <Card className={cn("...", className)} {...props} />
}
```

**Step 2: Add Entry to `registry.json`**

Add to the `items` array:

```json
{
  "items": [
    // ... existing items
    {
      "name": "value-card",
      "type": "registry:ui",
      "title": "Value Card",
      "description": "Card component to display key-value data",
      "registryDependencies": ["card", "badge"],
      "dependencies": ["class-variance-authority", "clsx"],
      "files": [
        {
          "path": "src/components/value-card/value-card.tsx",
          "type": "registry:ui"
        }
      ],
      "category": "Data Display"
    }
  ]
}
```

**Step 3: Build Registry**

```bash
yarn build:registry
```

**Result:** `public/r/value-card.json` is auto-generated ✅

**Step 4: Commit & Deploy**

```bash
git add registry.json public/r/
git commit -m "feat(value-card): add to registry"
git push
```

CI/CD runs `yarn build:registry` and deploys `public/r/` to:
```
https://react-design-system.pautena.com/r/value-card.json
```

---

#### Registry Fields Reference

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `name` | ✅ | Component ID (kebab-case) | `"value-card"` |
| `type` | ✅ | Registry type | `"registry:ui"` |
| `title` | ✅ | Display name | `"Value Card"` |
| `description` | ✅ | Brief description | `"Display key-value data"` |
| `registryDependencies` | ❌ | Internal component deps | `["card", "badge"]` |
| `dependencies` | ❌ | NPM package deps | `["clsx"]` |
| `files` | ✅ | Component file paths | `[{ path, type }]` |
| `category` | ❌ | Category | `"Data Display"` |

**Tips:**
- `registryDependencies`: Other components from YOUR registry (e.g., if ValueCard uses Label internally)
- `dependencies`: NPM packages (auto-installed when component is added)
- `files`: Can have multiple files (component + types + utils)

**Registry Types:**
- `registry:ui` - UI components (your custom components)
- `registry:block` - Full page blocks
- `registry:hook` - React hooks
- `registry:lib` - Utility functions

---

#### How Consumers Use It

**Step 1: Configure Registry in Their App**

```json
// components.json in consumer app
{
  "registries": {
    "@pautena": "https://react-design-system.pautena.com/r"
  }
}
```

**Step 2: Install Components via shadcn CLI**

```bash
# View component before installing
npx shadcn@latest view @pautena/value-card

# Install component
npx shadcn@latest add @pautena/value-card

# Install multiple components
npx shadcn@latest add @pautena/value-card @pautena/label

# Search your registry
npx shadcn@latest search @pautena
```

**Step 3: AI Tools Can Discover Components**

AI tools (Claude Code, Cursor, VS Code Copilot) with MCP support can:
```
"Show me components from @pautena registry"
"Add @pautena/value-card to my project"
"Build a dashboard with @pautena/remote-data-table"
```

---

#### CI/CD Integration

**GitHub Actions Example:**

```yaml
# .github/workflows/deploy-storybook.yml
name: Deploy Storybook + Registry

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: yarn install
      
      # Build registry (generates public/r/)
      - run: yarn build:registry
      
      # Build storybook
      - run: yarn build-storybook
      
      # Deploy (includes public/r/ + storybook-static/)
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

**Result:** Registry deployed alongside Storybook documentation

---

#### Benefits

✅ **No Custom Scripts**
- Uses official shadcn CLI (`shadcn build`)
- No maintenance burden
- Works with future shadcn updates

✅ **Single Source of Truth**
- `registry.json` is the only manual file
- Auto-generates all `public/r/*.json` files
- No risk of manual JSON files getting out of sync

✅ **Type-Safe**
- JSON Schema validation (`$schema` field)
- Editor autocomplete for registry.json
- Catches errors early

✅ **CI/CD Friendly**
- One command: `yarn build:registry`
- Fast (seconds to generate all files)
- No complex build pipeline needed

✅ **AI-Ready**
- MCP protocol support built-in
- AI tools can discover and use components
- Natural language component installation

---

#### FAQ

**Q: Do I need to manually create JSON files for each component?**  
**A:** No! You only edit `registry.json` (one file). The `shadcn build` command auto-generates all individual JSON files.

**Q: What if I update a component?**  
**A:** Just run `yarn build:registry` again. It regenerates all files from `registry.json`.

**Q: Can I have multiple files per component?**  
**A:** Yes! Add multiple entries to the `files` array:
```json
{
  "files": [
    { "path": "src/components/value-card/value-card.tsx", "type": "registry:ui" },
    { "path": "src/components/value-card/value-card.types.ts", "type": "registry:lib" }
  ]
}
```

**Q: How do I detect `registryDependencies` automatically?**  
**A:** Look at your component imports. If it imports from `@/components/ui/*` or other internal components, those are registryDependencies.

Example:
```typescript
import { Card } from "@/components/ui/card"  // ← registryDependency: "card"
import { Badge } from "@/components/badge"  // ← registryDependency: "badge"
import { clsx } from "clsx"  // ← dependency: "clsx"
```

**Q: Do I commit `public/r/` to git?**  
**A:** Optional. You can:
- **Option A**: Gitignore `public/r/` and generate in CI/CD
- **Option B**: Commit `public/r/` for easy local testing

Recommendation: **Gitignore** and generate in CI/CD (keeps repo clean)

---

#### Summary

**You only need to:**
1. Maintain `registry.json` (single source of truth)
2. Run `yarn build:registry` (auto-generates all JSON files)
3. Deploy `public/r/` directory

**shadcn does everything else automatically** ✨

---

### B. MCP Registry Configuration

**Consumer app setup:**

```json
// components.json in consumer app
{
  "registries": {
    "@pautena": "https://react-design-system.pautena.com/r"
  }
}
```

**AI Usage Examples:**
```
"Show me all components from @pautena registry"
"Add @pautena/value-card to my project"
"Install @pautena/remote-data-table and @pautena/label"
"Build a dashboard using components from @pautena"
```

### C. shadcn CLI Commands

```bash
# Install base components
npx shadcn@latest add button input card dialog

# View component before installing
npx shadcn@latest view button

# Search registry
npx shadcn@latest search @pautena

# Install from custom registry
npx shadcn@latest add @pautena/value-card
```

### D. Consumer Tailwind Configuration

```typescript
// tailwind.config.ts in consumer app
import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@pautena/react-design-system/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      // Consumer can extend/override theme
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
```

### E. Git Workflow

**Branch Strategy:**
```
main (stable - tagged releases)
├── feat/phase-0-foundation        → PR → merge → tag 2.0.0-alpha.0
├── feat/bullet                    → PR → merge
├── feat/label                     → PR → merge → tag 2.0.0-alpha.1
├── feat/value-text                → PR → merge
├── feat/value-boolean             → PR → merge
├── ... (all Phase 2 components)   → PRs → merge → tag 2.0.0-alpha.2
└── release/v2.0.0                 → PR → merge → tag 2.0.0
```

**Workflow per Feature:**
```bash
# Start from main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feat/component-name

# Make changes, commit
git add .
git commit -m "feat(component-name): migrate from MUI to shadcn"

# Push and create PR
git push -u origin feat/component-name
gh pr create --title "feat(component-name): migrate from MUI to shadcn"

# After PR approval, merge via GitHub UI
# Delete feature branch after merge
git branch -d feat/component-name
```

**Version Tags (on main after merge):**
```
2.0.0-alpha.0  → Phase 0 complete (foundation)
2.0.0-alpha.1  → Phase 1 complete (pilot components)
2.0.0-alpha.2  → Phase 2 complete (simple display)
2.0.0-alpha.3  → Phase 3 complete (cards)
2.0.0-alpha.4  → Phase 4 complete (forms)
2.0.0-alpha.5  → Phase 5 complete (layout)
2.0.0-alpha.6  → Phase 6 complete (dialogs)
2.0.0-alpha.7  → Phase 7 complete (tables)
2.0.0          → Phase 9 complete (final release)
```

**Tagging Process:**
```bash
# After phase PR is merged to main
git checkout main
git pull origin main
git tag -a 2.0.0-alpha.X -m "Phase X complete: description"
git push origin 2.0.0-alpha.X
```

**Commit Message Format:**
```
<type>(<scope>): <subject>

[optional body]

[optional footer with BREAKING CHANGE]
```

**Types:**
- `feat`: Component migration
- `refactor`: Refactoring
- `test`: Tests
- `docs`: Documentation
- `chore`: Build/config
- `fix`: Bug fixes

**Example:**
```
feat(label): migrate from MUI to shadcn/ui

- Replace MUI Box with shadcn Badge foundation
- Use class-variance-authority for variants
- Add size variants (sm, md, lg)
- Full dark mode support
- MCP registry entry created

BREAKING CHANGE: 'sx' prop replaced with 'className'
```

### F. Testing Strategy

**Unit Tests**: Vitest + React Testing Library
- Test component rendering
- Test all variants
- Test user interactions
- Test accessibility

**Visual Tests**: Manual in Storybook (or Chromatic)
- Light/dark mode
- All variants
- Responsive behavior

**Integration Tests**: Test composite components
- Forms with validation
- Data tables with sorting/filtering
- Dialogs with state management

**Accessibility Tests**: axe DevTools, WAVE
- ARIA attributes
- Keyboard navigation
- Screen reader compatibility
- Color contrast

### G. Package.json Updates

```json
{
  "name": "@pautena/react-design-system",
  "version": "2.0.0",
  "description": "AI-ready design system built on shadcn/ui with MCP support",
  "keywords": [
    "shadcn",
    "design-system",
    "react",
    "tailwind",
    "components",
    "ui",
    "mcp",
    "ai-ready"
  ],
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs"
    },
    "./styles.css": "./dist/styles.css"
  },
  "files": [
    "/dist",
    "/registry",
    "/components.json"
  ]
}
```

---

### H. Phase 9 Detailed Guide - Examples & AI Training Data

This appendix provides comprehensive details for Phase 9 implementation.

**Duration**: 2 weeks (10 work days)  
**Agent**: @react-developer  
**Skills**: code-react-unit-testing, code-react-storybook, code-react-tanstack-router  

---

#### Goals

1. Build 3 working example applications demonstrating real-world usage
2. Create AI training documentation with patterns and examples
3. Generate llms.txt context file for AI tools
4. Document MCP integration for AI code generation

---

#### Week 1: Example Applications (5 days)

**Example 1: Dashboard (2 days)**

**Location**: `examples/dashboard/`

**Features**:
- Header with navigation (Header, HeaderLayout)
- Sidebar navigation (DrawerLayout, DrawerItem)
- Data table with pagination (RemoteDataTable)
- Metric cards (ValueCard, GroupValueCard)
- KPI boards (Board)
- Toast notifications (NotificationCenter)

**Technologies**:
- React + TypeScript
- TanStack Router for routing
- TanStack Query for data fetching
- Mock API data

**README Structure**:
```markdown
# Dashboard Example

## Overview
Full-featured dashboard demonstrating data display components.

## Components Used
- RemoteDataTable
- ValueCard
- Header
- DrawerLayout
- NotificationCenter

## Setup
```bash
cd examples/dashboard
yarn install
yarn dev
```

## Key Patterns

### Pattern 1: Data Table with Filters
```tsx
<RemoteDataTable
  data={users}
  columns={columns}
  onSortChange={handleSort}
  onPageChange={handlePageChange}
/>
```

### Pattern 2: Metric Cards Grid
```tsx
<div className="grid grid-cols-4 gap-4">
  <ValueCard label="Users" value={1234} />
  <ValueCard label="Revenue" value="$45,678" />
</div>
```

## AI Prompts

Try these prompts with AI tools:
- "Create a dashboard similar to the @pautena dashboard example"
- "Add a metrics section using ValueCard components"
```

---

**Example 2: Form Wizard (2 days)**

**Location**: `examples/form-wizard/`

**Features**:
- Multi-step form navigation (TabCard, Tabs)
- Form inputs (TextField, Select, Autocomplete)
- Validation and error states
- Confirmation dialogs (ConfirmDialog)
- Sub-forms in dialogs (FormDialog)
- Loading states
- Success/error feedback

**Technologies**:
- React + TypeScript
- TanStack Form for form state
- Zod for validation
- Multi-step wizard logic

**Key Patterns**:
- Form field composition
- Validation error display
- Dialog-based sub-forms
- Wizard navigation
- Loading/disabled states

---

**Example 3: Data Explorer (1 day)**

**Location**: `examples/data-explorer/`

**Features**:
- Filterable data table (RemoteDataTable)
- Search and filters (TextField, Select)
- Query state management (QueryContainer)
- Detail views (ValueCard, ValueItem)
- List navigation (ListPanel)
- Expandable tips (ExpandableAlert)

**Technologies**:
- React + TypeScript
- TanStack Query
- URL-based state (TanStack Router)

**Key Patterns**:
- Server-side filtering
- URL state synchronization
- Detail/master layout
- Query loading states

---

#### Week 2: AI Documentation (5 days)

**Task 1: Component Usage Guide (2 days)**

**File**: `docs/AI-COMPONENT-GUIDE.md`

**Structure**:
```markdown
# AI Component Usage Guide

## Purpose
This guide provides AI tools with comprehensive patterns for using components.

---

## Button

**Purpose**: Interactive element for user actions

**Common Patterns**:

### Pattern 1: Primary Action
```tsx
<Button variant="default" size="md">
  Save Changes
</Button>
```
**When to use**: Main action in a form or dialog
**Props**: variant, size, disabled, onClick
**Avoid**: Using multiple primary buttons in same context

### Pattern 2: Icon Button
```tsx
<Button variant="ghost" size="icon">
  <Search className="h-4 w-4" />
</Button>
```
**When to use**: Toolbar actions, icon-only buttons
**Accessibility**: Always add aria-label for icon buttons

---

## RemoteDataTable

**Purpose**: Display server-side paginated data with sorting/filtering

**Common Patterns**:

### Pattern 1: Basic Table
```tsx
<RemoteDataTable
  data={users}
  columns={[
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" }
  ]}
  pagination={{
    pageIndex: 0,
    pageSize: 25,
    pageCount: 10
  }}
  onPaginationChange={setPagination}
/>
```
**When to use**: Large datasets requiring server-side pagination
**State management**: Use TanStack Query for data fetching

### Pattern 2: Table with Filters
```tsx
const [filters, setFilters] = useState({})

<RemoteDataTable
  data={users}
  columns={columns}
  pagination={pagination}
  onPaginationChange={setPagination}
  // Custom filter UI
  renderToolbar={() => (
    <div className="flex gap-2">
      <TextField 
        placeholder="Search..."
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
    </div>
  )}
/>
```
**When to use**: User needs to filter/search table data
**Performance**: Debounce filter inputs

---

[... Document all 44 components]
```

**Coverage**: All 44 components with 2-3 patterns each

---

**Task 2: Composition Patterns (1 day)**

**File**: `docs/AI-COMPOSITION-PATTERNS.md`

**Patterns to Document**:
1. Form layouts (simple, complex, wizard)
2. Dashboard grids
3. Data table pages
4. Modal flows
5. Navigation layouts (sidebar, header)
6. Detail/master views
7. Settings pages
8. Card grids
9. List views
10. Empty states

**Structure Example**:
```markdown
# AI Composition Patterns

Common multi-component patterns for building UIs.

---

## Pattern 1: Form Layout

**Use Case**: Standard form with validation

```tsx
import { TextField, Select, Button } from "@pautena/design-system"

function UserForm() {
  return (
    <form className="space-y-4">
      <TextField
        label="Full Name"
        placeholder="John Doe"
        error={errors.name}
      />
      
      <Select
        label="Role"
        options={roles}
        value={selectedRole}
        onChange={setSelectedRole}
      />
      
      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Save
        </Button>
      </div>
    </form>
  )
}
```

**AI Prompt Example**:
```
"Create a user registration form with name, email, role selection using @pautena components"
```

---

## Pattern 2: Dashboard Grid

**Use Case**: Metrics dashboard with cards

```tsx
import { ValueCard, GroupValueCard, Board } from "@pautena/design-system"

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ValueCard label="Total Users" value={users.length} />
        <ValueCard label="Revenue" value="$45,678" preset="success" />
        <ValueCard label="Active Sessions" value={234} preset="primary" />
        <ValueCard label="Conversion" value="12.4%" preset="warning" />
      </div>
      
      {/* Detailed Metrics */}
      <GroupValueCard title="User Statistics">
        <ValueCard label="New Users" value={456} />
        <ValueCard label="Returning" value={789} />
      </GroupValueCard>
      
      {/* KPI Board */}
      <Board title="Monthly Goal" value="$50,000" />
    </div>
  )
}
```

**AI Prompt Example**:
```
"Create a dashboard with 4 metric cards and a monthly revenue board using @pautena components"
```
```

---

**Task 3: llms.txt AI Context File (1 day)**

**File**: `llms.txt` (repository root)

**Purpose**: Machine-readable context file for AI tools (follows [llmstxt.org](https://llmstxt.org/) spec)

**Structure**:
```markdown
# @pautena/react-design-system

> shadcn-based React component library with MCP registry support

## Overview

AI-ready design system with 44+ components built on shadcn/ui, Tailwind CSS, and Radix UI primitives.

**Installation**:
```bash
# Via NPM
npm install @pautena/react-design-system

# Via shadcn CLI (recommended)
npx shadcn@latest add @pautena/component-name
```

**Registry**: https://react-design-system.pautena.com/r

---

## Component Catalog

### Data Display (18 components)

**ValueCard** - Display key-value pairs in card format
- Props: `label`, `value`, `preset`, `icon`
- Use for: Dashboards, metrics, statistics
- Example: `<ValueCard label="Users" value={1234} preset="primary" />`

**RemoteDataTable** - Server-side data table with pagination
- Props: `data`, `columns`, `pagination`, `onPaginationChange`
- Use for: Large datasets, user lists, admin tables
- Example: See docs/examples/data-table.md

[... All 44 components]

---

## Common Patterns

### Pattern: Dashboard Layout
```tsx
<div className="grid grid-cols-4 gap-4">
  <ValueCard label="Users" value={1234} />
  <ValueCard label="Revenue" value="$45K" />
</div>
```

### Pattern: Data Table Page
```tsx
<RemoteDataTable
  data={users}
  columns={columns}
  pagination={{ pageIndex: 0, pageSize: 25 }}
/>
```

[... 10-15 common patterns]

---

## MCP Integration

**Search components**:
```
npx shadcn@latest search @pautena
```

**Install components**:
```
npx shadcn@latest add @pautena/value-card @pautena/remote-data-table
```

**AI Prompt Examples**:
- "Create a dashboard with @pautena components"
- "Add a data table from @pautena registry"
```

---

**Task 4: MCP Integration Examples (1 day)**

**File**: `docs/AI-MCP-USAGE.md`

**Content**: Complete guide on how AI tools discover, install, and use components via MCP protocol. Includes:
- Registry configuration
- Discovery commands
- Installation examples
- AI prompt examples for different scenarios
- Best practices for AI interactions
- Troubleshooting guide

See full content structure in the Phase 9 section of the main plan.

---

#### Deliverables Checklist

**Example Applications:**
- [ ] examples/dashboard/ (working app + README)
- [ ] examples/form-wizard/ (working app + README)
- [ ] examples/data-explorer/ (working app + README)

**AI Documentation:**
- [ ] docs/AI-COMPONENT-GUIDE.md (all 44 components)
- [ ] docs/AI-COMPOSITION-PATTERNS.md (10-15 patterns)
- [ ] docs/AI-MCP-USAGE.md (MCP integration)
- [ ] llms.txt (AI context file in root)

**Integration:**
- [ ] Link examples from main README.md
- [ ] Add examples to Storybook (optional)
- [ ] Reference in registry metadata
- [ ] Validate llms.txt with AI tools

---

#### Success Criteria

✅ **Examples Work**
- All 3 examples run with `yarn install && yarn dev`
- No errors in console
- All components render correctly

✅ **Documentation Complete**
- All 44 components have usage patterns
- 10-15 composition patterns documented
- llms.txt follows specification
- MCP usage guide comprehensive

✅ **AI-Friendly**
- AI tools can understand the docs
- Example prompts work with Claude/ChatGPT
- llms.txt provides sufficient context
- Code examples are copy-paste ready

✅ **Coverage**
- Examples demonstrate 80%+ of components
- Common use cases covered
- Edge cases documented
- Anti-patterns highlighted

---

**Plan Status**: 📋 Draft - Awaiting Approval  
**Last Updated**: 2026-02-18  
**Next Review**: After Phase 1 completion
