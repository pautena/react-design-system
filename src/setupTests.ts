import "@testing-library/jest-dom";
import { enableFetchMocks } from "jest-fetch-mock";
import moment from "moment";

moment.suppressDeprecationWarnings = true;

jest.mock("aws-amplify", () => ({
  Auth: {
    currentSession: () => ({
      getIdToken: () => ({
        getJwtToken: () => "fake-jwt-token",
      }),
    }),
    signOut: jest.fn(),
    federatedSignIn: jest.fn(),
    currentUserInfo: jest.fn(),
  },
}));

enableFetchMocks();
