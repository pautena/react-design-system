import React, { ReactElement } from "react";
import { render, screen } from "../../tests";
import userEvent from "@testing-library/user-event";
import { Placeholder, PlaceholderAction } from "./placeholder";
import { actions as actionData } from "./placeholder.mock";
import SearchIcon from "@mui/icons-material/Search";

const actions = actionData.map((a) => ({ ...a, onClick: jest.fn() }));

describe("Placeholder", () => {
  const renderComponent = ({
    actions = undefined,
    icon = undefined,
  }: { actions?: PlaceholderAction[]; icon?: ReactElement } = {}) => {
    return render(
      <Placeholder
        title="Lorem ipsum"
        subtitle="Lorem ipsum sit amet"
        actions={actions}
        icon={() => icon}
      />,
    );
  };

  it("would render the title", () => {
    renderComponent();

    expect(screen.getByRole("heading", { name: /lorem ipsum/i, level: 1 })).toBeInTheDocument();
  });

  it("would render the subtitle", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /lorem ipsum sit amet/i, level: 2 }),
    ).toBeInTheDocument();
  });

  describe("icon", () => {
    it("wouldn't render an icon if it's not set", () => {
      renderComponent({ icon: undefined });

      expect(screen.queryByTestId("SearchIcon")).not.toBeInTheDocument();
    });

    it("would render an icon if it's set", () => {
      renderComponent({ icon: <SearchIcon /> });

      expect(screen.queryByTestId("SearchIcon")).toBeInTheDocument();
    });
  });

  describe("actions", () => {
    it("wouldn't render an action if they are not set", () => {
      renderComponent({ actions: undefined });

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("would render a button for each action", () => {
      renderComponent({ actions });

      expect(screen.queryAllByRole("button")).toHaveLength(actions.length);
      expect(screen.queryByRole("button", { name: /add/i })).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /edit/i })).toBeInTheDocument();
    });

    it("would call onClick if a button is clicked", async () => {
      renderComponent({ actions });

      await userEvent.click(screen.getByRole("button", { name: /edit/i }));

      expect(actions[1].onClick).toHaveBeenCalledTimes(1);
    });
  });
});
