import "@testing-library/jest-dom";
import { vi } from "vitest";

beforeAll(() => {
  const originalError = console.error;
  console.error = (...data: any[]) => {
    if (data.length > 0) {
      const error = data[0] as string;
      if (
        error.startsWith("Warning: An update to") ||
        error.startsWith("Warning: Failed prop type")
      ) {
        return;
      }
    }
    originalError(...data);
  };

  // Set MUI test environment flag to disable layout-related warnings in JSDOM
  // MUI checks for this flag to skip getBoundingClientRect validation in tests
  // See: https://github.com/mui/material-ui/blob/master/packages/mui-material/src/Popper/BasePopper.js
  globalThis.MUI_TEST_ENV = true;

  const matchMediaMock = vi.fn().mockImplementation(() => ({
    matches: false,
    media: "",
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

  Object.defineProperty(globalThis, "matchMedia", {
    writable: true,
    value: matchMediaMock,
  });

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: matchMediaMock,
  });

  if (!("setPointerCapture" in HTMLElement.prototype)) {
    HTMLElement.prototype.setPointerCapture = () => {};
  }

  if (!("releasePointerCapture" in HTMLElement.prototype)) {
    HTMLElement.prototype.releasePointerCapture = () => {};
  }
});

beforeEach(() => {
  vi.clearAllMocks();
});
