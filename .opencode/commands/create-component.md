---
description: Create a new shadcn-aligned component wrapper in src/components
agent: react-developer
---

## Purpose

Create a new consumer-facing component under `src/components` that follows this repository's wrapper pattern around shadcn/Base UI primitives, including implementation, story, test, local exports, and package exports.

## Inputs

- Required: `$1` = component name (prefer kebab-case; if not kebab-case, normalize to kebab-case for folder/file names).
- Optional: `$2` = extra context (behavior, variants, accessibility, usage intent), parsed as all remaining text after `$1` (no quotes required).
- Raw fallback: `$ARGUMENTS` if positional parsing is unclear.

## Reference Files

Use these files as implementation style source of truth:

@src/components/badge/badge.tsx
@src/components/badge/badge.stories.tsx
@src/components/badge/badge.test.tsx
@src/components/badge/index.ts
@src/components/bullet/bullet.tsx
@src/components/bullet/bullet.stories.tsx
@src/components/bullet/bullet.test.tsx
@src/components/bullet/index.ts
@src/components/ui/badge.tsx
@src/components/ui/button.tsx

## Step-by-Step Workflow

1. Load any available skills that help with writing, testing, or documenting React components before making changes.
2. Parse input name from `$1`; parse optional context from `$2` as all remaining text after `$1`; derive `componentNameKebab`, component symbol (PascalCase), file base, and public export name.
3. Review referenced files and infer local conventions: wrapper over `src/components/ui/*`, JSDoc on component + exported props, story structure, test style, and index re-export pattern.
4. Decide primitive strategy:
   - If existing primitive in `src/components/ui/*` fits, compose it.
   - If missing and needed, generate primitive using shadcn/Base UI parity rules (do not invent unrelated primitive APIs).
5. Create `src/components/<component-name>/` with at least:
   - `<component-name>.tsx`
   - `<component-name>.stories.tsx`
   - `<component-name>.test.tsx`
   - `index.ts`
6. Implement accessible defaults and typed props; include meaningful, minimal variants only when justified by context.
7. Update `src/index.ts` to export the new public wrapper.
8. Run quick validation commands and report results:
   - !`npm run check:ts`
   - !`npm test -- --runInBand`
9. Return a concise creation report with changed files, notable decisions, and any follow-up needed.

## Output Requirements

- New components must always include and pass a React unit test file aligned with project testing patterns.
- New components must always include a Storybook story file.
- Public components must always be exported via `@src/index.ts`.

## Output Format (Exact)

1. `Component`: name + normalized paths.
2. `Interpretation`: short read of optional context.
3. `Created/Updated Files`: bullet list with one-line purpose each.
4. `API`: exported props + defaults + variants.
5. `Validation`: command result summary.
6. `Notes`: caveats or next improvements.

## Output Format Example

```text
Component: status-pill (src/components/status-pill)
Interpretation: compact state indicator with semantic variants
Created/Updated Files:
- src/components/status-pill/status-pill.tsx - wrapper component + props
- src/components/status-pill/status-pill.stories.tsx - default + variant stories
- src/components/status-pill/status-pill.test.tsx - render + variant assertions
- src/components/status-pill/index.ts - public local exports
- src/index.ts - package-level export wiring
API: StatusPillProps { text: string; variant?: "default" | "success" | "error" }
Validation: check:ts passed; tests passed
Notes: consider icon support if product needs richer status semantics
```

## Guardrails

- Do not modify files outside component scope, `src/index.ts`, and required test/story support.
- Do not add Unicode unless already present; keep edits ASCII-first.
- Do not skip JSDoc for exported component and exported prop interfaces.
- Do not introduce breaking API changes to existing components.
- Do not use generic placeholder tests; assert meaningful behavior.
- Do not create a component without both `.stories.tsx` and `.test.tsx`.
- Do not treat component creation as complete until `src/index.ts` export is added for public wrappers.

## Usage Examples

1. `/create-component status-pill`
2. `/create-component status-pill used in tables; should support success/warning/error and compact density`
