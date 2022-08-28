/* eslint-disable react/display-name */
import React, { FunctionComponent } from "react";
import { ComponentStory } from "@storybook/react";
import { JSXElementConstructor } from "react";
import { Box } from "@mui/material";
import { MemoryRouter, Router, Navigator, Route, Routes } from "react-router-dom";
import { NotificationCenterProvider } from "./providers";
import { action } from "@storybook/addon-actions";
import { LocalizationProvider } from "@mui/x-date-pickers/";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export function createTemplate<P>(
  C: JSXElementConstructor<P>,
): ComponentStory<JSXElementConstructor<P>> {
  return (args) => <C {...args} />;
}

const replaceAction = action("navigator/replace");
const goAction = action("navigator/go");
const pushAction = action("navigator/push");

export const withActionRouter =
  ({ location = "/", path = "/" }: { location?: string; path?: string } = {}) =>
  (Story: FunctionComponent) => {
    const navigator: Navigator = {
      replace: (args) => replaceAction(args),
      go: (args) => goAction(args),
      push: (args) => pushAction(args),
      createHref: () => "",
    };

    return (
      <Router location={location} navigator={navigator}>
        <Routes>
          <Route path={path} element={<Story />} />
        </Routes>
      </Router>
    );
  };

export const withMemoryRouter =
  (initialEntries = ["/"]) =>
  (Story: FunctionComponent) => {
    return (
      <MemoryRouter initialEntries={initialEntries}>
        <Story />
      </MemoryRouter>
    );
  };

export const withNotificationCenter = (Story: FunctionComponent) => {
  return (
    <NotificationCenterProvider>
      <Story />
    </NotificationCenterProvider>
  );
};

export const withFullHeight = (Story: FunctionComponent) => {
  return (
    <Box height="100vh">
      <Story />
    </Box>
  );
};

export const withContainer =
  ({ width, height, bordered }: { width?: number; height?: number; bordered?: boolean }) =>
  (Story: FunctionComponent) => {
    let sx = {};
    if (bordered) {
      sx = {
        ...sx,
        border: "solid 1px black",
      };
    }
    return (
      <Box width={width} height={height} sx={sx}>
        <Story />
      </Box>
    );
  };

export const withPadding =
  (padding = 2) =>
  (Story: FunctionComponent) => {
    return (
      <Box padding={padding}>
        <Story />
      </Box>
    );
  };

export const withLocalizationProvider = (Story: FunctionComponent) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Story />
    </LocalizationProvider>
  );
};
