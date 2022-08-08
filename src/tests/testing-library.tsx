import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Theme, createTheme, PaletteMode } from "@mui/material";

export type TestRouter = "router" | "memory";

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
  (history: MemoryHistory, theme: Theme, router: TestRouter) =>
  // eslint-disable-next-line react/display-name
  ({ children }: { children: React.ReactElement }) => {
    const isMemoryRouter = router === "memory";

    const R = isMemoryRouter ? MemoryRouter : Router;
    const routerArgs = isMemoryRouter
      ? {}
      : {
          location: history.location,
          navigator: history,
        };
    return (
      <ThemeProvider theme={theme}>
        <R {...routerArgs}>{children}</R>
      </ThemeProvider>
    );
  };

interface CustomRenderOptions {
  renderOptions?: RenderOptions;
  mode?: PaletteMode;
  router?: TestRouter;
}

const customRender = (ui: React.ReactElement, options: CustomRenderOptions = {}) => {
  const renderOptions = options.renderOptions || {};
  const mode = options.mode || "light";
  const router = options.router || "router";

  const history = createMockHistory();
  const theme = createMockTheme(mode);
  const wrapper = createWrapper(history, theme, router);

  const instance = render(ui, { wrapper, ...renderOptions });
  return { ...instance, history };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
