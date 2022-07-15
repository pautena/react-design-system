module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  collectCoverageFrom: [
    "./src/**",
    "!src/**/*.stories.tsx",
    "!src/**/*.dummy.ts(x)",
    "!src/**/*.test.tsx",
    "!src/storybook.ts",
    "!src/tests/**",
    "!src/**/__snapshots__/**",
  ],
};
