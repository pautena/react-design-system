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

  const elementPrototype =
    HTMLElement.prototype as typeof HTMLElement.prototype & {
      setPointerCapture?: (pointerId: number) => void;
      releasePointerCapture?: (pointerId: number) => void;
    };

  if (!elementPrototype.setPointerCapture) {
    elementPrototype.setPointerCapture = () => {};
  }

  if (!elementPrototype.releasePointerCapture) {
    elementPrototype.releasePointerCapture = () => {};
  }
});

beforeEach(() => {
  vi.clearAllMocks();
});
