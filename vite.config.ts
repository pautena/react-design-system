import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "./src/index.ts",
        "tests/index": "./src/tests/index.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), "@testing-library/react"],
      output: {
        interop: "auto",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.build.json",
      exclude: ["src/tests/**/*"],
    }),
    dts({
      tsconfigPath: "./tsconfig.tests.json",
      include: ["src/tests/**/*"],
      insertTypesEntry: false,
      rollupTypes: false,
    }),
  ],
});
