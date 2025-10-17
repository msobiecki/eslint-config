import { defineConfig } from "eslint/config";

import js from "@eslint/js";
import tseslint from "typescript-eslint";

import reactBase from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nPlugin from "eslint-plugin-n";
import nextPlugin from "@next/eslint-plugin-next";
import jestPlugin from "eslint-plugin-jest";
import jestDomPlugin from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";
import prettierPlugin from "eslint-plugin-prettier";
import eslintComments from "eslint-plugin-eslint-comments";
import unicorn from "eslint-plugin-unicorn";
import promise from "eslint-plugin-promise";
import security from "eslint-plugin-security";
import jsdoc from "eslint-plugin-jsdoc";
import compat from "eslint-plugin-compat";
import jsxA11y from "eslint-plugin-jsx-a11y";

import getTsConfig from "./utils/get-ts-config.js";

/**
 * Base / best-practice preset
 */
export const base = [
  {
    ...js.configs.recommended,
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      prettier: prettierPlugin,
      "eslint-comments": eslintComments,
      unicorn,
      promise,
      security,
      jsdoc,
      compat,
    },
    rules: {
      ...eslintComments.configs?.recommended?.rules,
      ...unicorn.configs?.recommended?.rules,
      ...promise.configs?.recommended?.rules,
      ...security.configs?.recommended?.rules,
      ...jsdoc.configs?.recommended?.rules,
      ...compat.configs?.recommended?.rules,
      ...prettierPlugin.configs?.recommended?.rules,
    },
    settings: { jsdoc: { tagNamePreference: { swagger: "swagger" } } },
  },
  // TypeScript-specific override
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: { project: getTsConfig(), ecmaFeatures: { jsx: true } },
    },
    plugins: { "@typescript-eslint": tseslint.plugin },
    rules: {
      ...tseslint.configs?.strict?.[2]?.rules,
      ...tseslint.configs?.stylistic?.[2]?.rules,
      ...jsdoc.configs?.["recommended-typescript"]?.rules,
    },
  },
  // Index file override
  {
    files: ["**/index.{js,ts}"],
    rules: { "import/prefer-default-export": "off" },
  },
];

/**
 * React preset
 */
export const react = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactBase,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      ...reactBase.configs?.recommended?.rules,
      ...reactHooks.configs?.flat?.recommended?.rules,
      ...jsxA11y.configs?.recommended?.rules,
    },
    settings: { react: { version: "detect" } },
  },
];

/**
 * Node preset
 */
export const node = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { n: nPlugin },
    rules: { ...nPlugin.configs?.["flat/recommended"]?.rules },
  },
];

/**
 * Next.js preset
 */
export const next = [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: { "@next/next": nextPlugin },
    rules: { ...nextPlugin.configs?.recommended?.rules },
  },
];

/**
 * Jest preset
 */
export const jest = [
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: { jest: jestPlugin },
    rules: {
      ...jestPlugin.configs?.recommended?.rules,
      ...jestPlugin.configs?.style?.rules,
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: { "jest-dom": jestDomPlugin, "testing-library": testingLibrary },
    rules: {
      ...jestDomPlugin.configs?.recommended?.rules,
      ...testingLibrary.configs?.dom?.rules,
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: { "testing-library": testingLibrary },
    rules: { ...testingLibrary.configs?.react?.rules },
  },
];

/**
 * Full default export (all presets)
 */
export default defineConfig([...base, ...react, ...node, ...next, ...jest]);
