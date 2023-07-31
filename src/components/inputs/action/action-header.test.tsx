import { render, screen } from "@testing-library/react";
import { ActionHeader } from "./action-header";
import React from "react";

describe("ActionHeader", () => {
  it("should render the title", () => {
    render(<ActionHeader title="Lorem ipsum" />);

    expect(screen.getByRole("heading", { name: /lorem ipsum/i, level: 4 }));
  });
});
