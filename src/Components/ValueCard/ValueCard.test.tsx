import React from "react";
import { ValueCard } from "./ValueCard";
import { render, screen } from "~/Tests/TestingLibrary";
import { ReactElement } from "react";
import { ValueText } from "../ValueText";

describe("ValueCard", () => {
  const renderComponent = ({ children }: { children: ReactElement }) => {
    return render(<ValueCard>{children}</ValueCard>);
  };

  it("would render with a ValueText inside", () => {
    renderComponent({ children: <ValueText label="Hello world" value="Lorem ipsum sit amet" /> });

    expect(screen.getByRole("label", { name: /hello world/i })).toBeInTheDocument();
    expect(screen.getByText(/lorem ipsum sit amet/i)).toBeInTheDocument();
  });
});
