import { createMockStore } from "../../testing/testing-library";
import environmentsData from "./environments-data.json";
import { selectEnvironment } from "./environments-slice";
import { Environment } from "./environments.types";

const environment: Environment = environmentsData[0];

describe("Environments slice", () => {
  describe("when the reducer is created", () => {
    it("it has the projects data", () => {
      const store = createMockStore();

      expect(store.getState().environments.environments).toStrictEqual(environmentsData);
    });

    it("there is no selectedEnvironment by default", () => {
      const store = createMockStore();

      expect(store.getState().environments.selectedEnvironment).toBeUndefined();
    });
  });

  it("changes the state correctly when selectEnvironment is dispatched", () => {
    const store = createMockStore();
    store.dispatch(selectEnvironment(environment));

    expect(store.getState().environments.selectedEnvironment).toStrictEqual(environment);
  });
});
