module.exports = {
  extends: ["airbnb", "airbnb/hooks"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],
};
