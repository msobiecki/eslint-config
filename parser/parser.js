const fs = require("fs");
const path = require("path");

const tsConfig = () => {
  if (fs.existsSync("tsconfig.json")) return path.resolve("tsconfig.json");
  return fs.existsSync("../tsconfig.json")
    ? path.resolve("../tsconfig.json")
    : undefined;
};

module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      plugins: [],
    },
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    commonjs: true,
    node: true,
  },
  globals: {
    globals: true,
    shallow: true,
    render: true,
    mount: true,
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: tsConfig(),
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
};
