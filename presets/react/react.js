const readPkgUp = require("read-pkg-up");
const semver = require("semver");

let oldestSupportedReactVersion = "17.0.1";

// Get react version from package.json and used it in lint configuration
try {
  const packageFile = readPkgUp.sync({ normalize: true });
  const allDeps = {
    react: "17.0.1",
    ...packageFile.peerDependencies,
    ...packageFile.devDependencies,
    ...packageFile.dependencies,
  };

  // eslint-disable-next-line prefer-destructuring
  oldestSupportedReactVersion = semver
    .validRange(allDeps.react)
    .replace(/[<=>|]/g, " ")
    .split(" ")
    .filter(Boolean)
    .sort(semver.compare)[0];
} catch {
  // ignore error
}

module.exports = {
  extends: ["airbnb", "airbnb/hooks"],
  plugins: ["testing-library"],
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  rules: {
    "no-restricted-exports": ["off"],
    "react/prop-types": ["warn"],
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
      rules: {
        "react/require-default-props": [0],
        "@typescript-eslint/no-unsafe-return": ["warn"],
        "@typescript-eslint/no-unsafe-call": ["warn"],
        "@typescript-eslint/no-unsafe-member-access": ["warn"],
        "@typescript-eslint/no-unsafe-assignment": ["warn"],
        "@typescript-eslint/no-explicit-any": ["warn"],
      },
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
      rules: {
        "testing-library/no-wait-for-multiple-assertions": ["off"],
        "@typescript-eslint/no-unsafe-return": ["off"],
        "@typescript-eslint/no-unsafe-call": ["off"],
        "@typescript-eslint/no-unsafe-member-access": ["off"],
        "@typescript-eslint/no-unsafe-assignment": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "react/jsx-props-no-spreading": ["off"],
      },
    },
    {
      files: ["**/*.stories.[jt]s?(x)"],
      rules: {
        "react/jsx-props-no-spreading": ["off"],
      },
    },
  ],
};
