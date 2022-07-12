import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { addDecorator } from "@storybook/react";
import { Box } from "@mui/material";
import { select, withKnobs } from "@storybook/addon-knobs";

const light = createTheme();
const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

const themes = { light, dark };
const themeNames = Object.keys(themes);

addDecorator((Story) => {
  const theme = select("Theme", themeNames, themeNames[0], "Themes");

  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
});
addDecorator(withKnobs);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
