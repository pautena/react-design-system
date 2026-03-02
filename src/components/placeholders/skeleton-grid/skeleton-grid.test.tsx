import { render } from "@/tests/testing-library";
import { SkeletonGrid } from "./skeleton-grid";

describe("SkeletonGrid", () => {
  it("renders default amount of skeleton cards", () => {
    const { container } = render(<SkeletonGrid />);

    expect(container.querySelectorAll(".bg-muted")).toHaveLength(60);
  });

  it("renders custom amount of skeleton cards", () => {
    const { container } = render(<SkeletonGrid size={3} />);

    expect(container.querySelectorAll(".bg-muted")).toHaveLength(9);
  });
});
