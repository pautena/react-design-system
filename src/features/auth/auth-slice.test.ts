import { createMockStore, waitFor } from "../../testing/testing-library";
import { signIn, signInCallback, signOut, signOutCallback } from "./auth-slice";
import { Auth } from "aws-amplify";
import { CognitoIdentityProvider } from "../../configs/aws";
import { Fixtures, StoreFixtures } from "../../testing/test-utils";

jest.mock("aws-amplify");

describe("Auth slice", () => {
  describe("signIn", () => {
    describe("when is dispatched", () => {
      it("changes the state correctly", () => {
        const store = createMockStore({
          preloadedState: StoreFixtures.initializedStore,
        });
        store.dispatch(signIn());

        expect(store.getState().auth.signInInProgress).toBeTruthy();
        expect(store.getState().auth.isAuthenticated).toBeFalsy();
        expect(store.getState().auth.profile).toBeUndefined();
      });

      it("makes an auth request", () => {
        const store = createMockStore({
          preloadedState: StoreFixtures.initializedStore,
        });
        store.dispatch(signIn());

        expect(Auth.federatedSignIn).toHaveBeenCalledTimes(1);
        expect(Auth.federatedSignIn).toHaveBeenCalledWith({
          customProvider: CognitoIdentityProvider,
        });
      });
    });
  });

  describe("signInCallback", () => {
    it("makes a request to get the user info when is dispatched", () => {
      (Auth.currentUserInfo as jest.Mock).mockResolvedValue(Fixtures.cognitoUser);
      const store = createMockStore({
        preloadedState: StoreFixtures.initializedStore,
      });
      store.dispatch(signInCallback());

      expect(Auth.currentUserInfo).toHaveBeenCalledTimes(1);
    });

    it("it changes the state correctly when finishes successfully", async () => {
      const dummyUser = {
        id: "test-user-id",
        username: "testUser",
        attributes: { email: "test@example.com" },
      };
      (Auth.currentUserInfo as jest.Mock).mockResolvedValue(dummyUser);
      const store = createMockStore({
        preloadedState: StoreFixtures.initializedStore,
      });
      store.dispatch(signInCallback());

      await waitFor(() => {
        expect(store.getState().auth.profile).toStrictEqual({
          id: "test-user-id",
          username: "testUser",
          email: "test@example.com",
        });
        expect(store.getState().auth.signInInProgress).toBeFalsy();
        expect(store.getState().auth.isAuthenticated).toBeTruthy();
      });
    });
  });

  describe("signOut", () => {
    describe("when is dispatched", () => {
      it("changes the state correctly", () => {
        const store = createMockStore({
          preloadedState: StoreFixtures.initializedStore,
        });
        store.dispatch(signOut());

        expect(store.getState().auth.signOutInProgress).toBeTruthy();
      });

      it("makes an auth request", () => {
        const store = createMockStore({
          preloadedState: StoreFixtures.initializedStore,
        });
        store.dispatch(signOut());

        expect(Auth.signOut).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("signOutCallback", () => {
    it("changes the state correctly", () => {
      const store = createMockStore({
        preloadedState: StoreFixtures.initializedStore,
      });
      store.dispatch(signOutCallback());

      expect(store.getState().auth.profile).toBeUndefined();
      expect(store.getState().auth.isAuthenticated).toBeFalsy();
      expect(store.getState().auth.signOutInProgress).toBeFalsy();
    });
  });
});
