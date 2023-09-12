import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import dts from "rollup-plugin-dts";
import path from "path";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";
import { readdirSync } from "fs";
import generatePackageJson from "rollup-plugin-generate-package-json";

const ignoreFolders = ["stories", "tests", "types"];

const projectRootDir = path.resolve(__dirname);
const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.rollup.json",
  }),
  terser(),
  alias({
    entries: [
      {
        find: "~",
        replacement: path.resolve(projectRootDir, "src"),
      },
    ],
  }),
];

const subfolderPlugins = (folderName) => [
  ...plugins,
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${folderName}`,
      private: true,
      main: "../cjs/index.js", // --> points to cjs format entry point of whole library
      module: "./index.js", // --> points to esm format entry point of individual component
      types: "./index.d.ts", // --> points to types definition file of individual component
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
    output: {
      file: `dist/${folder}/index.js`,
      sourcemap: true,
      exports: "named",
      format: "esm",
    },
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
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins,
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
  ...folderBuilds,
];
