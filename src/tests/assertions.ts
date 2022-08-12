import { AlertColor } from "@mui/material";
import { ModelField } from "../generators";
import { screen, waitForElementToBeRemoved } from "./testing-library";

export const expectModelFieldInputExist = (fields: ModelField[]) => {
  fields.forEach((field) => {
    if (field.type === "group") {
      expectModelFieldInputExist(field.value);
    } else if (field.type === "number") {
      expect(screen.getByRole("spinbutton", { name: field.name })).toBeInTheDocument();
    } else {
      expect(screen.getByRole("textbox", { name: field.name })).toBeInTheDocument();
    }
  });
};

export const expectProgressIndicator = () => {
  expect(screen.getByRole("progressbar")).toBeInTheDocument();
};

export const waitForProgressIndicatorToBeRemoved = async () => {
  await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));
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
  title && expect(await screen.findByText(title)).toBeInTheDocument();
  expect(await screen.findByText(message)).toBeInTheDocument();
};
