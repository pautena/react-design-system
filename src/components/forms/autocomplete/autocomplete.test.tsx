import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { selectOption } from "../../../tests/actions";
import { expectProgressIndicator } from "../../../tests/assertions";
import { render, screen } from "../../../tests/testing-library";
import Autocomplete from "./autocomplete";

const options: string[] = [...faker.definitions.vehicle.model];

describe("Autocomplete", () => {
  const renderComponent = ({
    value,
    loading,
    fetching,
  }: {
    value?: string;
    loading?: boolean;
    fetching?: boolean;
  } = {}) => {
    const onChangeValue = vi.fn();

    render(
      <Autocomplete
        label="Car model"
        loading={loading}
        fetching={fetching}
        value={value}
        options={options}
        onChangeValue={onChangeValue}
      />,
    );

    return { onChangeValue };
  };

  it("renders a label", () => {
    renderComponent();

    expect(screen.getByRole("combobox", { name: /car model/i })).toBeVisible();
  });

  it("renders the value when provided", () => {
    const value = options[3];
    renderComponent({ value });

    expect(screen.getByRole("combobox")).toHaveValue(value);
  });

  it("calls onChangeValue when selected value changes", async () => {
    const { onChangeValue } = renderComponent();

    await selectOption(screen.getByRole("combobox"), "Model T");

    expect(onChangeValue).toHaveBeenCalledTimes(1);
    expect(onChangeValue).toHaveBeenCalledWith(expect.any(Object), "Model T");
  });

  it("filters options when user types", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByRole("combobox"), "Rang");

    expect(screen.getByRole("option", { name: "Durango" })).toBeVisible();
    expect(screen.getByRole("option", { name: "Wrangler" })).toBeVisible();
  });

  it("renders a loading indicator when loading", () => {
    renderComponent({ loading: true });

    expectProgressIndicator();
  });

  it("renders a loading indicator when fetching", () => {
    renderComponent({ fetching: true });

    expectProgressIndicator();
  });
});
