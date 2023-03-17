import "@testing-library/jest-dom";

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
});

beforeEach(() => {
  jest.resetAllMocks();
});
