import React from "react";
import { render, screen } from "@testing-library/react";
import { TabPanel } from "./TabPanel";
import { TabProvider } from "~/Providers";

describe("TabPanel", () => {
  function renderInstance(initialValue: number) {
    render(
      <TabProvider initialValue={initialValue}>
        <TabPanel index={0}>Panel content</TabPanel>
      </TabProvider>,
    );
  }

  it("if the provider value is the index the content is displayed", () => {
    renderInstance(0);

    expect(screen.getByText(/panel content/i)).toBeInTheDocument();
  });

  it("if the provider value is not the index the content is not displayed", () => {
    renderInstance(1);

    expect(screen.queryByText(/panel content/i)).not.toBeInTheDocument();
  });
});
