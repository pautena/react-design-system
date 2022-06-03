import { Actions, Assertions, Fixtures, StoreFixtures } from "../../../../testing/test-utils";
import { render, screen, waitFor } from "../../../../testing/testing-library";
import userEvent from "@testing-library/user-event";
import { ResourcesHistoryPage } from "./resources-history-page";
import fetch from "jest-fetch-mock";
import resourcesHistoryResponse from "../../../../testing/fixtures/resources-history-response.json";
import { Resources } from "../../user-resources.types";

const MockResponseData = JSON.stringify(resourcesHistoryResponse);
const MockEmptyResponseData = JSON.stringify({ result: [] });

describe("ResourcesHistoryPage", () => {
  const renderInstance = ({ data, error }: { data?: string; error?: Error } = {}) => {
    if (data) {
      fetch.doMockOnce(data);
      fetch.doMock(MockEmptyResponseData);
    }
    if (error) {
      fetch.mockReject(error);
    }

    return render(<ResourcesHistoryPage />, {
      preloadedState: StoreFixtures.initializedStore,
    });
  };

  const assertResourcesAreDisplayed = async ({ start, end }: { start: number; end: number }) => {
    const resources = resourcesHistoryResponse.result.slice(start, end);

    for (let [date, resource, amount, increment, category, subcategory] of resources) {
      expect(await screen.findAllByText(date)).toBeTruthy();
      expect(await screen.findAllByText(resource)).toBeTruthy();
      expect(await screen.findAllByText(`${amount} (${increment})`)).toBeTruthy();
      expect(await screen.findAllByText(category)).toBeTruthy();
      expect(await screen.findAllByText(subcategory)).toBeTruthy();
    }
  };

  it("it should show a loading indicator when I submit a search", async () => {
    renderInstance({ data: MockResponseData });

    await userEvent.type(screen.getByLabelText(/user id/i), "user-id");
    Actions.typeDate(screen.getByLabelText(/start date/i), "20/04/2020");
    Actions.typeDate(screen.getByLabelText(/end date/i), "20/04/2022");
    await userEvent.click(screen.getByText(/search/i));

    Assertions.loadingIndicatorIsVisible();
  });

  it("it should show make a call to retrieve the user resources", async () => {
    renderInstance({ data: MockResponseData });

    await userEvent.type(screen.getByLabelText(/user id/i), "user-id");
    Actions.typeDate(screen.getByLabelText(/start date/i), "20/04/2020");
    Actions.typeDate(screen.getByLabelText(/end date/i), "20/04/2022");
    await userEvent.click(screen.getByText(/search/i));

    expect(fetch.mock.calls.length).toEqual(Resources.length);
    Resources.forEach((_, index) => {
      expect(fetch.mock.calls[index][0]).toEqual(
        "https://wl-toolboxproxy.socialpointgames.com/forward",
      );
    });
  });

  it("it should show the first 10 user resources", async () => {
    const { container } = renderInstance({ data: MockResponseData });

    await userEvent.type(screen.getByLabelText(/user id/i), "user-id");
    Actions.typeDate(screen.getByLabelText(/start date/i), "20/04/2020");
    Actions.typeDate(screen.getByLabelText(/end date/i), "20/04/2022");
    await userEvent.click(screen.getByText(/search/i));

    await Actions.waitForLoadingIndicatorDisappear();

    await assertResourcesAreDisplayed({ start: 0, end: 10 });
  });

  it("it should show the second 10 user resources if I navigate to the next page", async () => {
    renderInstance({ data: MockResponseData });

    await userEvent.type(screen.getByLabelText(/user id/i), "user-id");
    Actions.typeDate(screen.getByLabelText(/start date/i), "20/04/2020");
    Actions.typeDate(screen.getByLabelText(/end date/i), "20/04/2022");
    await userEvent.click(screen.getByText(/search/i));

    await Actions.waitForLoadingIndicatorDisappear();
    await waitFor(async () => {
      await userEvent.click(screen.getByRole("button", { name: /next page/i }));
    });

    await assertResourcesAreDisplayed({ start: 10, end: 15 });
  });

  it("it should show a message if there is no result", async () => {
    renderInstance({ data: MockEmptyResponseData });

    await userEvent.type(screen.getByLabelText(/user id/i), "user-id");
    Actions.typeDate(screen.getByLabelText(/start date/i), "20/04/2020");
    Actions.typeDate(screen.getByLabelText(/end date/i), "20/04/2022");
    await userEvent.click(screen.getByText(/search/i));

    expect(await screen.findByText(/no rows/i)).toBeVisible();
  });

  // it("it should show the error if an error is received", async () => {
  //   renderInstance({ error: Fixtures.errorUserNotFound });

  //   await userEvent.type(screen.getByLabelText(/user id/i), "user-id");
  //   Actions.typeDate(screen.getByLabelText(/start date/i), "20/04/2020");
  //   Actions.typeDate(screen.getByLabelText(/end date/i), "20/04/2022");
  //   await userEvent.click(screen.getByText(/search/i));

  //   expect(await screen.findByText(Fixtures.errorUserNotFound.message)).toBeVisible();
  // });
});
