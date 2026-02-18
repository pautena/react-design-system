import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
        "@": join(__dirname, "../src"),
      },
    };

    // Ensure PostCSS processes Tailwind CSS
    config.css = {
      ...config.css,
      postcss: join(__dirname, "../postcss.config.js"),
    };

    return config;
  },
};
export default config;
