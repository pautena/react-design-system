import { render, screen } from "../../tests/testing-library";
import ValueText from "./value-text";

const DummyValue = "Lorem ipsum sit amet";

describe("ValueText", () => {
  const renderComponent = ({
    value,
    placeholder,
  }: {
    value?: string | number;
    placeholder?: string;
  }) => {
    render(
      <ValueText label="Hello world" value={value} placeholder={placeholder} />,
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

    expect(screen.getByText(/lorem ipsum sit amet/i)).toBeInTheDocument();
  });

  it("would render the value if is a number", () => {
    renderComponent({ value: 1000 });

    expect(screen.getByText(/1000/i)).toBeInTheDocument();
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
