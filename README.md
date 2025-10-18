# eslint-config

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/msobiecki/eslint-config/blob/master/LICENSE)

Custom ESLint configuration for projects. It extends popular configs in one place.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

```bash
npm install --save-dev @msobiecki/eslint-config
```

Make sure to install the necessary peer dependencies as well:

```bash
npm install --save-dev eslint prettier typescript
```

## Usage

To use this ESLint configuration, you need to extend it in your project's `eslint.config.js` file:

### base javascript/typescript configuration

```javascript
import { defineConfig } from "eslint/config";
import { basePreset } from "@msobiecki/eslint-config";

export default defineConfig([
  basePreset,
  ...
]);
```


### best practice configuration

```javascript
import { defineConfig } from "eslint/config";
import { bestPracticePreset } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  bestPracticePreset,
]);
```

### import configuration

```javascript
import { defineConfig } from "eslint/config";
import { importPreset } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  importPreset,
]);
```

### react javascript/typescript configuration

```javascript
import { defineConfig } from "eslint/config";
import { reactPreset } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  reactPreset
]);
```

### next configuration

```javascript
import { defineConfig } from "eslint/config";
import { nextPreset } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  nextPreset
]);
```

### node configuration

```javascript
import { defineConfig } from "eslint/config";
import { node } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  node
]);
```

### jest configuration

```javascript
import { defineConfig } from "eslint/config";
import { jestPreset } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  jestPreset
]);
```


### storybook configuration

```javascript
import { defineConfig } from "eslint/config";
import { storybookPreset } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  storybookPreset,
]);
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to contribute to this repository by opening issues or submitting pull requests. Happy coding!
