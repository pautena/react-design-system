module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  collectCoverageFrom: [
    "./src/**",
    "!src/**/*.stories.tsx",
    "!src/**/*.dummy.ts",
    "!src/**/*.mock.tsx",
    "!src/**/*.test.tsx",
    "!src/storybook.tsx",
    "!src/tests/**",
    "!src/**/__snapshots__/**",
  ],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};
