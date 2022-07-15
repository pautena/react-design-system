module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  collectCoverageFrom: [
    "./src/**",
    "!src/**/*.stories.tsx",
    "!src/**/*.dummy.ts",
    "!src/**/*.test.tsx",
    "!src/storybook.tsx",
    "!src/tests/**",
    "!src/**/__snapshots__/**",
  ],
};
