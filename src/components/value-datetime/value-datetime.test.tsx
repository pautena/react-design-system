import { render, screen } from "../../tests/testing-library";
import ValueDatetime from "./value-datetime";

const DummyValue = new Date(2022, 7, 10, 0, 0);
const datetimeFormat = "dd-MM-yyyy HH:mm";

describe("ValueDatetime", () => {
  const renderComponent = ({
    value,
    placeholder,
    fmt = datetimeFormat,
  }: {
    value?: Date;
    placeholder?: string;
    fmt?: string;
  }) => {
    render(
      <ValueDatetime
        label="Hello world"
        value={value}
        placeholder={placeholder}
        format={fmt}
      />,
    );
  };

  it("would render the label", () => {
    renderComponent({ value: DummyValue });

    expect(
      screen.getByRole("label", { name: /hello world/i }),
    ).toBeInTheDocument();
  });

  it("would render the value", () => {
    renderComponent({ value: DummyValue });

    expect(screen.getByText(/10-08-2022/i)).toBeInTheDocument();
  });

  it("should render the placeholder if value is undefined", () => {
    renderComponent({ value: undefined });

    expect(screen.getByText(/-/i)).toBeInTheDocument();
  });

  it("should render the custom placeholder if value is undefined and placeholder has value", () => {
    renderComponent({ value: undefined, placeholder: "_" });

    expect(screen.getByText(/_/i)).toBeInTheDocument();
  });
});
