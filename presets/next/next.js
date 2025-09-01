const getTsConfig = require("../../utils/get-ts-config");

module.exports = {
  extends: ["next"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parserOptions: {
        project: getTsConfig(),
      },
    },
  ],
};
