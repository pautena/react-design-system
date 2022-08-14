import React from "react";
import { DummyModelRouter } from "./model-router.stories";
import {
  expectModelFieldInputExist,
  expectProgressIndicator,
  waitForProgressIndicatorToBeRemoved,
  render,
  screen,
  TestRouter,
  expectModelFieldValue,
  expectModelFieldInputValue,
} from "../../tests";
import userEvent from "@testing-library/user-event";
import { getRandomItem } from "../../utils";
import { Model } from "../generators.model";
import { createModelInstance } from "../generators.mock";

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
    expectSubmitInstanceCall: (mockFn: jest.Mock, instance: any) => {
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith({
        id: instance.id,
        firstName: instance.firstName,
        middleName: instance.middleName,
        lastName: instance.lastName,
        gender: instance.gender,
        age: instance.age.toString(),
        birthDate: instance.birthDate,
        car: {
          model: instance.car.model,
          manufacturer: instance.car.manufacturer,
          color: instance.car.color,
          type: instance.car.type,
          vin: instance.car.vin,
          vrm: instance.car.vrm,
        },
        quantity: instance.quantity.toString(),
        available: instance.available.toString(),
        currency: instance.currency,
        tradeDate: instance.tradeDate,
      });
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
    fullfillModelForm: async ({
      model,
      submit,
      clear,
    }: {
      model: Model;
      submit?: boolean;
      clear?: boolean;
    }) => {
      const instance = createModelInstance(model);

      const idElement = screen.getByRole("textbox", { name: "Id" });
      const firstNameElement = screen.getByRole("textbox", { name: /first name/i });
      const middleNameElement = screen.getByRole("textbox", { name: /middle name/i });
      const lastNameElement = screen.getByRole("textbox", { name: /last name/i });
      const genderElement = screen.getByRole("textbox", { name: /gender/i });
      const ageElement = screen.getByRole("spinbutton", { name: /age/i });
      const birthDateElement = screen.getByRole("textbox", { name: /birth date/i });
      const manufacturerElement = screen.getByRole("textbox", { name: /manufacturer/i });
      const modelElement = screen.getByRole("textbox", { name: /model/i });
      const colorElement = screen.getByRole("textbox", { name: /color/i });
      const typeElement = screen.getByRole("textbox", { name: /type/i });
      const vinElement = screen.getByRole("textbox", { name: /vin/i });
      const vrmElement = screen.getByRole("textbox", { name: /vrm/i });
      const quantityElement = screen.getByRole("spinbutton", { name: /q/i });
      const availableElement = screen.getByRole("textbox", { name: /available/i });
      const currencyElement = screen.getByRole("textbox", { name: /currency/i });
      const tradeDateElement = screen.getByRole("textbox", { name: /trade date/i });

      if (clear) {
        await userEvent.clear(idElement);
        await userEvent.clear(firstNameElement);
        await userEvent.clear(middleNameElement);
        await userEvent.clear(lastNameElement);
        await userEvent.clear(genderElement);
        await userEvent.clear(ageElement);
        await userEvent.clear(birthDateElement);
        await userEvent.clear(manufacturerElement);
        await userEvent.clear(modelElement);
        await userEvent.clear(colorElement);
        await userEvent.clear(typeElement);
        await userEvent.clear(vinElement);
        await userEvent.clear(vrmElement);
        await userEvent.clear(quantityElement);
        await userEvent.clear(availableElement);
        await userEvent.clear(currencyElement);
        await userEvent.clear(tradeDateElement);
      }
      await userEvent.type(idElement, instance.id);
      await userEvent.type(firstNameElement, instance.firstName);
      await userEvent.type(middleNameElement, instance.middleName);
      await userEvent.type(lastNameElement, instance.lastName);
      await userEvent.type(genderElement, instance.gender);
      await userEvent.type(ageElement, instance.age.toString());
      await userEvent.type(birthDateElement, instance.birthDate);
      await userEvent.type(modelElement, instance.car.model);
      await userEvent.type(manufacturerElement, instance.car.manufacturer);
      await userEvent.type(colorElement, instance.car.color);
      await userEvent.type(typeElement, instance.car.type);
      await userEvent.type(vinElement, instance.car.vin);
      await userEvent.type(vrmElement, instance.car.vrm);
      await userEvent.type(quantityElement, instance.quantity.toString());
      await userEvent.type(availableElement, instance.available.toString());
      await userEvent.type(currencyElement, instance.currency);
      await userEvent.type(tradeDateElement, instance.tradeDate);

      submit && (await userEvent.click(screen.getByRole("button", { name: /save/i })));

      return instance;
    },
  };

  const renderComponent = async ({
    router = "memory",
    screen = "initial",
  }: { router?: TestRouter; screen?: "initial" | "add" | "details" | "update" } = {}) => {
    const requestList = jest.fn();
    const onSubmitAdd = jest.fn();
    const onSubmitUpdate = jest.fn();
    const onRequestDelete = jest.fn();
    const args = DummyModelRouter.args;
    const instance = render(
      <DummyModelRouter
        {...args}
        requestTimeout={REQUEST_TIMEOUT}
        requestListAction={requestList}
        onSubmitAddAction={onSubmitAdd}
        onSubmitUpdateAction={onSubmitUpdate}
        onRequestDeleteAction={onRequestDelete}
      />,
      {
        router,
      },
    );

    const randomItem = getRandomItem<any>(args.initialData);

    if (screen === "add") {
      await actions.navigateToAddScreen();
    } else if (screen === "details") {
      await actions.navigateToDetailScreen({ name: randomItem.item.firstName });
    } else if (screen === "update") {
      await actions.navigateToUpdateScreen({ id: randomItem.item.id });
    }

    return {
      ...instance,
      data: args.initialData,
      model: args.model,
      randomItem,
      requestList,
      onSubmitAdd,
      onSubmitUpdate,
      onRequestDelete,
    };
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

    it("would be able to fullfill the form", async () => {
      const { model } = await renderComponent({ screen: "add" });

      const newInstance = await actions.fullfillModelForm({ model, submit: false });

      expectModelFieldInputValue(model.fields, newInstance);
    });

    it("would make a request when the form is submitted", async () => {
      const { onSubmitAdd, model } = await renderComponent({ screen: "add" });

      const newInstance = await actions.fullfillModelForm({ model, submit: true });

      assertions.expectSubmitInstanceCall(onSubmitAdd, newInstance);
    });

    it("would show a loading indicator when the request is in progress", async () => {
      const { model } = await renderComponent({ screen: "add" });

      await actions.fullfillModelForm({ model, submit: true });

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

  describe("details screen", () => {
    it("would render a title", async () => {
      const {
        randomItem: {
          item: { id },
        },
      } = await renderComponent({ screen: "details" });

      expect(
        screen.getByRole("heading", {
          name: id,
          level: 1,
        }),
      );
    });

    it("would be able to go back to the list screen", async () => {
      await renderComponent({ screen: "details" });

      await userEvent.click(
        screen.getByRole("link", {
          name: /items/i,
        }),
      );

      await assertions.expectListScreen();
    });

    it("would show a loading indicator when the request is in progress", async () => {
      await renderComponent({ screen: "details" });

      expectProgressIndicator();
    });

    it("would show the details of an instance", async () => {
      const { model, randomItem } = await renderComponent({ screen: "details" });

      await waitForProgressIndicatorToBeRemoved();

      model.fields.forEach((detail) => expectModelFieldValue(detail, randomItem.item));
    });
  });

  describe("update screen", () => {
    it("would render a title", async () => {
      const {
        randomItem: {
          item: { id },
        },
      } = await renderComponent({ screen: "update" });

      expect(
        screen.getByRole("heading", {
          name: `Edit ${id}`,
          level: 1,
        }),
      ).toBeInTheDocument();
    });

    it("would render the navigation path", async () => {
      const {
        randomItem: {
          item: { id },
        },
      } = await renderComponent({ screen: "update" });

      expect(
        screen.getByRole("link", {
          name: /items/i,
        }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", {
          name: `Edit ${id}`,
        }),
      ).toBeInTheDocument();
    });

    it("would be able to go back to the list screen", async () => {
      await renderComponent({ screen: "update" });

      await userEvent.click(
        screen.getByRole("link", {
          name: /Items/i,
        }),
      );

      await assertions.expectListScreen();
    });

    it("would show a loading indicator while the instance is requested", async () => {
      await renderComponent({ screen: "update" });

      await expectProgressIndicator();
    });

    it("would render a form with the instance values", async () => {
      const {
        model,
        randomItem: { item },
      } = await renderComponent({ screen: "update" });

      await waitForProgressIndicatorToBeRemoved();

      expectModelFieldInputValue(model.fields, item);
    });

    it("would make a request with the new values when the form is submitted", async () => {
      const { model } = await renderComponent({ screen: "update" });

      await waitForProgressIndicatorToBeRemoved();
      const newInstance = await actions.fullfillModelForm({ model, clear: true });

      expectModelFieldInputValue(model.fields, newInstance);
    });

    it("would show a loading indicator while the submit request is in progress", async () => {
      const { model } = await renderComponent({ screen: "update" });

      await waitForProgressIndicatorToBeRemoved();
      await actions.fullfillModelForm({ model, submit: true });

      expectProgressIndicator();
    });

    it("would navigate to the list screen when the submit request finish", async () => {
      const { model, onSubmitUpdate } = await renderComponent({ screen: "update" });

      await waitForProgressIndicatorToBeRemoved();
      const newInstance = await actions.fullfillModelForm({ model, submit: true, clear: true });

      assertions.expectSubmitInstanceCall(onSubmitUpdate, newInstance);
    });
  });

  describe("delete item", () => {
    it("would make a request when we try to delete an option", async () => {
      const { data, onRequestDelete } = await renderComponent();

      const { item } = getRandomItem<any>(data);
      const { id, firstName } = item;

      await screen.findByRole("cell", { name: firstName });

      await actions.openItemOptions({ id });

      await userEvent.click(screen.getByRole("menuitem", { name: /remove/i }));

      expect(onRequestDelete).toHaveBeenCalledTimes(1);
      expect(onRequestDelete).toHaveBeenCalledWith(item);
    });

    it("would show a loading indicator while the request is in progress", async () => {
      const { data } = await renderComponent();

      const { item } = getRandomItem<any>(data);
      const { id, firstName } = item;

      await screen.findByRole("cell", { name: firstName });
      await actions.openItemOptions({ id });
      await userEvent.click(screen.getByRole("menuitem", { name: /remove/i }));

      expectProgressIndicator();
    });

    it("would remove the item from the list when the request finish", async () => {
      const { data } = await renderComponent();
      const { item } = getRandomItem<any>(data);
      const { id, firstName } = item;

      await screen.findByRole("cell", { name: firstName });
      await actions.openItemOptions({ id });
      await userEvent.click(screen.getByRole("menuitem", { name: /remove/i }));
      await waitForProgressIndicatorToBeRemoved();

      expect(screen.queryByRole("cell", { name: firstName })).not.toBeInTheDocument();
    });
  });
});
