import React from "react";
import { Label, LabelVariant } from "./label";
import { render, screen } from "../../tests";
import { PaletteMode } from "@mui/material";

describe("Label", () => {
  const renderComponent = (variant: LabelVariant | undefined = undefined) => {
    return render(<Label variant={variant} text="lorem ipsum" />);
  };

  it("renders the label text", () => {
    renderComponent();

    expect(screen.getByText("LOREM IPSUM")).toBeInTheDocument();
  });

  it.each([["primary"], ["secondary"], ["default"], ["info"], ["warning"], ["error"]])(
    "renders correctly with variant %s",
    (variant: string) => {
      const { container } = renderComponent(variant as LabelVariant);

      expect(screen.getByLabelText(variant)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    },
  );
});
