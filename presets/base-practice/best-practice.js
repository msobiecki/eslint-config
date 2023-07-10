module.exports = {
  extends: [
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:security/recommended",
    "plugin:jsdoc/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:compat/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["**/*.ts"],
      extends: ["plugin:jsdoc/recommended-typescript"],
    },
  ],
};
