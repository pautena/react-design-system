import type { Preview } from "@storybook/react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Renderer } from "storybook/internal/csf";

const lightTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
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
