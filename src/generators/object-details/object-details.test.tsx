import React from "react";
import { render, screen } from "../../tests";
import { ObjectDetails } from "./object-details";
import { details } from "./object-details.mock";
import { DetailValue } from "./object-details.types";

describe("ObjectDetails", () => {
  const renderComponent = () => {
    return render(<ObjectDetails details={details} />);
  };

  const assertDetail = (detail: DetailValue) => {
    const { type, value, name, description } = detail;

    if (type === "group") {
      expect(screen.getByRole("heading", { level: 1, name }));
      expect(screen.getByRole("heading", { level: 2, name: description }));
      value.forEach((groupValue) => assertDetail(groupValue));
      return;
    }

    expect(screen.getByRole("label", { name: name })).toBeInTheDocument();
    if (type === "boolean") {
      expect(screen.getByTestId(value ? "CheckIcon" : "CloseIcon")).toBeInTheDocument();
    } else {
      expect(screen.getByText(value)).toBeInTheDocument();
    }
  };

  it("would render a label/value pair for each detail", () => {
    renderComponent();

    details.forEach((detail) => {
      assertDetail(detail);
    });
  });
});
