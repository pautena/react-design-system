import React from "react";
import { ModelForm } from "./model-form";
import { expectModelFieldInputExist, render, screen } from "../../tests";
import { createModelInstance, mockModel } from "../generators.mock";
import { ModelField } from "../generators.model";
import userEvent from "@testing-library/user-event";

describe("ModelForm", () => {
  const renderComponent = ({ initialValues = undefined }: { initialValues?: object } = {}) => {
    const onSubmit = jest.fn();
    const instance = render(
      <ModelForm
        model={mockModel}
        initialValues={initialValues}
        saveButtonText="save"
        onSubmit={onSubmit}
      />,
    );

    return { ...instance, onSubmit };
  };

  const assertInputsValues = (fields: ModelField[], initialValues: object) => {
    fields.forEach((field) => {
      const value = initialValues[field.id];
      if (field.type === "group") {
        assertInputsValues(field.value, value);
      } else if (field.type === "number") {
        expect(screen.getByDisplayValue(value)).toBeInTheDocument();
      } else {
        expect(screen.getByDisplayValue(value)).toBeInTheDocument();
      }
    });
  };

  it("would render a button", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });

  it("would render an input for each model", () => {
    renderComponent();

    expectModelFieldInputExist(mockModel.fields);
  });

  it("would render the initial value if initialValues is provided", () => {
    const initialValues = createModelInstance(mockModel);
    renderComponent({ initialValues });

    assertInputsValues(mockModel.fields, initialValues);
  });

  it("would call onSubmit if I fullfill all inputs and press the submit button", async () => {
    const { onSubmit } = renderComponent();

    await userEvent.type(screen.getByRole("textbox", { name: "Id" }), "Id-1");
    await userEvent.type(screen.getByRole("textbox", { name: /first name/i }), "Karianne");
    await userEvent.type(screen.getByRole("textbox", { name: /middle name/i }), "Noah");
    await userEvent.type(screen.getByRole("textbox", { name: /last name/i }), "Gorczany");
    await userEvent.type(screen.getByRole("textbox", { name: /gender/i }), "Cis Man");
    await userEvent.type(screen.getByRole("spinbutton", { name: /age/i }), "37");
    await userEvent.type(
      screen.getByRole("textbox", { name: /birth date/i }),
      "Tue Nov 26 2047 12:14:19",
    );
    await userEvent.type(screen.getByRole("textbox", { name: /model/i }), "Spyder");
    await userEvent.type(screen.getByRole("textbox", { name: /manufacturer/i }), "Bugatti");
    await userEvent.type(screen.getByRole("textbox", { name: /color/i }), "red");
    await userEvent.type(screen.getByRole("textbox", { name: /type/i }), "Convertible");
    await userEvent.type(screen.getByRole("textbox", { name: /vin/i }), "46N6UE4VJ2XL28828");
    await userEvent.type(screen.getByRole("textbox", { name: /vrm/i }), "NE51AFH");
    await userEvent.type(screen.getByRole("spinbutton", { name: /q/i }), "9");
    await userEvent.type(screen.getByRole("textbox", { name: /available/i }), "true");
    await userEvent.type(screen.getByRole("textbox", { name: /currency/i }), "mxn");
    await userEvent.type(
      screen.getByRole("textbox", { name: /trade date/i }),
      "Thu Jul 21 2022 22:44:10",
    );

    await userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      id: "Id-1",
      firstName: "Karianne",
      middleName: "Noah",
      lastName: "Gorczany",
      gender: "Cis Man",
      age: "37",
      birthDate: "Tue Nov 26 2047 12:14:19",
      car: {
        model: "Spyder",
        manufacturer: "Bugatti",
        color: "red",
        type: "Convertible",
        vin: "46N6UE4VJ2XL28828",
        vrm: "NE51AFH",
      },
      quantity: "9",
      available: "true",
      currency: "mxn",
      tradeDate: "Thu Jul 21 2022 22:44:10",
    });
  });
});
