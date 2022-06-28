import React from "react";
import { render, screen } from "tests";
import userEvent from "@testing-library/user-event";
import { Header } from "./header";

function renderInstance() {
  return render(
    <Header
      title="lorem ipsum"
      breadcrumbs={[
        {
          id: "level-1",
          text: "level 1",
          link: "/level/1",
        },
        {
          id: "level-2",
          text: "level 2",
          link: "/level/2",
        },
      ]}
    />,
  );
}

describe("Header", () => {
  it("renders the title", () => {
    renderInstance();

    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
  });

  it("render the breadcumbs", () => {
    renderInstance();

    expect(screen.getByText(/level 1/i)).toBeInTheDocument();
    expect(screen.getByText(/level 2/i)).toBeInTheDocument();
  });

  it("clicks a breadcumb I navigate to it", async () => {
    const { history } = renderInstance();

    await userEvent.click(screen.getByText(/level 1/i));

    expect(history.location.pathname).toBe("/level/1");
  });
});
