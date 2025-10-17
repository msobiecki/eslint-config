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

To use this ESLint configuration, you need to extend it in your project's `.eslintrc` file:

### Includes all presets in one config for full-stack projects.

This configuration combines base, React, Next.js, Node, and Jest presets, providing a single setup for full-stack applications.

```javascript
import { defineConfig } from "eslint/config";
import eslintConfig from "@msobiecki/eslint-config";

export default defineConfig([
  eslintConfig
]);
```

### base javascript/typescript configuration

```javascript
import { defineConfig } from "eslint/config";
import { base } from "@msobiecki/eslint-config";

export default defineConfig([
  base,
  ...
]);
```

### react javascript/typescript configuration

```javascript
import { defineConfig } from "eslint/config";
import { react } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  react
]);
```

### next configuration

```javascript
import { defineConfig } from "eslint/config";
import { next } from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  next
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
import {jest} from "@msobiecki/eslint-config";

export default defineConfig([
  ...,
  jest
]);
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to contribute to this repository by opening issues or submitting pull requests. Happy coding!
