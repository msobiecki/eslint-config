import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import { ESLint } from "eslint";

describe("check base rules", () => {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfigFile: path.resolve(process.cwd(), "presets/base/base.js"),
  });

  const testDirectory = path.join(__dirname, "test-cases", "base");
  const testFiles = fs.readdirSync(testDirectory);

  // eslint-disable-next-line no-restricted-syntax
  for (const file of testFiles) {
    const ruleId = path.basename(file, ".js");

    test(`${file} should trigger rule: ${ruleId}`, async () => {
      const results = await eslint.lintFiles([path.join(testDirectory, file)]);
      const messages = results[0]?.messages || [];
      const triggeredRules = messages.map((m) => m.ruleId).filter(Boolean);
      expect(triggeredRules).toContain(ruleId);
    });
  }
});
