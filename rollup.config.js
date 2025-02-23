import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json" with { type: "json" };
import { readdirSync } from "fs";
import generatePackageJson from "rollup-plugin-generate-package-json";

const ignoreFolders = ["stories", "tests", "types"];

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.rollup.json",
    useTsconfigDeclarationDir: true,
  }),
  terser(),
];

const subfolderPlugins = (folderName) => [
  ...plugins,
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${folderName}`,
      private: true,
      main: "./cjs/index.js",
      module: "./index.js",
      types: "./index.d.ts",
    },
  }),
];
const getFolders = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => !ignoreFolders.includes(name));

const folderBuilds = getFolders("./src").map((folder) => {
  return {
    input: `src/${folder}/index.ts`,
    output: [
      {
        file: `dist/${folder}/cjs/index.js`,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: `dist/${folder}/index.js`,
        sourcemap: true,
        exports: "named",
        format: "esm",
      },
    ],
    plugins: subfolderPlugins(folder),
    external: ["react", "react-dom"],
  };
});

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins,
    external: ["react", "react-dom"],
  },
  ...folderBuilds,
];
