module.exports = {
  extends: [
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:security/recommended-legacy",
    "plugin:jsdoc/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:compat/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "unicorn/prefer-module": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prefer-top-level-await": "off",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: [
        "plugin:jsdoc/recommended-typescript",
        "plugin:deprecation/recommended",
      ],
    },
    {
      files: ["**/index.{js,ts}"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
};
