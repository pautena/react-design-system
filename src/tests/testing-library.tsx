import { render, RenderOptions } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Theme, createTheme } from "@mui/material";

function createMockTheme() {
  return createTheme();
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

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const history = createMockHistory();
  const theme = createMockTheme();
  const wrapper = createWrapper(history, theme);

  const instance = render(ui, { wrapper, ...options });
  return { ...instance, history };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
