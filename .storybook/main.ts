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
    options: {
      builder: {
        viteConfigPath: undefined,
      },
    },
  },
  viteFinal: async (config) => {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include || []),
          "@mui/material",
          "@mui/icons-material",
          "@emotion/react",
          "@emotion/styled",
        ],
      },
      server: {
        ...config.server,
        fs: {
          strict: true,
        },
      },
      build: {
        ...config.build,
        sourcemap: false,
        minify: false,
      },
    };
  },
  features: {
    experimentalComponentsManifest: true,
  },
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
};
export default config;
