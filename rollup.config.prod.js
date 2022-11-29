const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const resolve = require("@rollup/plugin-node-resolve");

module.exports = {
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