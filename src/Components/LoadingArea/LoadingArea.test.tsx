import React from "react";
import { expectProgressIndicator } from "~/Tests/Assertions";
import { render } from "~/Tests/TestingLibrary";
import { LoadingArea } from "./LoadingArea";

describe("LoadingArea", () => {
  it("would render a loading icon", () => {
    render(<LoadingArea />);

    expectProgressIndicator();
  });
});
