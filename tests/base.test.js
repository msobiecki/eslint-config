import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ESLint } from "eslint";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const configPath = path.resolve(process.cwd(), "eslint.config.js");
const configModule = await import(configPath);
const eslint = new ESLint({
  overrideConfigFile: true,
  overrideConfig: configModule.default ?? configModule,
});

describe("check base rules", () => {
  const testDirectory = path.join(dirname, "test-cases", "base");
  const testFiles = fs.readdirSync(testDirectory);


  testFiles.forEach((file) => {
    const ruleId = path.basename(file, ".js");

    test(`${file} should trigger rule: ${ruleId}`, async () => {
      const results = await eslint.lintFiles([path.join(testDirectory, file)]);
      const messages = results[0]?.messages || [];
      const triggeredRules = messages.map((m) => m.ruleId).filter(Boolean);
      expect(triggeredRules).toContain(ruleId);
    });
  });
});
