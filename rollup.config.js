import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";
import path from "path";
import generatePackageJson from "rollup-plugin-generate-package-json";
import packageJson from "./package.json";


const projectRootDir = path.resolve(__dirname);

const plugins = [
  peerDepsExternal(),
  resolve(),
  replace({
    __IS_DEV__: process.env.NODE_ENV === "development",
  }),
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

const folders = [
  "components",
  "generators",
  "hooks",
  "layouts",
  "providers",
  "utils",
]


const folderBuilds = folders.map((folder) => {
  return {
    input: `src/${folder}/index.ts`,
    output: {
      file: `dist/${folder}/index.js`,
      sourcemap: true,
      exports: 'named',
      format: 'esm',
    },
    plugins: subfolderPlugins(folder),
    external: ['react', 'react-dom'],
  };
});

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins,
    external: ["react", "react-dom"],
  },
  ...folderBuilds,
];
