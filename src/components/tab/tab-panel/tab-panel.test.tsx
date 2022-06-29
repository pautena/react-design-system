import React from "react";
import { render, screen } from "@testing-library/react";
import { TabPanel } from "./tab-panel";
import { TabContextProvider } from "../tab.context";

describe("TabPanel", () => {
  function renderInstance(value: number) {
    render(
      <TabContextProvider value={value}>
        <TabPanel index={0}>Panel content</TabPanel>
      </TabContextProvider>,
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
