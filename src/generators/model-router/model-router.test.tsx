import React from "react";
import { DefaultModelRouter } from "./model-router.stories";
import { render, screen, TestRouter } from "../../tests";
import userEvent from "@testing-library/user-event";

describe("ModelRouer", () => {
  const assertions = {
    expectListScreen: () =>
      screen.getByRole("heading", {
        name: "Items",
        level: 1,
      }),
    expectAddScreen: () =>
      screen.getByRole("heading", {
        name: "Add Items",
        level: 1,
      }),
  };

  const actions = {
    navigateToAddScreen: async () => {
      await userEvent.click(screen.getByRole("button", { name: /add/i }));
    },
  };

  const renderComponent = ({ router = "browser" }: { router?: TestRouter } = {}) => {
    return render(<DefaultModelRouter {...DefaultModelRouter.args} />, {
      router,
    });
  };

  describe("renders the correct screen", () => {
    it("would render the list screen by default", () => {
      const { history } = renderComponent({ router: "memory" });

      expect(history.location.pathname).toBe("/");
    });

    it("would have the path /add if navigates to the add screen", async () => {
      const { history } = renderComponent({ router: "memory" });

      await actions.navigateToAddScreen();

      expect(history.location.pathname).toBe("/add");
    });
  });
});
