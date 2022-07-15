import { render, RenderOptions } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Theme, createTheme, PaletteMode } from "@mui/material";

function createMockTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
    },
  });
}

function createMockHistory(): MemoryHistory {
  return createMemoryHistory();
}

const createWrapper =
  (history: MemoryHistory, theme: Theme) =>
  // eslint-disable-next-line react/display-name
  ({ children }: { children: React.ReactElement }) => {
    return (
      <ThemeProvider theme={theme}>
        <Router location={history.location} navigator={history}>
          {children}
        </Router>
      </ThemeProvider>
    );
  };

interface CustomRenderOptions {
  renderOptions?: RenderOptions;
  mode?: PaletteMode;
}

const customRender = (ui: React.ReactElement, options: CustomRenderOptions = {}) => {
  const renderOptions = options.renderOptions || {};
  const mode = options.mode || "light";

  const history = createMockHistory();
  const theme = createMockTheme(mode);
  const wrapper = createWrapper(history, theme);

  const instance = render(ui, { wrapper, ...renderOptions });
  return { ...instance, history };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
