import fs from "node:fs";
import path from "node:path";

/**
 * Get the base directory for the project
 * @returns {string} The base directory path
 */
export function getBaseDirectory() {
  return process.cwd();
}

/**
 * A safe wrapper for fs.existsSync() that only allows
 * checking for files within your current workspace root.
 *
 * This prevents accidental non-literal or user-injected paths,
 * while keeping eslint-plugin-security happy.
 * @param {string} relativePath - The relative path to check
 * @param {string} [baseDirection=process.cwd()] - The base directory to resolve from
 * @returns {boolean} Whether the file exists
 */
export function safeExistsSync(
  relativePath,
  baseDirection = getBaseDirectory(),
) {
  const fullPath = path.resolve(baseDirection, relativePath);
  const normalizedBase = path.resolve(baseDirection);

  if (!fullPath.startsWith(normalizedBase)) {
    throw new Error(
      `Blocked attempt to access outside base directory: ${relativePath}`,
    );
  }

  return fs.existsSync(fullPath);
}

/**
 * Get tsconfig path if exists
 * @returns {string|undefined} The path to tsconfig.json or undefined if not found
 */
export function getTsConfig() {
  const baseDirection = getBaseDirectory();

  if (safeExistsSync("tsconfig.json", baseDirection)) {
    return path.resolve(baseDirection, "tsconfig.json");
  }

  return undefined;
}
