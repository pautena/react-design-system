import { RootNavigator } from "./root-navigator";
import { MockPreloadedState, render, screen, waitFor } from "../../testing/testing-library";
import userEvent from "@testing-library/user-event";
import { Auth } from "aws-amplify";
import {
  Actions,
  Assertions,
  StoreActions,
  StoreFixtures,
  Fixtures,
  Mocks,
} from "../../testing/test-utils";
import { Tools } from "../../components";

jest.mock("aws-amplify");

const renderInstance = ({
  preloadedState = StoreFixtures.initializedStore,
}: { preloadedState?: MockPreloadedState } = {}) => {
  Mocks.mockCurrentUser(Fixtures.cognitoUser);

  return render(<RootNavigator />, {
    preloadedState,
  });
};

describe("RootNavigator", () => {
  it("goes to the sign in page if the user is not logged in", () => {
    renderInstance({ preloadedState: StoreFixtures.initializedUnauthenticatedStore });

    Assertions.isInSignInPage();
  });

  it("goes to the home page when the sign in processes finishes", async () => {
    const { store } = renderInstance();

    await StoreActions.signIn(store);

    Assertions.isInHomePage();
  });

  it("goes to the sign in page if the user sign out again", async () => {
    const { store } = renderInstance();

    await StoreActions.signIn(store);
    Assertions.isInHomePage();

    await StoreActions.signOut(store);
    Assertions.isInSignInPage();
  });
});

describe("Navigation drawer", () => {
  it("opens the drawer if I press the menu button", async () => {
    const { store } = renderInstance();

    await Actions.openDrawer();

    Assertions.isDrawerOpened();
  });

  it("closes the drawer if I press the back button after pressing the menu button", async () => {
    const { store } = renderInstance();

    await Actions.openDrawer();
    await Actions.closeDrawer();

    await Assertions.isDrawerClosed();
  });

  it("navigates to the resources history if I press the 'Resources History' drawer item", async () => {
    const { store } = renderInstance();

    await Actions.openDrawer();
    await userEvent.click(screen.getByText(/resources history/i));

    await waitFor(() => expect(screen.getByTestId("UserResourcesPage")));
  });

  it("changes the selected project if the user selects a new project inside the drawer", async () => {
    const { store } = renderInstance();
    await Actions.openDrawer();
    const project = store.getState().projects.projects[0];

    Actions.selectOption(screen.getByTestId("ProjectSelector"), project.id);

    expect(store.getState().projects.selectedProject).toStrictEqual(project);
  });

  it("changes the selected environment if the user selects a new environment inside the drawer", async () => {
    const { store } = renderInstance();
    await Actions.openDrawer();
    const environment = store.getState().environments.environments[0];

    Actions.selectOption(screen.getByTestId("EnvironmentSelector"), environment.id);

    expect(store.getState().environments.selectedEnvironment).toStrictEqual(environment);
  });

  describe("tools list items", () => {
    it.each(Tools.map((tool) => [tool.url, tool.name]))(
      "should redirect to %s page when the %s tool item is clicked",
      async (url: string, name: string) => {
        const { history } = renderInstance();
        await Actions.openDrawer();

        await userEvent.click(screen.getByText(name));

        expect(history.location.pathname).toBe(url);
      },
    );
  });
});
