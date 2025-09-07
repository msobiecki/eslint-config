const getTsConfig = require("../../utils/get-ts-config");

module.exports = {
  extends: ["next"],
  rules: {
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function"],
        unnamedComponents: ["arrow-function"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parserOptions: {
        project: getTsConfig(),
      },
    },
  ],
};
