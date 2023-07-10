const fs = require("node:fs");
const path = require("node:path");

const geTsConfig = () => {
  if (fs.existsSync("tsconfig.json")) return path.resolve("tsconfig.json");
  return fs.existsSync("../tsconfig.json")
    ? path.resolve("../tsconfig.json")
    : undefined;
};

module.exports = geTsConfig;
