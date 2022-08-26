import { AlertColor } from "@mui/material";
import { ModelField } from "../generators";
import { screen, waitForElementToBeRemoved } from "./testing-library";

export const expectContentPlaceholder = async () => {
  expect(await screen.findByTestId(/content-placeholder-test/i)).toBeInTheDocument();
};

export const expectModelFieldInputExist = (fields: ModelField[]) => {
  fields.forEach((field) => {
    if (field.type === "group") {
      expectModelFieldInputExist(field.value);
    } else if (field.type === "number") {
      expect(screen.getByRole("spinbutton", { name: field.name })).toBeInTheDocument();
    } else if (field.type === "boolean") {
      expect(screen.getByRole("checkbox", { name: field.name })).toBeInTheDocument();
    } else if (field.type === "enum") {
      expect(
        screen.getByRole("button", { name: new RegExp(field.name.toLowerCase(), "i") }),
      ).toBeInTheDocument();
    } else {
      expect(screen.getByRole("textbox", { name: field.name })).toBeInTheDocument();
    }
  });
};

export const expectModelFieldInputValue = (fields: ModelField[], initialValues: object) => {
  fields.forEach((field) => {
    const value = initialValues[field.id];
    if (field.type === "group") {
      expectModelFieldInputValue(field.value, value);
    } else if (field.type === "number") {
      expect(screen.getByDisplayValue(value.toString())).toBeInTheDocument();
    } else if (field.type === "boolean") {
      expect(
        screen.getByRole("checkbox", { name: field.name, checked: value }),
      ).toBeInTheDocument();
    } else {
      expect(screen.getByDisplayValue(value.toString())).toBeInTheDocument();
    }
  });
};

export const expectModelFieldValue = (field: ModelField, instance: object) => {
  const { id, type, name, description } = field;
  const value = instance[id];

  if (type === "group") {
    expect(screen.getByRole("heading", { level: 1, name }));
    expect(screen.getByRole("heading", { level: 2, name: description }));
    field.value.forEach((groupValue) => expectModelFieldValue(groupValue, value));
    return;
  }

  expect(screen.getByRole("label", { name: name })).toBeInTheDocument();
  if (type === "boolean") {
    expect(screen.getByTestId(value ? "CheckIcon" : "CloseIcon")).toBeInTheDocument();
  } else {
    expect(screen.getByLabelText(name)).toHaveTextContent(value);
    //expect(screen.getByText(value)).toBeInTheDocument();
  }
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
