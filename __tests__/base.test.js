import path from "node:path";
import process from "node:process";

import { ESLint } from "eslint";

// Define ESLint test cases
const testCases = [
  {
    file: "__tests__/cases/base/no-console.js",
    expectedRules: ["no-console"],
  },
];

describe("ESLint Flat Config Test Cases", () => {
  let eslint;

  beforeEach(() => {
    eslint = new ESLint({
      overrideConfigFile: path.resolve(process.cwd(), "presets/base/base.js"),
    });
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const { file, expectedRules } of testCases) {
    // eslint-disable-next-line no-loop-func
    test(`${file} should trigger expected ESLint rules`, async () => {
      const results = await eslint.lintFiles([file]);
      const messages = results[0]?.messages || [];

      const triggeredRules = messages.map((m) => m.ruleId).filter(Boolean);

      // eslint-disable-next-line no-restricted-syntax
      for (const expectedRule of expectedRules) {
        expect(triggeredRules).toContain(expectedRule);
      }
    });
  }
});
