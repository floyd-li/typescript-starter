import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
export default {
  input: "src/index.ts",
  output: [{
      file:"./dist/common/index.js",
      format: "cjs",
    },
    {
      file:"./dist/esm/index.js",
      format: "esm",
    }
  ],
  plugins: [commonjs(), resolve(), typescript() ],
}