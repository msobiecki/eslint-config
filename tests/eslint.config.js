import { defineConfig } from "eslint/config";

import { basePreset, jestPreset } from "../eslint.config.js";

export default defineConfig([...basePreset, ...jestPreset]);
