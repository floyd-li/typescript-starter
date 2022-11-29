const typescript = require("@rollup/plugin-typescript");
const resolve = require("@rollup/plugin-node-resolve");

module.exports = {
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
  plugins: [resolve(), typescript()],
}