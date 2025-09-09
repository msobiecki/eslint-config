const getTsConfig = require("../../utils/get-ts-config");

module.exports = {
  extends: ["airbnb", "airbnb/hooks"],
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
      extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: getTsConfig(),
      },
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
    {
      files: [
        "contexts/**/*.{js,jsx,ts,tsx}",
        "components/**/*.{js,jsx,ts,tsx}",
      ],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              pascalCase: true,
            },
          },
        ],
      },
    },
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      excludedFiles: [
        "contexts/**/*.{js,jsx,ts,tsx}",
        "components/**/*.{js,jsx,ts,tsx}",
      ],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              kebabCase: true,
            },
          },
        ],
      },
    },
  ],
};
