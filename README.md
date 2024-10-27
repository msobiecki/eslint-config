# eslint-config

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/msobiecki/eslint-config/blob/master/LICENSE)

Custom ESLint configuration for projects. It extends popular Airbnb ESLint config and other popular configs in one place.

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
npm install --save-dev eslint prettier
```

## Usage

To use this ESLint configuration, you need to extend it in your project's `.eslintrc` file:

### base javascript/typescript configuration

```json
{
  "extends": "@msobiecki/eslint-config"
}
```

### react javascript/typescript configuration

```json
{
  "extends": [
    "@msobiecki/eslint-config/react",
    "@msobiecki/eslint-config/react-jsx"
  ]
}
```

### next configuration

```json
{
  "extends": ["@msobiecki/eslint-config/next"]
}
```

### node configuration

```json
{
  "extends": ["@msobiecki/eslint-config/node"]
}
```

### jest configuration

#### base

```json
{
  "extends": ["@msobiecki/eslint-config/jest"]
}
```

#### dom

```json
{
  "extends": [
    "@msobiecki/eslint-config/jest",
    "@msobiecki/eslint-config/jest-dom"
  ]
}
```

#### react

```json
{
  "extends": [
    "@msobiecki/eslint-config/jest",
    "@msobiecki/eslint-config/jest-react"
  ]
}
```

### best practice configuration

```json
{
  "extends": ["@msobiecki/eslint-config/best-practice"]
}
```

If you have an existing ESLint configuration, you can merge it with this configuration using the `extends` property:

```json
{
  "extends": ["@msobiecki/eslint-config", "your-existing-config"]
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to contribute to this repository by opening issues or submitting pull requests. Happy coding!
