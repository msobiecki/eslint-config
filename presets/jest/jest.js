module.exports = {
  overrides: [
    {
      files: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
        "jest.setup.js",
      ],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
    },
  ],
};
