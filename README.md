# React Design System

**WORK IN PROGRESS**

<img src="src/stories/assets/work-in-progress.jpg" width="200" height="180"/>

My custom design system on top of [MUI](https://mui.com/material-ui/), with a bunch of components to be able to fast prototype new pages and products

## Installation

This project is available as an [npm package](https://www.npmjs.com/package/@pautena/react-design-system).

npm:

```bash
npm install @pautena/react-design-system @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid
```

yarn:

```bash
yarn add @pautena/react-design-system @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid react-dom
```

Now you are going to be able to import the components and use it in your React project.

```javascript
import { DrawerLayout } from "@pautena/react-design-system";
```

## Documentation

If you want to know more about the components and the layouts availables in this project check our [documentation](https://pautena.com/react-design-system)

## AI Agent Integration (MCP)

This design system is available as an MCP (Model Context Protocol) server, allowing AI coding agents to access component documentation and examples.

### Setup in OpenCode

Add to your `.opencode/config.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "storybook-react-design-system": {
      "type": "remote",
      "url": "https://react-design-system.pautena.com/mcp",
      "enabled": true
    }
  }
}
```

### Setup in Claude Desktop

Add to `~/.config/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "storybook-react-design-system": {
      "url": "https://react-design-system.pautena.com/mcp",
      "transport": "http"
    }
  }
}
```

### Setup in Claude Code

```bash
claude mcp add storybook-react-design-system \
  --transport http \
  https://react-design-system.pautena.com/mcp \
  --scope global
```

### Available MCP Tools

Once connected, AI agents can:
- List all available components
- Get component documentation
- Access UI building instructions
- Retrieve Storybook story URLs

## Contributing

Read the [contribution guide](/CONTRIBUTING.md) to learn about our development process, how to propose bug fixes and improvements, and how to build and test your changes.

## Issues and features

If you found a bug or you have an idea for a new component, feel free to [open an issue](https://github.com/pautena/react-design-system/issues/new) explaining the bug or the new component that you would like to have.

## Licence

This project is licensed under the terms of the [MIT license](/LICENSE).
