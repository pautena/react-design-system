import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { vi } from "vitest";
import { render, screen } from "../../../tests/testing-library";
import Select from "./select";

describe("Select", () => {
  const renderComponent = ({
    label = "Dummy select",
    loading = false,
    fetching = false,
    helperText,
    error,
  }: {
    label?: string;
    loading?: boolean;
    fetching?: boolean;
    helperText?: string;
    error?: string;
  } = {}) => {
    const options = ["option1", "option2", "option3"];
    const value = "option1";
    const onChange = vi.fn();
    const onChangeValue = vi.fn();

    render(
      <Select
        value={value}
        label={label}
        loading={loading}
        fetching={fetching}
        helperText={helperText}
        error={error}
        onChange={onChange}
        onChangeValue={onChangeValue}
        options={options.map((option) => ({ value: option, label: option }))}
      />,
    );

    return {
      options,
      value,
      onChange,
      onChangeValue,
    };
  };

  it("renders a select with a label", () => {
    renderComponent({ label: "Lorem ipsum" });

    expect(
      screen.getByRole("combobox", { name: /lorem ipsum/i }),
    ).toBeInTheDocument();
  });

  it("renders the current value", () => {
    const { value } = renderComponent();

    expect(screen.getByRole("combobox")).toHaveValue(value);
  });

  it("renders a progress indicator when loading", () => {
    renderComponent({ loading: true });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("option1");
  });

  it("renders a progress indicator and hides selected value when fetching", () => {
    renderComponent({ fetching: true });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("");
    expect(
      screen.getByRole("option", { name: /loading options/i }),
    ).toBeVisible();
  });

  it("renders one option for each provided option", () => {
    const { options } = renderComponent({ label: "Lorem ipsum" });

    options.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    });
  });

  it("calls onChange when selecting a different value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onChangeValue = vi.fn();

    const ControlledSelect = () => {
      const [value, setValue] = useState("option1");

      return (
        <Select
          value={value}
          label="Dummy select"
          options={[
            { value: "option1", label: "option1" },
            { value: "option2", label: "option2" },
            { value: "option3", label: "option3" },
          ]}
          onChange={(event) => {
            setValue(event.target.value);
            onChange(event);
          }}
          onChangeValue={onChangeValue}
        />
      );
    };

    render(<ControlledSelect />);

    await user.selectOptions(screen.getByRole("combobox"), "option2");

    expect(onChange).toHaveBeenCalled();
    expect(onChangeValue).toHaveBeenCalled();
    expect(onChangeValue.mock.calls.at(-1)?.[1]).toBe("option2");
    expect(screen.getByRole("combobox")).toHaveValue("option2");
  });

  it("renders helper text", () => {
    renderComponent({ helperText: "Select your vehicle model" });

    expect(screen.getByText(/select your vehicle model/i)).toBeVisible();
  });

  it("renders error text and marks select invalid", () => {
    renderComponent({ error: "Please select a model" });

    expect(screen.getByRole("alert")).toHaveTextContent(
      /please select a model/i,
    );
    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });
});
