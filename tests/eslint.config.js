import { defineConfig } from "eslint/config";

import {
  basePreset,
  nodePreset,
  jestPreset,
  bestPracticePreset,
  importPreset,
} from "../eslint.config.js";

export default defineConfig([
  ...basePreset,
  ...bestPracticePreset,
  ...nodePreset,
  ...jestPreset,
  ...importPreset,
]);
