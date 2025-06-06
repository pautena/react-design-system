import { vi } from "vitest";
import {
  BirthDateFormat,
  type MockInstance,
  ReturnTimeFormat,
  TradeDateFormat,
  createModelInstance,
  mockModel,
} from "../generators/generators.mock";
import {
  pickDatetime,
  selectOption,
  selectOptions,
  typeNumericInput,
} from "../tests/actions";
import {
  expectModelFieldInputExist,
  expectModelFieldInputValue,
  expectToHaveBeenCalledOnceWithMockInstance,
} from "../tests/assertions";
import { fireEvent, render, screen } from "../tests/testing-library";
import { ModelForm } from "./model-form";

describe("ModelForm", () => {
  const renderComponent = ({
    initialValues = undefined,
  }: { initialValues?: MockInstance } = {}) => {
    const onSubmit = vi.fn();
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

  describe("required", () => {
    it("should render as required the required fields", () => {
      renderComponent();

      expect(screen.getByLabelText(/first name/i)).toBeRequired();
      expect(screen.getByLabelText(/last name/i)).toBeRequired();
      expect(screen.getByLabelText(/codes/i)).toBeRequired();
    });

    it("should render as non required the non required fields", () => {
      renderComponent();

      expect(screen.getByLabelText(/middle name/i)).not.toBeRequired();
      expect(screen.getByLabelText(/age/i)).not.toBeRequired();
    });
  });

  it("would render the initial value if initialValues is provided", () => {
    const initialValues = createModelInstance<MockInstance>(mockModel);
    renderComponent({ initialValues });

    expectModelFieldInputValue(mockModel.fields, initialValues);
  });

  it.skip("would call onSubmit if I fullfill all inputs and press the submit button", async () => {
    const { onSubmit } = renderComponent();
    const birthDate = new Date(2047, 11, 26);
    const returnTime = new Date(1970, 0, 1, 10, 12);
    const tradeDate = new Date(2047, 11, 26, 12, 50);

    fireEvent.type(screen.getByRole("textbox", { name: "Id" }), "Id-1");
    fireEvent.type(
      screen.getByRole("textbox", { name: /first name/i }),
      "Karianne",
    );
    fireEvent.type(
      screen.getByRole("textbox", { name: /middle name/i }),
      "Noah",
    );
    fireEvent.type(
      screen.getByRole("textbox", { name: /last name/i }),
      "Gorczany",
    );
    typeNumericInput(screen.getByRole("spinbutton", { name: /age/i }), 37);
    pickDatetime(
      screen.getByRole("textbox", { name: /birth date/i }),
      birthDate,
      BirthDateFormat,
    );
    await selectOption(
      screen.getByRole("button", { name: /model/i }),
      "Spyder",
    );
    await selectOption(
      screen.getByRole("button", { name: /manufacturer/i }),
      "Bugatti",
    );
    fireEvent.type(screen.getByRole("textbox", { name: /color/i }), "red");
    await selectOptions(screen.getByRole("button", { name: /type/i }), [
      "Coupe",
      "Hatchback",
      "Minivan",
    ]);
    fireEvent.type(
      screen.getByRole("textbox", { name: /vin/i }),
      "46N6UE4VJ2XL28828",
    );
    fireEvent.type(screen.getByRole("textbox", { name: /vrm/i }), "NE51AFH");
    pickDatetime(
      screen.getByRole("textbox", { name: /return time/i }),
      returnTime,
      ReturnTimeFormat,
    );
    typeNumericInput(screen.getByRole("spinbutton", { name: /q/i }), 9);
    fireEvent.click(screen.getByRole("checkbox", { name: /available/i }));
    fireEvent.type(screen.getByRole("textbox", { name: /currency/i }), "mxn");
    pickDatetime(
      screen.getByRole("textbox", { name: /trade date/i }),
      tradeDate,
      TradeDateFormat,
    );
    fireEvent.type(screen.getByRole("textbox", { name: /codes/i }), "foo,bar");
    fireEvent.type(
      screen.getByRole("textbox", { name: /identifiers/i }),
      "1,2,3",
    );

    fireEvent.click(screen.getByRole("button", { name: /save/i }));

    expectToHaveBeenCalledOnceWithMockInstance(onSubmit, {
      id: "Id-1",
      firstName: "Karianne",
      middleName: "Noah",
      lastName: "Gorczany",
      age: 37,
      birthDate,
      car: {
        model: "Spyder",
        manufacturer: "Bugatti",
        color: "red",
        type: ["Coupe", "Hatchback", "Minivan"],
        vin: "46N6UE4VJ2XL28828",
        vrm: "NE51AFH",
        returnTime,
      },
      quantity: 9,
      available: true,
      currency: "mxn",
      tradeDate,
      codes: ["foo", "bar"],
      identifiers: ["1", "2", "3"],
    });
  });
});
