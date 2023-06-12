import React from "react";
import { render, screen } from "~/tests/testing-library";
import { ValueLabel } from "./value-label";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Label, LabelVariant } from "~/components/data-display";

const DummyValueText = "Lorem ipsum sit amet";
const DummyValueNumber = 1000;
const DummyValueTextList = ["Lorem ipsum", "Dolor", "Sit amet"];
const DummyValueNumberList = [200, 350, 1800];

describe("ValueLabel", () => {
  const renderComponent = ({
    value,
    placeholder,
    variant,
  }: {
    value?: string | number | string[] | number[];
    placeholder?: string;
    variant?: LabelVariant | LabelVariant[];
  }) => {
    render(
      <ValueLabel
        label="Hello world"
        value={value}
        placeholder={placeholder}
        variant={Array.isArray(variant) ? variant[0] : variant!}
      />,
    );
  };

  it("would render the label", () => {
    renderComponent({ value: DummyValueText });

    expect(screen.getByRole("label", { name: /hello world/i })).toBeVisible();
  });

  it("would render the value if it is text", () => {
    renderComponent({ value: DummyValueText, variant: "success" });

    expect(screen.getByText(/lorem ipsum sit amet/i)).toBeInTheDocument();
  });

  it("would render the value if it is a number", () => {
    renderComponent({ value: DummyValueNumber });

    expect(screen.getByText(/1000/i)).toBeInTheDocument();
  });

  it("would render the value if it is a list of texts", () => {
    renderComponent({ value: DummyValueTextList, variant: ["error", "warning"] });

    DummyValueTextList.forEach((text) => expect(screen.getByText(text)).toBeInTheDocument());
  });

  it("would render the value if it is a list of numbers", () => {
    renderComponent({ value: DummyValueNumberList });

    DummyValueNumberList.forEach((number) => expect(screen.getByText(number)).toBeInTheDocument());
  });

  it("should render the placeholder if value is undefined", () => {
    renderComponent({ value: undefined });

    expect(screen.getByText(/-/i)).toBeInTheDocument();
  });
});
