import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

import reactBasePlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import nPlugin from "eslint-plugin-n";
import nextPlugin from "@next/eslint-plugin-next";
import jestPlugin from "eslint-plugin-jest";
import jestDomPlugin from "eslint-plugin-jest-dom";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import prettierPlugin from "eslint-plugin-prettier";
import eslintCommentsPlugin from "eslint-plugin-eslint-comments";
import unicornPlugin from "eslint-plugin-unicorn";
import promisePlugin from "eslint-plugin-promise";
import securityPlugin from "eslint-plugin-security";
import jsdocPlugin from "eslint-plugin-jsdoc";
import compatPlugin from "eslint-plugin-compat";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importxPlugin from "eslint-plugin-import-x";
import storybookPlugin from "eslint-plugin-storybook";

import getTsConfig from "./utils/get-ts-config.js";

import baseCustomRules from "./rules/base.js";
import nodeRules from "./rules/node.js";

/**
 * Base / best-practice preset
 */
export const basePreset = [
  {
    name: "Base JavaScript",
    files: ["**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
    rules: {
      ...eslint.configs.recommended.rules,
      // Custom best-practice rules
      ...baseCustomRules,
    },
  },
  {
    name: "Base TypeScript",
    files: ["**/*.{ts,tsx,cts,mts}"],
    languageOptions: {
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: { project: getTsConfig(), ecmaFeatures: { jsx: true } },
    },
    plugins: { "@typescript-eslint": tseslint.plugin },
    rules: {
      ...tseslint.configs?.strict?.[2]?.rules,
      ...tseslint.configs?.stylistic?.[2]?.rules,
    },
  },
];

/**
 * Best-practice preset
 */
export const bestPracticePreset = [
  {
    name: "Best Practices",
    files: ["**/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx}"],
    plugins: {
      prettier: prettierPlugin,
      "eslint-comments": eslintCommentsPlugin,
      unicorn: unicornPlugin,
      promise: promisePlugin,
      security: securityPlugin,
      jsdoc: jsdocPlugin,
      compat: compatPlugin,
    },
    rules: {
      ...jsdocPlugin.configs?.["flat/recommended-mixed"]?.rules,
      ...eslintCommentsPlugin.configs?.recommended?.rules,
      ...promisePlugin.configs?.recommended?.rules,
      ...securityPlugin.configs?.recommended?.rules,
      ...compatPlugin.configs?.recommended?.rules,
      ...unicornPlugin.configs?.recommended?.rules,
      ...prettierPlugin.configs?.recommended?.rules,

      "unicorn/no-array-for-each": "off",
    },
  },
];

/**
 * React preset
 */
export const reactPreset = [
  {
    name: "React",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactBasePlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      ...reactBasePlugin.configs?.flat?.recommended?.rules,
      ...reactBasePlugin.configs?.flat?.["jsx-runtime"]?.rules,
      ...reactHooksPlugin.configs?.flat?.recommended?.rules,
      ...jsxA11yPlugin.configs?.recommended?.rules,
    },
    settings: { react: { version: "detect" } },
  },
];

/**
 * Node preset
 */
export const nodePreset = [
  {
    name: "Node.js",
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { n: nPlugin },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: { ...nPlugin.configs?.["flat/recommended"]?.rules, ...nodeRules },
  },
  {
    name: "Node.js TypeScript",
    files: ["**/*.{ts,cts,mts}"],
    plugins: { n: nPlugin },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: { ...nPlugin.configs?.["flat/recommended"]?.rules, ...nodeRules },
  },
];

/**
 * Next.js preset
 */
export const nextPreset = [
  {
    name: "Next.js",
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: { "@next/next": nextPlugin },
    rules: { ...nextPlugin.configs?.recommended?.rules },
  },
];

/**
 * Import plugin preset
 */
export const importPreset = [
  {
    name: "Import plugin",
    files: ["**/*.{js,jsx,mjs,cjs}"],
    plugins: { "import-x": importxPlugin },
    languageOptions: {
      ...importxPlugin.flatConfigs?.recommended?.languageOptions,
    },
    rules: {
      ...importxPlugin.flatConfigs?.recommended?.rules,
    },
    settings: {
      "import/resolver": {
        node: true,
      },
    },
  },
  {
    name: "Import plugin TypeScript",
    files: ["**/*.{ts,tsx,mts,cts}"],
    plugins: { "import-x": importxPlugin },
    languageOptions: {
      ...importxPlugin.flatConfigs?.recommended?.languageOptions,
    },
    rules: {
      ...importxPlugin.flatConfigs?.recommended?.rules,
      ...importxPlugin.flatConfigs?.typescript?.rules,
    },
    settings: {
      ...importxPlugin.flatConfigs?.typescript?.settings,
      "import/resolver": {
        typescript: true,
      },
    },
  },
];

/**
 * Jest preset
 */
export const jestPreset = [
  {
    name: "Jest",
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: { jest: jestPlugin },
    rules: {
      ...jestPlugin.configs?.["flat/recommended"]?.rules,
      ...jestPlugin.configs?.style?.rules,
    },
  },
  {
    name: "Jest DOM & Testing Library",
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: {
      "jest-dom": jestDomPlugin,
      "testing-library": testingLibraryPlugin,
    },
    rules: {
      ...jestDomPlugin.configs?.recommended?.rules,
      ...testingLibraryPlugin.configs?.dom?.rules,
    },
  },
  {
    name: "Testing Library React",
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: { "testing-library": testingLibraryPlugin },
    rules: { ...testingLibraryPlugin.configs?.react?.rules },
  },
];

/**
 * Storybook preset
 */
export const storybookPreset = [
  {
    name: "Storybook",
    files: ["**/*.stories.{js,ts,jsx,tsx}"],
    plugins: { storybook: storybookPlugin },
    rules: {
      ...storybookPlugin?.configs?.["flat/recommended"]?.rules,
    },
  },
];

export default [...basePreset, ...bestPracticePreset];
