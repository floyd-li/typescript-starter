import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [{
      file:"./dist/common/index.min.js",
      format: "cjs",
    },
    {
      file:"./dist/esm/index.min.js",
      format: "esm",
    }
  ],
  plugins: [resolve(), typescript(), terser()],
}