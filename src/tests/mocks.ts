export const mockConsoleError = () => {
  mockConsole("error");
};

export const mockConsoleWarn = () => {
  mockConsole("warn");
};

export const mockConsole = (severity: "error" | "warn") => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let logFn: (message?: any, ...optionalParams: any[]) => void;

  beforeEach(() => {
    logFn = console[severity];
    console[severity] = jest.fn();
  });

  afterEach(() => {
    console[severity] = logFn;
  });
};
