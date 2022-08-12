import React from "react";
import { render, screen, expectProgressIndicator } from "../../tests";
import { LoadingArea } from "./loading-area";

describe("LoadingArea", () => {
  it("would render a loading icon", () => {
    render(<LoadingArea />);

    expectProgressIndicator();
  });
});
