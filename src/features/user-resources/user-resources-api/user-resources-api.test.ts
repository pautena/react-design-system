import { renderFeatureHook, waitFor } from "../../../testing/testing-library";
import fetch from "jest-fetch-mock";
import { useLazyGetUserResourcesQuery } from "./user-resources-api";
import resourcesHistoryResponse from "../../../testing/fixtures/resources-history-response.json";
import { Resources } from "../user-resources.types";
import { StoreFixtures } from "../../../testing/test-utils";

const MockResponseData = JSON.stringify(resourcesHistoryResponse);

describe("User resources API", () => {
  describe("useLazyGetUserResourcesQuery", () => {
    const triggerUseLazyGetUserResourcesQuery = ({
      data,
      error,
    }: { data?: string; error?: Error } = {}) => {
      const renderResult = renderFeatureHook(() => useLazyGetUserResourcesQuery(), {
        preloadedState: StoreFixtures.initializedStore,
      });
      if (data) {
        fetch.doMock(data);
      }
      if (error) {
        fetch.mockReject(error);
      }

      const [trigger] = renderResult.result.current;
      trigger({
        userId: "user-test-id",
        start: "2022-05-23",
        end: "2020-05-20",
      });

      return renderResult;
    };

    describe("when is dispatched", () => {
      it("changes the state correctly", () => {
        const renderResult = triggerUseLazyGetUserResourcesQuery({ data: MockResponseData });
        const [_, result] = renderResult.result.current;

        expect(result.isLoading).toBeTruthy();
        expect(result.isFetching).toBeTruthy();
      });

      it("makes one http call to brain for each Resource", async () => {
        triggerUseLazyGetUserResourcesQuery({ data: MockResponseData });

        await waitFor(() => {
          expect(fetch.mock.calls.length).toEqual(Resources.length);
          Resources.forEach((_, index) => {
            expect(fetch.mock.calls[index][0]).toEqual(
              "https://wl-toolboxproxy.socialpointgames.com/forward",
            );
          });
        });
      });
    });

    it("changes the state correclty when finishes with success", async () => {
      const renderResult = triggerUseLazyGetUserResourcesQuery({ data: MockResponseData });

      await waitFor(() => {
        const [_, result] = renderResult.result.current;
        expect(result.isSuccess).toBeTruthy();

        const { data } = result;
        expect(data).toHaveLength(Resources.length * resourcesHistoryResponse.result.length);
        resourcesHistoryResponse.result.forEach((resource, i) => {
          const [date, r, amount, increment, category, subcategory] = resource;
          const d = data && data[i];

          expect(d?.date).toBe(date);
          expect(d?.resource).toBe(r);
          expect(d?.amount).toBe(parseInt(amount));
          expect(d?.increment).toBe(parseInt(increment));
          expect(d?.category).toBe(category);
          expect(d?.subcategory).toBe(subcategory);
        });
      });
    });

    it("changes the state correctly when finishes with an error", async () => {
      const error: Error = { name: "TestError", message: "This is an error" };
      const renderResult = triggerUseLazyGetUserResourcesQuery({ error });

      await waitFor(() => {
        const [_, result] = renderResult.result.current;
        expect(result.isError).toBeTruthy();
        expect(result.error).toStrictEqual(error);
      });
    });
  });
});
