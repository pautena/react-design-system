import React from "react";
import { Typography } from "@mui/material";
import { render, screen } from "~/Tests/TestingLibrary";
import { CenterContainer } from "./CenterContainer";

describe("CenterContainer", () => {
  it("would render the children", () => {
    render(
      <CenterContainer>
        <Typography>Content</Typography>
      </CenterContainer>,
    );

    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });
});
