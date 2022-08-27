import React from "react";
import { ModelForm } from "./model-form";
import {
  expectModelFieldInputExist,
  expectModelFieldInputValue,
  render,
  screen,
  selectOption,
  selectOptions,
} from "../../tests";
import { createModelInstance, MockInstance, mockModel } from "../generators.mock";
import userEvent from "@testing-library/user-event";

describe("ModelForm", () => {
  const renderComponent = ({
    initialValues = undefined,
  }: { initialValues?: MockInstance } = {}) => {
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

  it("would render a button", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });

  it("would render an input for each model", () => {
    renderComponent();

    expectModelFieldInputExist(mockModel.fields);
  });

  it("would render the initial value if initialValues is provided", () => {
    const initialValues = createModelInstance<MockInstance>(mockModel);
    renderComponent({ initialValues });

    expectModelFieldInputValue(mockModel.fields, initialValues);
  });

  it("would call onSubmit if I fullfill all inputs and press the submit button", async () => {
    const { onSubmit } = renderComponent();

    await userEvent.type(screen.getByRole("textbox", { name: "Id" }), "Id-1");
    await userEvent.type(screen.getByRole("textbox", { name: /first name/i }), "Karianne");
    await userEvent.type(screen.getByRole("textbox", { name: /middle name/i }), "Noah");
    await userEvent.type(screen.getByRole("textbox", { name: /last name/i }), "Gorczany");
    await selectOption(screen.getByRole("button", { name: /gender/i }), "Cis Man");
    await userEvent.type(screen.getByRole("spinbutton", { name: /age/i }), "37");
    await userEvent.type(
      screen.getByRole("textbox", { name: /birth date/i }),
      "Tue Nov 26 2047 12:14:19",
    );
    await selectOption(screen.getByRole("button", { name: /model/i }), "Spyder");
    await selectOption(screen.getByRole("button", { name: /manufacturer/i }), "Bugatti");
    await userEvent.type(screen.getByRole("textbox", { name: /color/i }), "red");
    await selectOptions(screen.getByRole("button", { name: /type/i }), [
      "Coupe",
      "Hatchback",
      "Minivan",
    ]);
    await userEvent.type(screen.getByRole("textbox", { name: /vin/i }), "46N6UE4VJ2XL28828");
    await userEvent.type(screen.getByRole("textbox", { name: /vrm/i }), "NE51AFH");
    await userEvent.type(screen.getByRole("spinbutton", { name: /q/i }), "9");
    await userEvent.click(screen.getByRole("checkbox", { name: /available/i }));
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
      age: 37,
      birthDate: "Tue Nov 26 2047 12:14:19",
      car: {
        model: "Spyder",
        manufacturer: "Bugatti",
        color: "red",
        type: ["Coupe", "Hatchback", "Minivan"],
        vin: "46N6UE4VJ2XL28828",
        vrm: "NE51AFH",
      },
      quantity: 9,
      available: true,
      currency: "mxn",
      tradeDate: "Thu Jul 21 2022 22:44:10",
    });
  });
});
