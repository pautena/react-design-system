import { render } from "../../tests/testing-library";
import { SkeletonCard } from "./skeleton-card";

describe("SkeletonCard", () => {
  it("renders three placeholder bars", () => {
    const { container } = render(<SkeletonCard />);

    expect(container.querySelectorAll(".bg-muted")).toHaveLength(3);
  });

  it("accepts custom width", () => {
    const { container } = render(<SkeletonCard width={250} />);

    const card = container.querySelector("div[style]");
    expect(card).toBeTruthy();
    expect(card).toHaveStyle({ width: "250px" });
  });
});
