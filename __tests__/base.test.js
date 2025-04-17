import path from "node:path";
import process from "node:process";

import { ESLint } from "eslint";

const testCases = [
  {
    file: "__tests__/cases/base/no-console.js",
    expectedRules: ["no-console"],
  },
];

describe("check ESLint test cases", () => {
  let eslint;

  beforeEach(() => {
    eslint = new ESLint({
      useEslintrc: false,
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
