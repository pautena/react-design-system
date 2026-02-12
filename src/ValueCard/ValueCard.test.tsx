import type { ReactElement } from "react";
import { render, screen } from "../tests/testing-library";
import { ValueText } from "../ValueText";
import { ValueCard } from "./ValueCard";

describe("ValueCard", () => {
  const renderComponent = ({ children }: { children: ReactElement }) => {
    return render(<ValueCard>{children}</ValueCard>);
  };

  it("would render with a ValueText inside", () => {
    renderComponent({
      children: <ValueText label="Hello world" value="Lorem ipsum sit amet" />,
    });

    expect(
      screen.getByRole("label", { name: /hello world/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/lorem ipsum sit amet/i)).toBeInTheDocument();
  });
});
