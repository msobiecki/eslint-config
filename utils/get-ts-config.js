const fs = require("node:fs");
const path = require("node:path");

const getTsConfig = () => {
  if (fs.existsSync("tsconfig.json")) return path.resolve("tsconfig.json");
  return fs.existsSync("../tsconfig.json")
    ? path.resolve("../tsconfig.json")
    : undefined;
};

module.exports = getTsConfig;
