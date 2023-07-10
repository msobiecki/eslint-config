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
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
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
