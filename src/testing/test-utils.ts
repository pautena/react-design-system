import { act, fireEvent, screen,waitForElementToBeRemoved } from "./testing-library";
import userEvent from "@testing-library/user-event";
import { signInCallback, signOutCallback } from "../features";
import projectsData from "../features/projects/projects-slice/projects-data.json";
import environmentsData from "../features/environments/environments-slice/environments-data.json";
import { Auth } from "aws-amplify";

export const Fixtures = {
  projects: projectsData,
  project: projectsData[0],
  environments: environmentsData,
  environment: environmentsData[0],
  cognitoUser: {
    id: "test-user-id",
    username: "testUser",
    attributes: { email: "test@example.com" },
  },
  profile: {
    id: "test-user-id",
    username: "testUser",
    email: "test@example.com",
  },
  errorUserNotFound: {
    name: "user-not-found",
    message: "There is no user with that id",
  },
};

export const StoreActions = {
  signIn: async (store: any) => {
    await act(() => {
      store.dispatch(signInCallback());
    });
  },
  signOut: async (store: any) => {
    await act(() => {
      store.dispatch(signOutCallback());
    });
  },
};

export const StoreFixtures = {
  initializedStore: {
    projects: {
      projects: Fixtures.projects,
      selectedProject: Fixtures.project,
    },
    environments: {
      environments: Fixtures.environments,
      selectedEnvironment: Fixtures.environment,
    },
    auth: {
      isAuthenticated: true,
      signInInProgress: false,
      signOutInProgress: false,
      profile: Fixtures.profile,
    },
  },
  initializedUnauthenticatedStore: {
    projects: {
      projects: Fixtures.projects,
      selectedProject: Fixtures.project,
    },
    environments: {
      environments: Fixtures.environments,
      selectedEnvironment: Fixtures.environment,
    },
    auth: {
      isAuthenticated: false,
      signInInProgress: false,
      signOutInProgress: false,
    },
  },
  selectedProjectsSlice: {
    projects: Fixtures.projects,
    selectedProject: Fixtures.project,
  },
  selectedEnvironmentsSlice: {
    environments: Fixtures.environments,
    selectedEnvironment: Fixtures.environment,
  },
};

export const Mocks = {
  mockCurrentUser: (user: any) => (Auth.currentUserInfo as jest.Mock).mockResolvedValue(user),
};

export const Actions = {
  openDrawer: async () => await userEvent.click(screen.getByTestId("MenuIcon")),
  closeDrawer: async () => await userEvent.click(screen.getByTestId("ChevronLeftIcon")),
  selectOption: (selector: HTMLElement, value: string | number) => fireEvent.change(selector, { target: { value } }),
  typeDate: (selector: HTMLElement, value: string) => fireEvent.change(selector, { target: { value } }),
  waitForLoadingIndicatorDisappear: async () => await waitForElementToBeRemoved(()=>screen.getByRole("progressbar"))
};

export const Assertions = {
  isInSignInPage: () => expect(screen.getByTestId("SignInPage")).toBeInTheDocument(),
  isInHomePage: () => expect(screen.getByTestId("HomePage")).toBeInTheDocument(),
  isDrawerOpened: () => {
    expect(screen.getByText(/inbox/i)).toBeVisible();
    expect(screen.getByTestId("MenuIcon")).not.toBeVisible();
    expect(screen.getByTestId("ChevronLeftIcon")).toBeVisible();
  },
  isDrawerClosed: async () => {
    expect(screen.getByText(/inbox/i)).not.toBeVisible();
    expect(screen.getByTestId("MenuIcon")).toBeVisible();
  },
  loadingIndicatorIsVisible: () => expect(screen.getByRole("progressbar")).toBeVisible(),
};
