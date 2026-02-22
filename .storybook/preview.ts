import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import type { Renderer } from "storybook/internal/csf";
import "../src/styles/globals.css";

const lightTheme = createTheme({
  typography: {
    fontFamily: '"Geist", "Geist Fallback", sans-serif',
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: '"Geist", "Geist Fallback", sans-serif',
  },
});

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "oklch(1 0 0)" },
        { name: "dark", value: "oklch(0.145 0 0)" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    docs: {
      canvas: {
        className: "bg-background text-foreground",
      },
    },
  },
  decorators: [
    (Story, context) => {
      const root = document.documentElement;
      const selectedTheme = context.globals.theme;

      root.classList.remove("light", "dark");
      if (selectedTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.add("light");
      }

      return Story();
    },
    withThemeFromJSXProvider<Renderer>({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
  tags: ["autodocs"],
};

export default preview;
