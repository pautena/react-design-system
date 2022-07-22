import React from "react";
import { render, screen } from "../../tests";
import { ObjectDetails } from "./object-details";
import { details } from "./object-details.mock";

describe("ObjectDetails", () => {
  const renderComponent = () => {
    return render(<ObjectDetails details={details} />);
  };

  it("would render a label/value pair for each detail", () => {
    renderComponent();

    details.forEach(({ name, value, type }) => {
      expect(screen.getByRole("label", { name })).toBeInTheDocument();

      if (type === "boolean") {
        expect(screen.getByTestId(value ? "CheckIcon" : "CloseIcon")).toBeInTheDocument();
      } else {
        expect(screen.getByText(value)).toBeInTheDocument();
      }
    });
  });
});
