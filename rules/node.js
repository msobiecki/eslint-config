const nodeRules = {
  // require all requires be top-level
  "n/global-require": "error",

  // disallow use of new operator with the require function
  "n/no-new-require": "error",

  // disallow string concatenation with __dirname and __filename
  "n/no-path-concat": "error",

  // disable no-missing-import rule as it is handled by import plugin
  "n/no-missing-import": "off",

  // disable n/no-missing-require rule as it is handled by import plugin
  "n/no-missing-require": "off",
};

export default nodeRules;
