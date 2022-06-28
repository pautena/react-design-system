import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { addDecorator } from "@storybook/react";
import { Box } from "@mui/material";

addDecorator((Story) => (
  <ThemeProvider theme={createTheme()}>
    <CssBaseline />
    <Box px={2} py={3}>
      <Story />
    </Box>
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}