import fs from "node:fs";
import path from "node:path";

/**
 * Get tsconfig path if exists
 * @returns {string|undefined} tsconfig path or undefined
 */
export default function getTsConfig() {
  if (fs.existsSync("tsconfig.json")) {
    return path.resolve("tsconfig.json");
  }

  if (fs.existsSync("../tsconfig.json")) {
    return path.resolve("../tsconfig.json");
  }

  return;
}
