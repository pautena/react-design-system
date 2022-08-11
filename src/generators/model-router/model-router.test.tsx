import React from "react";
import { DummyModelRouter } from "./model-router.stories";
import { render, screen, TestRouter, waitForElementToBeRemoved } from "../../tests";
import userEvent from "@testing-library/user-event";
import { getRandomItem } from "../../utils";
import { Model } from "../generators.model";

const REQUEST_TIMEOUT = 100;

describe("ModelRouter", () => {
  const assertions = {
    expectListScreen: async () =>
      await screen.findByRole("heading", {
        name: "Items",
        level: 1,
      }),
    expectAddScreen: async () =>
      await screen.findByRole("heading", {
        name: "Add Items",
        level: 1,
      }),
    expectDetailScreen: async ({ id }: { id: string }) =>
      await screen.findByRole("heading", {
        name: id,
        level: 1,
      }),
    expectUpdateScreen: async ({ id }: { id: string }) =>
      await screen.findByRole("heading", {
        name: `Edit ${id}`,
        level: 1,
      }),
    expectListItems: async ({ data, model }: { data: any[]; model: Model }) => {
      for (let i = 0; i < model.fields.length; ++i) {
        const { id, listable } = model.fields[i];

        if (listable) {
          expect(await screen.findAllByRole("cell", { name: data[id] })).toBeTruthy();
        }
      }
    },
    expectLoadingIndicator: async () => {
      await screen.findByRole("progressbar");
    },
    expectLoadingIndicatorToBeRemoved: async () => {
      await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));
    },
    expectMenuOption: async ({ id }: { id: number }) => {
      await screen.findByTestId(`options-${id}`);
    },
  };

  const actions = {
    navigateToAddScreen: async () => {
      await userEvent.click(screen.getByRole("button", { name: /add/i }));
    },
    navigateToUpdateScreen: async ({ id }: { id: number }) => {
      await actions.openItemOptions({ id });
      await userEvent.click(screen.getByRole("menuitem", { name: /edit/i }));
    },
    navigateToDetailScreen: async ({ name }: { name: string }) => {
      await userEvent.click(await screen.findByRole("cell", { name }));
    },
    openItemOptions: async ({ id }: { id: number }) => {
      await userEvent.click(await screen.findByTestId(`options-${id}`));
    },
  };

  const renderComponent = ({ router = "memory" }: { router?: TestRouter } = {}) => {
    const requestList = jest.fn();
    const args = DummyModelRouter.args;
    const instance = render(
      <DummyModelRouter
        {...args}
        requestTimeout={REQUEST_TIMEOUT}
        requestListAction={requestList}
      />,
      {
        router,
      },
    );

    return { ...instance, data: args.initialData, model: args.model, requestList };
  };

  describe("router screens", () => {
    it("would render the list screen by default", async () => {
      renderComponent();

      await assertions.expectListScreen();
    });

    it("would render the add screen if we navigate there", async () => {
      renderComponent();

      await actions.navigateToAddScreen();

      await assertions.expectAddScreen();
    });

    it("would render the update screen if we navigate there", async () => {
      const { data } = renderComponent();
      const { item } = getRandomItem<any>(data);
      const { id } = item;

      await actions.navigateToUpdateScreen({ id });

      await assertions.expectUpdateScreen({ id });
    });

    it("would render the detail screen if we navigate there", async () => {
      const { data } = renderComponent();
      const {
        item: { id, firstName },
      } = getRandomItem<any>(data);

      await actions.navigateToDetailScreen({ name: firstName });

      await assertions.expectDetailScreen({ id });
    });
  });

  describe("router paths", () => {
    it("would have the pathname / by default", () => {
      const { history } = renderComponent({ router: "router" });

      expect(history.location.pathname).toBe("/");
    });

    it("would have the path /add if navigates to the add screen", async () => {
      const { history } = renderComponent({ router: "router" });

      await actions.navigateToAddScreen();

      expect(history.location.pathname).toBe("/add");
    });

    it("would have the path /:id/update if navigates to the update an item", async () => {
      const { history, data } = renderComponent({ router: "router" });
      const {
        item: { id },
      } = getRandomItem<any>(data);

      await actions.navigateToUpdateScreen({ id });

      expect(history.location.pathname).toBe(`/${id}/update`);
    });

    it("would have the path /:id if navigates to the item details", async () => {
      const { history, data } = renderComponent({ router: "router" });
      const {
        item: { id, firstName },
      } = getRandomItem<any>(data);

      await actions.navigateToDetailScreen({ name: firstName });

      expect(history.location.pathname).toBe(`/${id}`);
    });
  });

  describe("list screen", () => {
    it("would call requestList when is mounted", () => {
      const { requestList } = renderComponent();

      expect(requestList).toHaveBeenCalledTimes(1);
    });

    it("would render a loading indicator until the data is ready", async () => {
      renderComponent();

      await assertions.expectLoadingIndicator();
      await assertions.expectLoadingIndicatorToBeRemoved();
    });

    it("would render a title", () => {
      renderComponent();

      expect(
        screen.getByRole("heading", {
          name: "Items",
          level: 1,
        }),
      ).toBeInTheDocument();
    });

    describe("add button", () => {
      it("would render an add button", () => {
        renderComponent();

        expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
      });

      it("would navigate to the add screen if I press the add button", async () => {
        const { history } = renderComponent({ router: "router" });

        await userEvent.click(screen.getByRole("button", { name: /add/i }));

        expect(history.location.pathname).toBe("/add");
      });
    });

    it("would render a list with the data", async () => {
      const { data, model } = renderComponent();

      await assertions.expectListItems({ data, model });
    });

    it("would navigate to the detail screen if an item is clicked", async () => {
      const { data, history } = renderComponent({ router: "router" });
      const {
        item: { id, firstName },
      } = getRandomItem<any>(data);

      await userEvent.click(await screen.findByRole("cell", { name: firstName }));

      expect(history.location.pathname).toBe(`/${id}`);
    });

    describe("item options", () => {
      it("would have a options button for each item", async () => {
        const { data } = renderComponent();

        for (let i = 0; i < data.length; ++i) {
          const id = (data[i] as any).id;
          await assertions.expectMenuOption({ id });
        }
      });

      it("would render an option to edit", async () => {
        const { data } = renderComponent({ router: "router" });
        const {
          item: { id },
        } = getRandomItem<any>(data);

        await actions.openItemOptions({ id });

        expect(screen.getByRole("menuitem", { name: /edit/i })).toBeInTheDocument();
      });

      it("would render an option to delete", async () => {
        const { data } = renderComponent({ router: "router" });
        const {
          item: { id },
        } = getRandomItem<any>(data);

        await actions.openItemOptions({ id });

        expect(screen.getByRole("menuitem", { name: /remove/i })).toBeInTheDocument();
      });
    });
  });
});
