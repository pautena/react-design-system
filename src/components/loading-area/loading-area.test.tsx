import React from "react";
import { render, screen } from "../../tests";
import { LoadingArea } from "./loading-area";

describe("LoadingArea", () => {
  it("would render a loading icon", () => {
    render(<LoadingArea />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
