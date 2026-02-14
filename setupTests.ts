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
});

beforeEach(() => {
  vi.resetAllMocks();
});

beforeEach(() => {
  vi.resetAllMocks();
});

beforeEach(() => {
  vi.resetAllMocks();
});

beforeEach(() => {
  vi.resetAllMocks();
});

beforeEach(() => {
  vi.resetAllMocks();
});
