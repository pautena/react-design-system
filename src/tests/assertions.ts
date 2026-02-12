import type { AlertColor } from "@mui/material";
import { format } from "date-fns";
import { screen, waitForElementToBeRemoved } from "./testing-library";

export const expectContentPlaceholder = async () => {
  expect(
    await screen.findByTestId(/content-placeholder-test/i),
  ).toBeInTheDocument();
};

export const assertDatetimeInputValue = (
  element: HTMLElement,
  { value, fmt }: { value: Date; fmt: string },
) => {
  const expectedDateValue = format(value, fmt);

  expect(element).toHaveValue(expectedDateValue);
};

export const expectProgressIndicator = () => {
  expect(screen.getByRole("progressbar")).toBeInTheDocument();
};

export const waitForProgressIndicatorToBeRemoved = async () => {
  await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));
};

export const waitForProgressFinish = async () => {
  await screen.findByRole("progressbar");
  await waitForProgressIndicatorToBeRemoved();
};

export const expectAlert = async ({
  title,
  message,
  severity,
}: {
  title?: RegExp | string;
  message: RegExp | string;
  severity: AlertColor;
}) => {
  const alertElement = await screen.findByRole("alert");
  expect(alertElement).toBeInTheDocument();
  expect(alertElement).toHaveAttribute("aria-label", severity);
  if (title) {
    expect(await screen.findByText(title)).toBeInTheDocument();
  }
  expect(await screen.findByText(message)).toBeInTheDocument();
};

export enum AssertCloseDateUpTo {
  Year = 1,
  Month = 2,
  Day = 3,
  Hour = 4,
  Minute = 5,
  Seconds = 6,
  Milliseconds = 7,
}
export const assertCloseDate = (
  date: Date,
  expectedDate: Date,
  upTo: AssertCloseDateUpTo,
) => {
  if (upTo >= AssertCloseDateUpTo.Year) {
    expect(date.getFullYear()).toBe(expectedDate.getFullYear());
  }
  if (upTo >= AssertCloseDateUpTo.Month) {
    expect(date.getMonth()).toBe(expectedDate.getMonth());
  }
  if (upTo >= AssertCloseDateUpTo.Day) {
    expect(date.getDay()).toBe(expectedDate.getDay());
  }
  if (upTo >= AssertCloseDateUpTo.Hour) {
    expect(date.getHours()).toBe(expectedDate.getHours());
  }
  if (upTo >= AssertCloseDateUpTo.Minute) {
    expect(date.getMinutes()).toBe(expectedDate.getMinutes());
  }
  if (upTo >= AssertCloseDateUpTo.Seconds) {
    expect(date.getSeconds()).toBe(expectedDate.getSeconds());
  }
  if (upTo >= AssertCloseDateUpTo.Milliseconds) {
    expect(date.getMilliseconds()).toBe(expectedDate.getMilliseconds());
  }
};
