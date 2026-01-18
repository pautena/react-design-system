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
│   ├── enhanced-remote-table
│   ├── enhanced-table
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

**Folder Patterns**:
| Directory | Naming | Notes |
|-----------|--------|-------|
| `src` | PascalCase | Component source code |
| `src/stories` | kebab-case | Storybook documentation |

**File Patterns**:
| Directory | Pattern | Companion Files |
|-----------|---------|-----------------|
| `src` | `*.tsx` | Story files in same directory |
| `src/stories` | `*.mdx` | Story documentation |
| `src/stories` | `*.stories.tsx` | Storybook stories |

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

