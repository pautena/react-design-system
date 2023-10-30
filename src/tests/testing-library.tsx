import { fireEvent, render, RenderOptions, RenderResult } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory, MemoryHistoryOptions } from "history";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Theme, createTheme, PaletteMode } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export type TestRouter = "router" | "memory";

function createMockTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
    },
  });
}

function createMockHistory(options?: MemoryHistoryOptions): MemoryHistory {
  return createMemoryHistory(options);
}

const createWrapper =
  (history: MemoryHistory, theme: Theme, router: TestRouter) =>
  // eslint-disable-next-line react/display-name
  ({ children }: { children: React.ReactElement }) => {
    const isMemoryRouter = router === "memory";

    const R = isMemoryRouter ? MemoryRouter : Router;

    return (
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <R
            navigator={history}
            location={history.location}
            initialEntries={[history.location]}
            initialIndex={0}
          >
            {children}
          </R>
        </LocalizationProvider>
      </ThemeProvider>
    );
  };

interface CustomRenderOptions {
  renderOptions?: RenderOptions;
  mode?: PaletteMode;
  router?: TestRouter;
  historyOptions?: MemoryHistoryOptions;
}

type CustomRenderResult = RenderResult & { history: MemoryHistory };
const customRender = (
  ui: React.ReactElement,
  options: CustomRenderOptions = {},
): CustomRenderResult => {
  const renderOptions = options.renderOptions || {};
  const mode = options.mode || "light";
  const router = options.router || "router";

  const history = createMockHistory(options.historyOptions);
  const theme = createMockTheme(mode);
  const wrapper = createWrapper(history, theme, router);

  const instance = render(ui, { wrapper, ...renderOptions });
  return { ...instance, history };
};

const customFireEvent = {
  ...fireEvent,
  type: (element: HTMLElement, value: string | number) => {
    fireEvent.change(element, { target: { value: value.toString() } });
  },
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, customFireEvent as fireEvent };
