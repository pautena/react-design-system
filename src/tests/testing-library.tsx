import {
  fireEvent,
  type RenderOptions,
  type RenderResult,
  render,
} from "@testing-library/react";
import type React from "react";

interface CustomRenderOptions {
  renderOptions?: RenderOptions;
}

const customRender = (
  ui: React.ReactElement,
  options: CustomRenderOptions = {},
): RenderResult => {
  const renderOptions = options.renderOptions || {};
  const instance = render(ui, { ...renderOptions });
  return { ...instance };
};

const customFireEvent = {
  ...fireEvent,
  type: (element: HTMLElement, value: string | number) => {
    fireEvent.change(element, { target: { value: value.toString() } });
  },
};

export * from "@testing-library/react";

export { customRender as render, customFireEvent as fireEvent };
