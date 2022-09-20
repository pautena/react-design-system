import { AlertColor } from "@mui/material";
import { ModelField } from "../generators";
import { screen, waitForElementToBeRemoved } from "./testing-library";
import { format } from "date-fns";
import { MockInstance } from "../generators/generators.mock";

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
    } else if (field.type === "enum" || field.type === "multienum") {
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
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    } else if (field.type === "boolean") {
      expect(
        screen.getByRole("checkbox", { name: field.name, checked: value }),
      ).toBeInTheDocument();
    } else if (field.type === "date" || field.type === "time" || field.type === "datetime") {
      const expectedDateValue = format(value, field.format);
      expect(screen.getByRole("textbox", { name: field.name })).toHaveAttribute(
        "value",
        expectedDateValue,
      );
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
  } else if (type === "date" || type === "time" || type === "datetime") {
    const formatedValue = format(value, field.format);
    expect(screen.getByLabelText(name)).toHaveTextContent(formatedValue);
  } else {
    expect(screen.getByLabelText(name)).toHaveTextContent(value);
  }
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
  title && expect(await screen.findByText(title)).toBeInTheDocument();
  expect(await screen.findByText(message)).toBeInTheDocument();
};

export const expectToHaveBeenCalledOnceWithMockInstance = (
  mockFn: jest.Mock,
  instance: MockInstance,
) => {
  expect(mockFn).toHaveBeenCalledTimes(1);

  const calledReturnTime: Date = mockFn.mock.calls[0][0].car.returnTime;
  const calledTradeDate: Date = mockFn.mock.calls[0][0].tradeDate;

  expect(mockFn).toHaveBeenCalledWith({
    id: instance.id,
    firstName: instance.firstName,
    middleName: instance.middleName,
    lastName: instance.lastName,
    gender: instance.gender,
    age: instance.age,
    birthDate: instance.birthDate,
    car: {
      model: instance.car.model,
      manufacturer: instance.car.manufacturer,
      color: instance.car.color,
      type: instance.car.type,
      vin: instance.car.vin,
      vrm: instance.car.vrm,
      returnTime: new Date(
        calledReturnTime.getFullYear(),
        calledReturnTime.getMonth(),
        calledReturnTime.getDate(),
        instance.car.returnTime.getHours(),
        instance.car.returnTime.getMinutes(),
        calledReturnTime.getSeconds(),
        calledReturnTime.getMilliseconds(),
      ),
    },
    quantity: instance.quantity,
    available: instance.available,
    currency: instance.currency,
    tradeDate: new Date(
      instance.tradeDate.getFullYear(),
      instance.tradeDate.getMonth(),
      instance.tradeDate.getDate(),
      instance.tradeDate.getHours(),
      instance.tradeDate.getMinutes(),
      calledTradeDate.getSeconds(),
      calledTradeDate.getMilliseconds(),
    ),
  });
};
