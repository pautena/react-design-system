import React from "react";
import { DummyModelRouter } from "./model-router.stories";
import {
  expectModelFieldInputExist,
  expectProgressIndicator,
  waitForProgressIndicatorToBeRemoved,
  render,
  screen,
  TestRouter,
  expectAlert,
} from "../../tests";
import userEvent from "@testing-library/user-event";
import { getRandomItem } from "../../utils";
import { Model } from "../generators.model";

const REQUEST_TIMEOUT = 20;

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
    fullfillModelForm: async () => {
      await userEvent.type(screen.getByRole("textbox", { name: "Id" }), "Id-1");
      await userEvent.type(screen.getByRole("textbox", { name: /first name/i }), "Karianne");
      await userEvent.type(screen.getByRole("textbox", { name: /middle name/i }), "Noah");
      await userEvent.type(screen.getByRole("textbox", { name: /last name/i }), "Gorczany");
      await userEvent.type(screen.getByRole("textbox", { name: /gender/i }), "Cis Man");
      await userEvent.type(screen.getByRole("spinbutton", { name: /age/i }), "37");
      await userEvent.type(
        screen.getByRole("textbox", { name: /birth date/i }),
        "Tue Nov 26 2047 12:14:19",
      );
      await userEvent.type(screen.getByRole("textbox", { name: /model/i }), "Spyder");
      await userEvent.type(screen.getByRole("textbox", { name: /manufacturer/i }), "Bugatti");
      await userEvent.type(screen.getByRole("textbox", { name: /color/i }), "red");
      await userEvent.type(screen.getByRole("textbox", { name: /type/i }), "Convertible");
      await userEvent.type(screen.getByRole("textbox", { name: /vin/i }), "46N6UE4VJ2XL28828");
      await userEvent.type(screen.getByRole("textbox", { name: /vrm/i }), "NE51AFH");
      await userEvent.type(screen.getByRole("spinbutton", { name: /q/i }), "9");
      await userEvent.type(screen.getByRole("textbox", { name: /available/i }), "true");
      await userEvent.type(screen.getByRole("textbox", { name: /currency/i }), "mxn");
      await userEvent.type(
        screen.getByRole("textbox", { name: /trade date/i }),
        "Thu Jul 21 2022 22:44:10",
      );

      await userEvent.click(screen.getByRole("button", { name: /save/i }));
    },
  };

  const renderComponent = async ({
    router = "memory",
    screen = "initial",
  }: { router?: TestRouter; screen?: "initial" | "add" } = {}) => {
    const requestList = jest.fn();
    const onSubmitAdd = jest.fn();
    const args = DummyModelRouter.args;
    const instance = render(
      <DummyModelRouter
        {...args}
        requestTimeout={REQUEST_TIMEOUT}
        requestListAction={requestList}
        onSubmitAddAction={onSubmitAdd}
      />,
      {
        router,
      },
    );

    if (screen === "add") {
      await actions.navigateToAddScreen();
    }

    return { ...instance, data: args.initialData, model: args.model, requestList, onSubmitAdd };
  };

  describe("router screens", () => {
    it("would render the list screen by default", async () => {
      await renderComponent();

      await assertions.expectListScreen();
    });

    it("would render the add screen if we navigate there", async () => {
      await renderComponent();

      await actions.navigateToAddScreen();

      await assertions.expectAddScreen();
    });

    it("would render the update screen if we navigate there", async () => {
      const { data } = await renderComponent();
      const { item } = getRandomItem<any>(data);
      const { id } = item;

      await actions.navigateToUpdateScreen({ id });

      await assertions.expectUpdateScreen({ id });
    });

    it("would render the detail screen if we navigate there", async () => {
      const { data } = await renderComponent();
      const {
        item: { id, firstName },
      } = getRandomItem<any>(data);

      await actions.navigateToDetailScreen({ name: firstName });

      await assertions.expectDetailScreen({ id });
    });
  });

  describe("router paths", () => {
    it("would have the pathname / by default", async () => {
      const { history } = await renderComponent({ router: "router" });

      expect(history.location.pathname).toBe("/");
    });

    it("would have the path /add if navigates to the add screen", async () => {
      const { history } = await renderComponent({ router: "router" });

      await actions.navigateToAddScreen();

      expect(history.location.pathname).toBe("/add");
    });

    it("would have the path /:id/update if navigates to the update an item", async () => {
      const { history, data } = await renderComponent({ router: "router" });
      const {
        item: { id },
      } = getRandomItem<any>(data);

      await actions.navigateToUpdateScreen({ id });

      expect(history.location.pathname).toBe(`/${id}/update`);
    });

    it("would have the path /:id if navigates to the item details", async () => {
      const { history, data } = await renderComponent({ router: "router" });
      const {
        item: { id, firstName },
      } = getRandomItem<any>(data);

      await actions.navigateToDetailScreen({ name: firstName });

      expect(history.location.pathname).toBe(`/${id}`);
    });
  });

  describe("list screen", () => {
    it("would call requestList when is mounted", async () => {
      const { requestList } = await renderComponent();

      expect(requestList).toHaveBeenCalledTimes(1);
    });

    it("would render a loading indicator until the data is ready", async () => {
      await renderComponent();

      expectProgressIndicator();
      await waitForProgressIndicatorToBeRemoved();
    });

    it("would render a title", async () => {
      await renderComponent();

      expect(
        screen.getByRole("heading", {
          name: "Items",
          level: 1,
        }),
      ).toBeInTheDocument();
    });

    describe("add button", () => {
      it("would render an add button", async () => {
        await renderComponent();

        expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
      });

      it("would navigate to the add screen if I press the add button", async () => {
        const { history } = await renderComponent({ router: "router" });

        await userEvent.click(screen.getByRole("button", { name: /add/i }));

        expect(history.location.pathname).toBe("/add");
      });
    });

    it("would render a list with the data", async () => {
      const { data, model } = await renderComponent();

      await assertions.expectListItems({ data, model });
    });

    it("would navigate to the detail screen if an item is clicked", async () => {
      const { data, history } = await renderComponent({ router: "router" });
      const {
        item: { id, firstName },
      } = getRandomItem<any>(data);

      await userEvent.click(await screen.findByRole("cell", { name: firstName }));

      expect(history.location.pathname).toBe(`/${id}`);
    });

    describe("item options", () => {
      it("would have a options button for each item", async () => {
        const { data } = await renderComponent();

        for (let i = 0; i < data.length; ++i) {
          const id = (data[i] as any).id;
          await assertions.expectMenuOption({ id });
        }
      });

      it("would render an option to edit", async () => {
        const { data } = await renderComponent({ router: "router" });
        const {
          item: { id },
        } = getRandomItem<any>(data);

        await actions.openItemOptions({ id });

        expect(screen.getByRole("menuitem", { name: /edit/i })).toBeInTheDocument();
      });

      it("would render an option to delete", async () => {
        const { data } = await renderComponent({ router: "router" });
        const {
          item: { id },
        } = getRandomItem<any>(data);

        await actions.openItemOptions({ id });

        expect(screen.getByRole("menuitem", { name: /remove/i })).toBeInTheDocument();
      });
    });
  });

  describe("add screen", () => {
    it("would render a title", async () => {
      await renderComponent({ screen: "add" });

      expect(
        screen.getByRole("heading", {
          level: 1,
          name: /add items/i,
        }),
      );
    });

    it("would render the navigation path", async () => {
      await renderComponent({ screen: "add" });

      expect(screen.getByRole("link", { name: "Items" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Add new Items" })).toBeInTheDocument();
    });

    it("would be able to go back to the list screen", async () => {
      await renderComponent({ screen: "add" });

      await userEvent.click(screen.getByRole("link", { name: "Items" }));

      await assertions.expectListScreen();
    });

    it("would render a form", async () => {
      const { model } = await renderComponent({ screen: "add" });

      expectModelFieldInputExist(model.fields);
    });

    it("would make a request when the form is submitted", async () => {
      const { onSubmitAdd } = await renderComponent({ screen: "add" });

      await actions.fullfillModelForm();

      expect(onSubmitAdd).toHaveBeenCalledTimes(1);
      expect(onSubmitAdd).toHaveBeenCalledWith({
        id: "Id-1",
        firstName: "Karianne",
        middleName: "Noah",
        lastName: "Gorczany",
        gender: "Cis Man",
        age: "37",
        birthDate: "Tue Nov 26 2047 12:14:19",
        car: {
          model: "Spyder",
          manufacturer: "Bugatti",
          color: "red",
          type: "Convertible",
          vin: "46N6UE4VJ2XL28828",
          vrm: "NE51AFH",
        },
        quantity: "9",
        available: "true",
        currency: "mxn",
        tradeDate: "Thu Jul 21 2022 22:44:10",
      });
    });

    it("would show a loading indicator when the request is in progress", async () => {
      await renderComponent({ screen: "add" });

      await actions.fullfillModelForm();

      expectProgressIndicator();
    });

    // TODO it("would show a success message if the request finish with a success", async () => {
    //   await renderComponent({ screen: "add" });

    //   await actions.fullfillModelForm();

    //   await expectAlert({
    //     message: /item added successfully/i,
    //     severity: "success",
    //   });
    // });

    // TODO it("would navigate to the list screen if the request finish with a success", async () => {
    //   await renderComponent({ screen: "add" });

    //   await actions.fullfillModelForm();

    //   await assertions.expectListScreen();
    // });
  });
});
