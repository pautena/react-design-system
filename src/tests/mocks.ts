export const mockConsoleError = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let errorFn: (message?: any, ...optionalParams: any[]) => void;

  beforeEach(() => {
    errorFn = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorFn;
  });
};
