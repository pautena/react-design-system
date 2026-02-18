# Migration Guide: v1.x → v2.0.0

## Overview

Version 2.0.0 represents a complete rewrite of the design system, migrating from MUI to shadcn/ui with Tailwind CSS. This brings:

- **AI-Native Architecture**: Full MCP (Model Context Protocol) integration for AI tools
- **Modern Styling**: Tailwind CSS with CSS variables for theming
- **Better Performance**: Smaller bundle size, better tree-shaking
- **Enhanced DX**: Simpler API, better TypeScript support
- **Icon Library**: Lucide React (tree-shakeable, modern icons)

## Breaking Changes

### 1. Styling System

**Before (v1):**
```tsx
<Label sx={{ mt: 2, color: 'primary.main' }} />
```

**After (v2):**
```tsx
<Label className="mt-2 text-primary" />
```

### 2. Icon Library

**Before (v1):**
```tsx
import CheckIcon from '@mui/icons-material/Check';
<CheckIcon />
```

**After (v2):**
```tsx
import { Check } from 'lucide-react';
<Check className="h-4 w-4" />
```

### 3. Theme System

**Before (v1):**
```tsx
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
});

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

**After (v2):**
```tsx
// No provider needed - uses CSS variables
// Customize in src/styles/globals.css or tailwind.config.ts
import '@pautena/react-design-system/styles.css';

<App />
```

### 4. Installation & Setup

**Before (v1):**
```bash
npm install @pautena/react-design-system @mui/material @emotion/react @emotion/styled
```

**After (v2):**
```bash
# Via NPM
npm install @pautena/react-design-system

# Or via shadcn CLI (recommended)
npx shadcn@latest add @pautena/label @pautena/value-card

# Setup Tailwind CSS in your project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Tailwind Configuration Required:**
```ts
// tailwind.config.ts
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@pautena/react-design-system/**/*.{js,mjs}",
  ],
  // ... rest of config
}
```

**Import Global Styles:**
```tsx
// main.tsx or App.tsx
import '@pautena/react-design-system/styles.css';
```

## Migration Status

### Phase 0: Foundation ✅ COMPLETE
- Tailwind CSS configured
- shadcn/ui base components installed (~30 components)
- MCP registry framework setup
- Build pipeline configured

### Phase 1: Pilot Components (In Progress)
- [ ] Bullet
- [ ] Label

### Phases 2-10: Remaining Components
See full migration plan in `.agents/plans/mui-to-shadcn-migration.md`

## Component-Specific Changes

### Label Component (Phase 1)

**Before:**
```tsx
<Label text="Active" color="primary" sx={{ mr: 1 }} />
```

**After:**
```tsx
<Label text="Active" variant="primary" className="mr-1" />
```

**Breaking Changes:**
- `color` prop → `variant` prop
- `sx` prop → `className` prop
- Uses Tailwind classes for styling

## Known Issues & Limitations

### v2.0.0-alpha.0
- MUI components still present (being gradually removed)
- Use `--legacy-peer-deps` for npm installs during transition
- Some components not yet migrated (see migration plan)

## Getting Help

- **Issues**: https://github.com/pautena/react-design-system/issues
- **Docs**: https://react-design-system.pautena.com
- **Migration Plan**: `.agents/plans/mui-to-shadcn-migration.md`

## Timeline

Version 2.0.0 is being released in alpha versions as components are migrated:
- `2.0.0-alpha.0` - Foundation complete
- `2.0.0-alpha.1` - Pilot components complete
- ... (more alpha releases)
- `2.0.0` - Full release (all components migrated)

**Recommendation**: Wait for `2.0.0` stable release for production use.
