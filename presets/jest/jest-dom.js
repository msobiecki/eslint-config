module.exports = {
  extends: ["plugin:jest-dom/recommended"],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/dom"],
    },
  ],
};
