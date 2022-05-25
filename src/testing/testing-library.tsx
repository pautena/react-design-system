import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import React, { PropsWithChildren, ReactElement, useLayoutEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Theme, createTheme } from "@mui/material";
import { renderHook } from "@testing-library/react-hooks";
import { CombinedState, configureStore, PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { authReducer, environmentsReducer, projectsReducer, userResourcesApi } from "../features";
import { RootState } from "../app/store";

function createMockTheme() {
  return createTheme();
}

export type MockPreloadedState = PreloadedState<RootState>;
export function createMockStore({
  preloadedState = {},
}: { preloadedState?: MockPreloadedState } = {}) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      environments: environmentsReducer,
      projects: projectsReducer,
      [userResourcesApi.reducerPath]: userResourcesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userResourcesApi.middleware),
    preloadedState,
  });

  return store;
}

interface CustomRenderOptions {
  renderOptions?: RenderOptions;
  preloadedState?: MockPreloadedState;
}

interface TestRouterProps {
  history: MemoryHistory;
}

const TestRouter = ({ history, children }: PropsWithChildren<TestRouterProps>) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router location={state.location} navigator={history} navigationType={state.action}>
      {children}
    </Router>
  );
};

const customRender = (
  ui: React.ReactElement,
  { renderOptions = {}, preloadedState = {} }: CustomRenderOptions = {},
) => {
  const history = createMemoryHistory();
  const theme = createMockTheme();
  const store = createMockStore({ preloadedState });

  const instance = render(ui, {
    wrapper: ({ children }: { children: React.ReactElement }) => {
      return (
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <ThemeProvider theme={theme}>
              <TestRouter history={history}>{children}</TestRouter>
            </ThemeProvider>
          </LocalizationProvider>
        </Provider>
      );
    },
    ...renderOptions,
  });
  return { ...instance, history, store };
};

export const renderFeatureHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  { preloadedState = {} }: CustomRenderOptions = {},
) => {
  const store = createMockStore({ preloadedState });

  const instance = renderHook(callback, {
    wrapper: ({ children }: PropsWithChildren<{}>) => {
      return <Provider store={store}>{children}</Provider>;
    },
  });
  return { ...instance, store };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
