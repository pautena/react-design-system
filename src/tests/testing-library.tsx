import { fireEvent, render, RenderOptions, RenderResult } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
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

const createWrapper =
  (theme: Theme) =>
  // eslint-disable-next-line react/display-name
  ({ children }: PropsWithChildren) => {
    return (
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
      </ThemeProvider>
    );
  };

interface CustomRenderOptions {
  renderOptions?: RenderOptions;
  mode?: PaletteMode;
  router?: TestRouter;
}

const customRender = (ui: React.ReactElement, options: CustomRenderOptions = {}): RenderResult => {
  const renderOptions = options.renderOptions || {};
  const mode = options.mode || "light";

  const theme = createMockTheme(mode);
  const wrapper = createWrapper(theme);

  const instance = render(ui, { wrapper, ...renderOptions });
  return { ...instance };
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
