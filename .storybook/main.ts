import path from "node:path";
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
  async viteFinal(config) {
    // Ensure Base UI package exports are properly resolved
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [...(config.optimizeDeps?.include || []), "@base-ui/react"],
    };

    // Add path alias resolution for @/ -> src/
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": path.resolve(__dirname, "../src"),
      },
    };

    return config;
  },
};
export default config;
