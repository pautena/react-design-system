export const mockConsoleError = () => {
  let errorFn: (message?: any, ...optionalParams: any[]) => void;

  beforeEach(() => {
    errorFn = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorFn;
  });
};
