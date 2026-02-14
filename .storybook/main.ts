import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/stories/introduction.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-mcp",
      options: {
        toolsets: {
          dev: true, // UI building instructions + story URLs
          docs: true, // Component documentation
        },
        experimentalFormat: "markdown",
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    experimentalComponentsManifest: true,
  },
};
export default config;
