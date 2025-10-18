import { defineConfig } from "eslint/config";

import {
  basePreset,
  bestPracticePreset,
  jestPreset,
} from "../eslint.config.js";

export default defineConfig([
  ...basePreset,
  ...jestPreset,
  ...bestPracticePreset,
]);
