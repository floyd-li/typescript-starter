import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const isProduction = process.env.NODE_ENV === "production";

const buildFileName = isProduction ? "index.min.js" : "index.js";

export default {
  input: "src/index.ts",
  output: [
    {
      file: `./dist/common/${buildFileName}`,
      sourcemap: !isProduction,
      format: "cjs",
    },
    {
      file: `./dist/esm/${buildFileName}`,
      sourcemap: !isProduction,
      format: "esm",
    },
  ],
  plugins: [commonjs(), resolve(), typescript(), isProduction && terser()],
};
